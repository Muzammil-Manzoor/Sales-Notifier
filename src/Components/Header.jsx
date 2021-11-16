import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logo from '../images/logo.png';


const Header = props => { 
    const history = useHistory();
    const user = localStorage.getItem('name');

    const Logout = () => {
        localStorage.clear()
        history.go('./login')
    }

    return (
        <>

            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="ht-right" >
                                {
                                    localStorage.getItem('token') ?
                                        <Link style={{color:"#E7AB3C"}} onClick={Logout} className="login-panel"><i className="fa fa-sign-out"></i><b> Logout {user}</b></Link>
                                        :
                                        <Link to="/login" className="login-panel"><i className="fa fa-user"></i>Sign In</Link>

                                }
                                <a href="/home">
                                    <img src={logo} alt="Sale Notifier"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                
                <div className="nav-item">
                    <div className="container">
                    

{/* 
                        <div className="nav-depart">
                            <div className="depart-btn">
                                <i className="ti-menu"></i>
                                <span>All Brands</span>
                                <ul className="depart-hover">
                                    <li><Link to="/gulahmed">Gul Ahmed</Link></li>
                                    <li><Link to="/khaadi">Khaadi</Link></li>
                                    <li><Link to="/sanasafinaz">Sana Safinaz</Link></li>
                                    <li><Link to="/bata">Bata</Link></li>
                                    <li><Link to="/mariab">Maria.B</Link></li>
                                    <li><Link to="/gulahmed">Bononza</Link></li>
                                    <li><Link to="/khaadi">Warda</Link></li>
                                    <li><Link to="/sanasafinaz">J.</Link></li>
                                    <li><Link to="/bata">Stylo</Link></li>
                                    <li><Link to="/mariab">Limelight</Link></li>
                                </ul>
                            </div>
                        </div> */}                   
                        <nav className="nav-menu mobile-menu">
                            <ul>
                                <li className={(props.name==="home") ? "active" : ""}><a href="/home">Home</a></li>

                                <li ><Link to="#">Brands</Link>
                                    <ul className="dropdown depart-hover">
                                    <li className={(props.name==="Gulahmed") ? "active" : ""}><Link to="/gulahmed">Gul Ahmed</Link></li>
                                    <li className={(props.name==="khaadi") ? "active" : ""}> <Link to="/khaadi"> Khaadi</Link></li>
                                    <li className={(props.name==="Sanasafinaz") ? "active" : ""}><Link to="/sanasafinaz">Sana Safinaz</Link></li>
                                    <li className={(props.name==="Bata") ? "active" : ""}><Link to="/bata">Bata</Link></li>
                                    <li className={(props.name==="MariaB") ? "active" : ""}><Link to="/mariab">Maria.B</Link></li>
                                    <li className={(props.name==="Borjan") ? "active" : ""}><Link to="/borjan">Borjan</Link></li>
                                    <li className={(props.name==="Warda") ? "active" : ""}><Link to="/warda">Warda</Link></li>
                                    <li className={(props.name==="junaidjamshed") ? "active" : ""}><Link to="/junaidjamshed">J.</Link></li>
                                    <li className={(props.name==="Limelight") ? "active" : ""}><Link to="/limelight">Limelight</Link></li>
                                    <li className={(props.name==="Metro") ? "active" : ""}><Link to="/metro">Metro</Link></li>
                                    <li className={(props.name==="Bonanza") ? "active" : ""}><Link to="/bonanza">Bonanza</Link></li>
                                    <li className={(props.name==="Stylo") ? "active" : ""}><Link to="/stylo">Stylo</Link></li>
                                    <li className={(props.name==="Bareeze") ? "active" : ""}><Link to="/bareeze">Bareeze</Link></li>
                                    <li className={(props.name==="AlkaramStudio") ? "active" : ""}><Link to="/alkaramStudio">Alkaram Studio</Link></li>
                                    </ul>
                                </li>
                                <li className={(props.name==="category") ? "active" : ""}><Link to="/category">Category</Link></li>
                                <li ><Link to="#">Collection</Link>
                                    <ul className="dropdown">
                                        <li className={(props.name==="male") ? "active" : ""}><Link to="/men">Men's</Link></li>
                                        <li className={(props.name==="female") ? "active" : ""}><Link to="/women">Women's</Link></li>
                                        <li className={(props.name==="kid") ? "active" : ""}><Link to="/kid">Kid's</Link></li>
                                    </ul>
                                </li>

                                <li ><Link to="#">Products</Link>
                                    <ul className="dropdown">
                                        <li className={(props.name==="toprated") ? "active" : ""} ><Link to="/toprated">Top Rated</Link></li>
                                        <li className={(props.name==="bookmark") ? "active" : ""}><Link to="/bookmark">Bookmark</Link></li>
                                    </ul>
                                </li>
                            
                                <li className={(props.name==="contact") ? "active" : ""}><Link to="/contact">Contact</Link></li>

                                <li className={(props.name==="about") ? "active" : ""}><Link to="/about">About us</Link></li>

                            </ul>

                        </nav>
                        <div id="mobile-menu-wrap"></div>
                    </div>

                </div>
            </header>




        </>
    )
}

export default Header;

