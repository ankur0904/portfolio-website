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
                    <p className="lead text-body-secondary">A passionate web developer, Devops practictioner & open source contributor.</p>
                    <p>
                        <a href="https://drive.google.com/file/d/1TsntT1O_jfuz7cxyufff7PjRbWriVyKw/view?usp=sharing" className="btn btn-primary my-2 hero-button">Download Resume</a>
                        <a href="mailto:ankursingh91002@gmail.com" className="btn btn-secondary my-2">Contact me</a>
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;
