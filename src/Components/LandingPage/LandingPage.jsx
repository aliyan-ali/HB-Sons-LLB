import React from 'react'
import './LandingPage.css'


function LandingPage() {
  return (
    <main>
        <section className='section-1'>
            <div className='sec-1-container'>
                <div className='d-flex container'>
                    <div>
                        <h1>Discover Excellence with HB & SONS LLC</h1>
                        <p className='my-3'>Our premier partner in fuel Transport and Delivery</p>
                        <div className='sec-1-btn-container'>
                        <button className='sec-1-btn btn btn-danger rounded-pill px-4 py-2 '>Get In Touch</button>
                    </div>
                    </div>
                    <div className='sec-1-img-container'>
                        <img className='sec-1-img' src='/assets/img1.png' alt=''/>
                    </div>
                </div>
                <div className='py-5 text-center sub-sec-1-container'>
                    <h2>Working With Fortune <span className='text-danger'>500 + Clients</span></h2>
                    <p>join us in our journey to success</p>
                    <div className='partner-logo-container d-flex justify-content-evenly p-3'>
                        <img src="/assets/image 2.png" alt="" srcset="" />
                        <img src="/assets/image 3.png" alt="" srcset="" />
                        <img src="/assets/image 4.png" alt="" srcset="" />
                        <img src="/assets/image 5.png" alt="" srcset="" />
                        <img src="/assets/image 6.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </section>
        <section className='section-2'>
            <div className='sec-2-container p-2'>
                <div className='d-flex container justify-content-between align-items-center'>
                    <div className='sec-2-img-container'>
                        <img className='sec-2-img' src='/assets/image 7.png' alt=''/>
                    </div>
                    <div className='sec-2-text-container'>
                        <h1>Discover Excellence With HB & SONS LLC</h1>
                        <p className='my-3'>Our premier partner in fuel Transport and Delivery</p>
                        <div className='sec-2-btn-container pt-3'>
                        <button className='sec-2-btn btn btn-outline-danger rounded-pill px-4 py-2 '>Get In Touch</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section-3'>
            <div className='sec-3-container p-2'>
                <h2 className='my-2 text-center'>Clients Testimonial</h2>
                <div className='testimonial-container d-flex container justify-content-around align-items-center py-5'>
                    <div className='d-flex container justify-content-between align-items-center '>
                    <div>
                        <img src="/assets/Frame 79.png" alt="" srcset="" className='rounded' />
                    </div>
                    <div className='testimonial-txt'>
                        I can't praise Hb & SONS LLC enough for their exceptional services.<br/> <br/> Their team's dedication to safety and on-time fuel deliveries has been a game-changer for our operations. We're proud to have them as our fuel transport partner.<br/>
                        <h4 className='text-danger py-2'>John Smith,</h4>
                        <p className='font-weight-light'>CEO, EnergyCorp Inc.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className='section-4'>
            <div className='sec-4-container p-2'>
                <div className='d-flex container justify-content-center align-items-center'>
                    <div className='sec-4-text-container py-5'>
                        <h1 className='text-danger'>Our Journey Your Assurance</h1>
                        <p className='my-2'>Dedicated to Delivering Excellence in Fuel Hauler Carrier and Gas Hauler Services</p>
                        <div className='sec-4-btn-container pt-3 d-flex container justify-content-center align-items-center'>
                            <button className='sec-4-btn btn btn-danger rounded-pill px-4 py-2 '>Get In Touch </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default LandingPage