import './main.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom'



export default function Nav() {

    
    return (
    <nav>

      <div>
        <div className="logoContainer">

            <div className="Header glitch" data-glitch="AP">
             AP
            </div>
    
        </div>
      </div>
      
      <div className="linksContainer">
      <a href="/assets/Angel Puente Software Engineer.pdf" >Resume</a>
      <Link to='/Barbershop'>Projects</Link>
      <Link to='/Barbershop'>Contact</Link>
      
      </div>
    </nav>
    );

  }
  
