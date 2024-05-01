import studentImage from '../../assets/images/BookOffre.png'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData, postData, updateData, deleteData } from '../../api/ApiService';

function Hero() {
    const [offer, setOffer] = useState({
        id: 0,
        title: '',
        description: '',
        isSpecial: false,
        startDate: new Date(),
        endDate: new Date(),
        books: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getData('/offers/special'); // adjust the endpoint as needed
                setOffer(data);
            } catch (error) {
                setError('Failed to fetch offer');
                console.error('Failed to fetch offer:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOffer();
    }, []);
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!offer) return <p>No offer available at the moment.</p>;
    return (
        <>
            <section className="hero">
                <div className="main">
                    <div className="content">                        
                        <small>Offere Spécial</small>
                        <h2>{offer.title}</h2>
                        <h5>{offer.description}</h5>
                        <div className="btns">
                            <Link to="/offers">
                                <button>Obtenez l'offre<i className="fa-solid fa-arrow-right"></i></button>
                            </Link>
                            <Link to="/offers" className='allOffers'>
                                <button >Voir les autres promotions</button>
                            </Link>
                        </div>
                    </div>
                    <div className="img">
                        <img style={{ width: '280px' }}
                            src={studentImage}
                            alt=""
                        />
                    </div>
                </div>
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
            </section>
        </>
    )
}

export default Hero