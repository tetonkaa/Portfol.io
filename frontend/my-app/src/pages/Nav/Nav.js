import './main.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom'



export default function Nav() {

    
    return (
    <nav>

      <div>
        <div className="logoContainer">

            <a href="https://www.angel-puente.dev/"><div className="Header glitch" data-glitch="AP">
             AP
            </div>
            </a>
    
        </div>
      </div>
      
      <div className="linksContainer">
      <Link to="/">Main</Link>
      <Link to='/Projects'>Projects</Link>
      <a target="_blank" href="/assets/Angel Puente Software Engineer.pdf" >Resume</a>
      <Link to='/Contact'>Contact</Link>
      
      </div>
    </nav>
    );

  }
  
