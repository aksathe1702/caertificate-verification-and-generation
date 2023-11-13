
import react from 'react';
import './Header.css';

const Header=()=> {
  return (
    <>
    <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className="container">
            <a className="navbar-brand" href="#">Brad</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               
                    <img src="images/menu.png" height="50px" width="50px" className="navbar-toggler-icon"/>
           
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sign">Sign UP</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
    </>
  );
}

export default Header;
