// import React from 'react'
// import './LandingPage.css'


// function LandingPage() {
//   return (
//     <main>
//         <section className='section-1'>
//             <div className='sec-1-container'>
//                 <div className='d-flex container'>
//                     <div>
//                         <h1>Discover Excellence with HB & SONS LLC</h1>
//                         <p className='my-3'>Our premier partner in fuel Transport and Delivery</p>
//                         <div className='sec-1-btn-container'>
//                         <button className='sec-1-btn btn btn-danger rounded-pill px-5 py-3 '>Get In Touch</button>
//                     </div>
//                     </div>
//                     <div className='sec-1-img-container'>
//                         <img className='sec-1-img' src='/assets/img1.png' alt=''/>
//                     </div>
//                 </div>
//                 <div className='py-5 text-center sub-sec-1-container'>
//                     <h2>Working With Fortune <span className='text-danger'>500 + Clients</span></h2>
//                     <p>join us in our journey to success</p>
//                     <div className='partner-logo-container d-flex justify-content-evenly p-3'>
//                         <img src="/assets/image 2.png" alt="" srcset="" />
//                         <img src="/assets/image 3.png" alt="" srcset="" />
//                         <img src="/assets/image 4.png" alt="" srcset="" />
//                         <img src="/assets/image 5.png" alt="" srcset="" />
//                         <img src="/assets/image 6.png" alt="" srcset="" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <section className='section-2'>
//             <div className='sec-2-container p-2'>
//                 <div className='d-flex container justify-content-between align-items-center'>
//                     <div className='sec-2-img-container'>
//                         <img className='sec-2-img' src='/assets/image 7.png' alt=''/>
//                     </div>
//                     <div className='sec-2-text-container'>
//                         <h1>Discover Excellence With HB & SONS LLC</h1>
//                         <p className='my-3'>Our premier partner in fuel Transport and Delivery</p>
//                         <div className='sec-2-btn-container pt-3'>
//                         <button className='sec-2-btn btn btn-outline-danger rounded-pill px-5 py-3 '>Get In Touch</button>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <section className='section-3'>
//             <div className='sec-3-container p-2'>
//                 <h2 className='my-2 text-center'>Clients Testimonial</h2>
//                 <div className='testimonial-container d-flex container justify-content-around align-items-center py-5'>
//                     <div className='d-flex container justify-content-between align-items-center '>
//                     <div>
//                         <img src="/assets/Frame 79.png" alt="" srcset="" className='rounded' />
//                     </div>
//                     <div className='testimonial-txt'>
//                         I can't praise Hb & SONS LLC enough for their exceptional services.<br/> <br/> Their team's dedication to safety and on-time fuel deliveries has been a game-changer for our operations. We're proud to have them as our fuel transport partner.<br/>
//                         <h4 className='text-danger py-2'>John Smith,</h4>
//                         <p className='font-weight-light'>CEO, EnergyCorp Inc.</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </section>
//         <section className='section-4'>
//             <div className='sec-4-container p-2'>
//                 <div className='d-flex container justify-content-center align-items-center'>
//                     <div className='sec-4-text-container py-5'>
//                         <h1 className='text-danger'>Our Journey Your Assurance</h1>
//                         <p className='my-3'>Dedicated to Delivering Excellence in Fuel Hauler Carrier and Gas Hauler Services</p>
//                         <div className='sec-4-btn-container pt-3 d-flex container justify-content-center align-items-center'>
//                             <button className='sec-4-btn btn btn-danger rounded-pill px-5 py-3 btn-transition'>Get in Touch  <img className='btn-img' src="/assets/btnvector.png" alt="" srcset="" /></button>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <section className='section-5'>
//             <div className='sec-5-container p-2 py-3'>
//                 <div className='d-flex container justify-content-evenly align-items-center sec-5-text-container'>
//                     <div>
//                         <h1 className='font-weight'>Find Us On The Map</h1>
//                         <p className='my-3'>Explore Our Physical Location</p>
//                         <div className='sec-5-btn-container pt-3'>
//                             <button className='sec-5-btn btn btn-outline-danger rounded-pill px-5 py-3 '>Locate Us</button>
//                         </div>
//                     </div>
//                     <div className='sec-5-img-container'>
//                         <img className='sec-5-img' src='/assets/image 9.png' alt=''/>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <section className='section-6'>
//             <div className='sec-6-container p-2 py-5'>
//                 <div className='d-flex flex-column container justify-content-evenly align-items-center sec-6-text-container'>
//                     <h1 className='text-danger'>Ready To Fuel Your Needs?</h1>
//                     <p className='dark'>Contact Us for Inquiries, Quotes, or Any Other Information</p>
//                     <div className='sec-4-btn-container pt-3 d-flex container justify-content-center align-items-center'>
//                             <button className='sec-4-btn btn btn-danger rounded-pill px-5 py-3 btn-transition'>Get in Touch  <img className='btn-img' src="/assets/btnvector.png" alt="" srcset="" /></button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
// }

// export default LandingPage







import React, {useEffect} from "react";
import './LandingPage.css'
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";


// import required modules
import { EffectCreative } from "swiper/modules";



