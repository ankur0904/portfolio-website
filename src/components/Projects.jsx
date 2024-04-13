import a from '../a.png'
import b from '../b.png'
import c from '../c.png'

function Projects() {
    return (
        <div id="project" class="container mt-3">
            <div className="text-center">
                    <h2 className="fw-light mb-5">My Projects</h2>
                </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img className='bd-placeholder-img card-img-top' width="100%" src={a} alt="avatar" />
                        <div class="card-body">
                            <p class="card-text">Developed a browser extension for effortless language translation into English, prioritizing user-friendly UI and seamless accessibility within the browser environment.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href='https://github.com/ankur0904/translation-browser-extension' type="button" class="btn btn-sm btn-link">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                        <img className='bd-placeholder-img card-img-top' width="100%" src={b} alt="avatar" />
                        <div class="card-body">
                            <p class="card-text">Created a web application during a hackathon to aid hospital staff in securely managing patient records, integrating backend with frontend for optimal performance and reducing patient waiting times by over 1.5 hours.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href='https://github.com/ankur0904/Medkit' type="button" class="btn btn-sm btn-link">Code</a>
                                </div>
                                    <a href='https://web-production-92aa.up.railway.app/' type="button" class="btn btn-sm btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img className='bd-placeholder-img card-img-top' width="100%" src={c} alt="avatar" />
                        <div class="card-body">
                            <p class="card-text">Developed a Flask project integrating an external weather API and Bootstrap, enhancing user experience and providing real-time weather information seamlessly within the application.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href='https://github.com/ankur0904/weather_and_news.git' type="button" class="btn btn-sm btn-link">Code</a>
                                </div>
                                <a href='https://weatherandnews-production.up.railway.app/' type="button" class="btn btn-sm btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;