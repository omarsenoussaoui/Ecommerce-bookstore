import studentImage from '../../assets/images/BookOffre.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../api/ApiService';
import { calculateTimeRemaining } from '../../Helpers/calculateTimeRemaining';
function Hero() {
    const [offer, setOffer] = useState({
        id: 0,
        title: '',
        description: '',
        isSpecial: false,
        startDate: new Date(),
        endDate: new Date(),
        books: [],
        imageDataToString: null
    });

    const welcomHero = {
        title: 'Bienvenue',
        description: 'EL Mohamadia BookShop est à votre service'
    };



    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(offer.endDate));




    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getData('/offers/special'); // adjust the endpoint as needed
                setOffer(data);
            } catch (error) {
                console.error('Failed to fetch offer:', error);
            }
        };
        fetchOffer();
        return () => clearInterval(timer);
    }, []);

    const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(offer.endDate));
    }, 1000);
    return (
        <>
            <section className="hero">
                <div className="main">
                    <div className="content">
                        {offer.isSpecial && (
                            <small>Offere Spécial</small>
                        )}
                        <h2>{offer.title ?? welcomHero.title} </h2>
                        <h5>{offer.description ?? welcomHero.description}</h5>
                        {offer.isSpecial && (
                            <section className="sale">
                                <section className="sale">
                                    <div className="timer">
                                        <div className="hours">
                                            <span id="hour">{timeRemaining.days}</span>
                                            <small>Jours</small>
                                        </div>
                                        <div className="minutes">
                                            <span id="minute">{timeRemaining.hours}</span>
                                            <small >Hours</small>
                                        </div>
                                        <div className="seconds">
                                            <span id="second">{timeRemaining.minutes}</span>
                                            <small >Minutes</small>
                                        </div>
                                        <div className="seconds">
                                            <span id="second">{timeRemaining.seconds}</span>
                                            <small >Seconds</small>
                                        </div>
                                    </div>
                                </section>
                                <div>
                                </div>
                            </section>
                        )}
                        <div className="btns">
                            {offer.isSpecial && (
                                <Link to="/offers">
                                    <button>Obtenez l'offre<i className="fa-solid fa-arrow-right"></i></button>
                                </Link>
                            )}
                            <Link to="/offers" className='allOffers'>
                                <button >Voir toutes les promotions</button>
                            </Link>
                        </div>
                    </div >
                    {/* <div className="img">
                        <img style={{ width: '280px' }}
                            src={studentImage}
                            alt=""
                        />
                    </div> */}

                    < div className="img" >
                        <img src={offer.imageDataToString ?? studentImage} alt={offer.title} style={{ width: '280px' }} />
                    </div >
                </div >
                <div className="square-dot">
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                </div>
                <div className="orange-circle"></div>
                <div className="blue-circle"></div>
            </section >
        </>
    )
}

export default Hero