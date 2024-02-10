import logo from '../ankur.png';

function Hero() {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                   <img className='profile-photo' src={logo} />
                </div>
                
            </div>
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Hi, I am Ankur Singh...</h1>
                    <p className="lead text-body-secondary">A passinate web developer, Devops practictioner & open source contributor.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;