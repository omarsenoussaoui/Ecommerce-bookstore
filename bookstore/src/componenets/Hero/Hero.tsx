import studentImage from '../../assets/images/BookOffre.png'
function Hero() {
    return (
        <>
            <section className="hero">
                <div className="main">
                    <div className="content">
                        <small>Offre</small>
                        <h2>Offre Spéciale 50%</h2>
                        <h5>Pour Les Etudiant de Bac</h5>
                        <p>
                           Sur Les Livres de révsion
                        </p>
                        <div className="btns">
                            <button>Obtenez l'offre<i className="fa-solid fa-arrow-right"></i></button>
                            <button>Voir les autres promotions</button>
                        </div>
                    </div>
                    <div className="img">
                        <img style={{width : '280px'}}
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