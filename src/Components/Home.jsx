import Card from "./Card"
import { Link } from "react-router-dom"
export const Home =()=>{


    return(
        <div className="home-container" data-testid="dashboard-component">
        <h1 className="welcome-heading">Welcome to the Home page!</h1>
        <Card />
    </div>
    )
}