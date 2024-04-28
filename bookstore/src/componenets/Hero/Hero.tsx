import studentImage from '../../assets/images/BookOffre.png'
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <>
            <section className="hero">
                <div className="main">
                    <div className="content">
                        <small>Offre</small>
                        <h2>Offre Spéciale 50%</h2>
                        <h5>Pour Les Etudiant de Bac</h5>
                       
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