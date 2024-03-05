import logo from '../ankur.png';

function Hero() {
    return (
        <section className="text-center container">
            <div className="row py-lg-4">
                <div className="col-lg-6 col-md-8 mx-auto">
                   <img className='profile-photo' src={logo} alt="avatar" />
                </div>
            </div>
            <div className="row py-lg-4">
                <div className="col-lg-6 col-md-8 mx-auto hero-text">
                    <h1 className="fw-light">Hi, I am Ankur Singh...</h1>
                    <p className="lead text-body-secondary">A passinate web developer, Devops practictioner & open source contributor.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2 hero-button">Download Resume</a>
                        <a href="#" className="btn btn-secondary my-2">Contact me</a>
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;