function LandingPage() {
        useEffect(() => {
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
            initClassName: "aos-init", // class applied after initialization
            animatedClassName: "aos-animate", // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 60, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 550, // values from 0 to 3000, with step 50ms
            easing: "ease", // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: "top-bottom", // defi
        });
        }, []);



  return (
    <main>
        <section className="section-1"   data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <div className="sec-1-container">
            <div className="d-flex container" >
                <div>
                <h1>Discover Excellence with HB & SONS LLC</h1>
                <p className="my-3">
                    Our premier partner in fuel Transport and Delivery
                </p>
                <div className="sec-1-btn-container">
                    <button className="sec-1-btn btn btn-danger rounded-pill px-5 py-3 ">
                    Get In Touch
                    </button>
                </div>
                </div>
                <div className="sec-1-img-container">
                <img className="sec-1-img" src="/assets/img1.png" alt="" />
                </div>
            </div>
            <div className="py-5 text-center sub-sec-1-container">
                <h2>
                Working With Fortune{" "}
                <span className="text-danger">500 + Clients</span>
                </h2>
                <p>join us in our journey to success</p>
                <div className="partner-logo-container d-flex justify-content-evenly p-3">
                <img src="/assets/image 2.png" alt="" srcset="" />
                <img src="/assets/image 3.png" alt="" srcset="" />
                <img src="/assets/image 4.png" alt="" srcset="" />
                <img src="/assets/image 5.png" alt="" srcset="" />
                <img src="/assets/image 6.png" alt="" srcset="" />
                </div>
            </div>
            </div>
        </section>
        <section className="section-2" data-aos="fade-up-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <div className="sec-2-container p-2">
            <div className="d-flex container justify-content-between align-items-center">
                <div className="sec-2-img-container">
                <img className="sec-2-img" src="/assets/image 7.png" alt="" />
                </div>
                <div className="sec-2-text-container">
                <h1>Discover Excellence With HB & SONS LLC</h1>
                <p className="my-3">
                    Our premier partner in fuel Transport and Delivery
                </p>
                <div className="sec-2-btn-container pt-3">
                    <button className="sec-2-btn btn btn-outline-danger rounded-pill px-5 py-3 ">
                    Get In Touch
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="section-3" data-aos="fade-up-left" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <div className="sec-3-container p-2">
                    <Swiper
                        grabCursor={true}
                        loop={true}
                        effect={"creative"}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                        creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        },
                        }}
                        modules={[EffectCreative]}
                        className="mySwiper5">
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='d-flex container justify-content-between align-items-center'>
                                <div>
                                    <img src="/assets/Frame 79.png" alt="" srcset="" className='rounded' />
                                </div>
                                <div className='testimonial-txt'>
                                    Hb & SONS LLC has exceeded our expectations in every way. Their commitment to quality and reliability is unparalleled. We're grateful to have them as our trusted fuel supplier.<br/><br/>
                                    <h4 className='text-danger py-2'>Emily Davis,</h4>
                                    <p className='font-weight-light'>Operations Manager, GreenEnergy Co.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='d-flex container justify-content-between align-items-center'>
                                <div>
                                    <img src="/assets/Frame 79.png" alt="" srcset="" className='rounded' />
                                </div>
                                <div className='testimonial-txt'>
                                    Our experience with Hb & SONS LLC has been exceptional. Their customer service is top-notch, and their competitive pricing makes them the ideal choice for all our fuel needs. We highly recommend their services.<br/><br/>
                                    <h4 className='text-danger py-2'>Sarah Johnson,</h4>
                                    <p className='font-weight-light'>Supply Chain Manager, EcoFuel Inc.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </section>
        <section className="section-4" data-aos="fade-up-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <div className="sec-4-container p-2">
            <div className="d-flex container justify-content-center align-items-center">
                <div className="sec-4-text-container py-5">
                <h1 className="text-danger">Our Journey Your Assurance</h1>
                <p className="my-3">
                    Dedicated to Delivering Excellence in Fuel Hauler Carrier and
                    Gas Hauler Services
                </p>
                <div className="sec-4-btn-container pt-3 d-flex container justify-content-center align-items-center">
                    <button className="sec-4-btn btn btn-danger rounded-pill px-5 py-3 btn-transition">
                    Get in Touch{" "}
                    <img
                        className="btn-img"
                        src="/assets/btnvector.png"
                        alt=""
                        srcset=""
                    />
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="section-5" data-aos="fade-up-left" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <div className="sec-5-container p-2 py-3">
            <div className="d-flex container justify-content-evenly align-items-center sec-5-text-container">
                <div>
                <h1 className="font-weight">Find Us On The Map</h1>
                <p className="my-3">Explore Our Physical Location</p>
                <div className="sec-5-btn-container pt-3">
                    <button className="sec-5-btn btn btn-outline-danger rounded-pill px-5 py-3 ">
                    Locate Us
                    </button>
                </div>
                </div>
                <div className="sec-5-img-container">
                <img className="sec-5-img" src="/assets/image 9.png" alt="" />
                </div>
            </div>
            </div>
        </section>
        <section className="section-6" data-aos="fade-up-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
            <div className="sec-6-container p-2 py-5">
            <div className="d-flex flex-column container justify-content-evenly align-items-center sec-6-text-container">
                <h1 className="text-danger">Ready To Fuel Your Needs?</h1>
                <p className="dark">
                Contact Us for Inquiries, Quotes, or Any Other Information
                </p>
                <div className="sec-4-btn-container pt-3 d-flex container justify-content-center align-items-center">
                <button className="sec-4-btn btn btn-danger rounded-pill px-5 py-3 btn-transition">
                    Get in Touch{" "}
                    <img
                    className="btn-img"
                    src="/assets/btnvector.png"
                    alt=""
                    srcset=""
                    />
                </button>
                </div>
            </div>
            </div>
      </section>
    </main>
  );
}

export default LandingPage