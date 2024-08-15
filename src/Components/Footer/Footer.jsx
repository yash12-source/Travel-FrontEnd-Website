/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
     },[])



    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>


            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

               <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/>  Travel.
                        </a>
                    </div>

                    <div data-aos="fade-up" className="footerParagraph">
                    Welcome to Travel, your ultimate destination for discovering and planning unforgettable journeys! Whether you're dreaming of a serene beach escape, an adventurous mountain trek, or a cultural city tour, Travel offers personalized recommendations, insider tips, and comprehensive guides to help you explore the world with ease. Our user-friendly platform features up-to-date travel information, inspiring destination ideas, and practical tools to book your next adventure effortlessly. Let Travel be your go-to resource for crafting extraordinary travel experiences and making memories that last a lifetime.
                    </div>

                    <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>

                    </div>
                </div>
                
                <div className="footerLinks grid">
                    <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Services
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Insurance
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Agency
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Tourism
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                        </li>
                    </div>


                    <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Bookings
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Rentcars
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            HostelWorld
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Trivago
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            TripAdvisor
                        </li>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            United Kingdom
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            United States of America
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Spain
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            India
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            France
                        </li>
                    </div>
                </div>

                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME </small>
                    <small> COPYRIGHTS RESERVED - YASHWARDHAN SONI</small>
                </div>

               </div>
            </div>
        </section>
    )
}

export default Footer
