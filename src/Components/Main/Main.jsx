import React, {useEffect} from "react";
import './Main.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import 'aos/dist/aos.css'

const Data = [
    {
    id: 1,
    imgSrc : img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees : 'Rs.54700',
    description: 'Bora Bora is a major international tourist destination, famous for its seaside (and even offshore) luxury resorts. Its major settlement, Vaitape, is on the western side of the main island, opposite the main channel leading into the lagoon.'
    },
    

    {
    id: 2,
    imgSrc : img2,
    destTitle: 'Machu Pichu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees : 'Rs.49800',
    description: 'Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Temple of the Sun, the Temple of the Three Windows, and the Intihuatana. Most of the outlying buildings have been reconstructed in order to give visitors a better idea of how they originally appeared.'
    },



    {
    id: 3,
    imgSrc : img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees : 'Rs.50000',
    description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
    },

]

const Main = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
     },[])




    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>


                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>


                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )

                    })
                }



            </div>
        </section>
    )
}

export default Main
