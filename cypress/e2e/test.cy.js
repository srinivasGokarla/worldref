// cypress/integration/app.spec.js

import users from "../fixtures/users.json";

describe("Application Functionality Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // Login Tests
  it("should display login form with email and password fields", () => {
    cy.get('[data-cy="login-email"]').should("exist");
    cy.get('[data-cy="login-password"]').should("exist");
  });

  it("should log in with correct credentials and navigate to the home", () => {
    const user = users[0]; // Sample user from fixtures
    cy.get('[data-cy="login-email"]').type(user.email);
    cy.get('[data-cy="login-password"]').type(user.password);
    cy.get('[data-cy="login-form"]').submit();
    cy.url().should("eq", "/");
  });

  it("should display error message for invalid credentials", () => {
    cy.get('[data-cy="login-email"]').type("invalid@example.com");
    cy.get('[data-cy="login-password"]').type("invalidpassword");
    cy.get('[data-cy="login-form"]').submit();
    cy.contains(".error-message", "Invalid email or password").should("exist");
  });

  // Signup Tests
  it("should display signup form with email and password fields", () => {
    cy.contains("Don't have an account?").click();
    cy.url().should("eq", "/signup");
    cy.get('[data-cy="signup-email"]').should("exist");
    cy.get('[data-cy="signup-password"]').should("exist");
  });

  it("should sign up with valid credentials and navigate to the login page", () => {
    const newUser = { email: "newuser@example.com", password: "password123" };
    cy.contains("Don't have an account?").click();
    cy.get('[data-cy="signup-email"]').type(newUser.email);
    cy.get('[data-cy="signup-password"]').type(newUser.password);
    cy.get('[data-cy="signup-form"]').submit();
    cy.url().should("eq", "/login");
  });

  // Other Tests
  it("should display card details on the home", () => {
    const user = users[0]; // Sample user from fixtures
    cy.login(user); // Custom command to log in (implementation not shown here)
    cy.visit("/card");
    cy.contains("Card Heading").should("exist");
    cy.contains("Card Description").should("exist");
  });

  it("should be redirected to login page when accessing card without authentication", () => {
    cy.visit("/");
    cy.url().should("eq", "/login");
  });

  // Add more tests as needed
});
