function Experience() {
    return (
        <div id="experience" className="d-flex flex-column flex-md-row py-md-5 align-items-center justify-content-center">
            <div className="list-group">
            </div>
            <div className="list-group">
                <div className="text-center">
                    <h2 className="fw-light  mb-5">My Experience</h2>
                </div>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Mentee</h6>
                            <p className="mb-0 opacity-75">Hyperledger Foundation</p>
                        </div>
                        <small className="opacity-50 text-nowrap">Jul 2023 - Feb 2024</small>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">Open Source Contributor</h6>
                            <p className="mb-0 opacity-75">Social(Formally Script Foundation)</p>
                        </div>
                        <small className="opacity-50 text-nowrap">Aug 2022 - Sep 2022</small>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">OSS contributor</h6>
                            <p className="mb-0 opacity-75">Contributed to Numpy, K8s and other popular open source projects.</p>
                        </div>
                        <small className="opacity-50 text-nowrap">Part time</small>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Experience;