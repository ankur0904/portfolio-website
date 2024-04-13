function Skills(){
    return(
        <section id="skills" className="container">
            <h2 className="text-center">Skills</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>REST API</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;