import './App.css';
import React, { useState } from 'react';
import  {Navbar} from './Components/Navbar';
import  {AllRoutes} from './Routes/AllRoutes';

function App() {

  return (
    <div className="App" data-testid="users-app" >
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;