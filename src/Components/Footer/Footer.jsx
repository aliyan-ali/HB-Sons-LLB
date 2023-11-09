import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
        <div class="footer-ctonainer text-white d-flex justify-content-between align-items-center container ">
            <div>
            <div class="footer-logo d-flex flex-column justify-content-between my-3 footer-img-container">
                <Link to="/">
                    <img src="/assets/image 1.svg" alt="" />
                </Link>
                <div className='text-dark my-4'>
                <p>Copyright © 2020 HB AND SONS LLC.<br/>All rights reserved.</p>
                </div>
                <div className="links-logo d-flex justify-content-between">
                <img src="./assets/Socialicon1.png" alt="" srcset="" />
                <img src="./assets/Socialicon2.png" alt="" srcset="" />
                <img src="./assets/Socialicon3.png" alt="" srcset="" />
                <img src="./assets/Socialicon4.png" alt="" srcset="" />
                </div>
            </div>
            </div>
            <div className=' flex-fill'>
            <div class="footer-links d-flex justify-content-between ">
                <div>
                <div class="footer-links-title ">
                    <h3>Company</h3>
                </div>
                <div class="footer-links-list">
                    <ul>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contectus">
                                Contect us
                            </Link>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div>
                <div class="footer-links-title">
                    <h3>Support</h3>
                </div>
                <div class="footer-links-list">
                    <ul>
                        <li>
                            <a href="#">Help center</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Legal</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div>
                <div class="footer-links-title">
                    <h3>Stay up to date</h3>
                </div>
                <div class="footer-links-list">
                    <ul>
                        <li>
                            <div className='position-relative'>
                                <input type="email" placeholder='Enter your email' className="footer-input rounded" />
                                <img src="/assets/Vector.png" alt="" srcset="" className='position-absolute m-2'/>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer