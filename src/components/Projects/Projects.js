import React from 'react';
import p1 from '../../img/Screenshot 2021-11-29 192124.png'
import p2 from '../../img/Screenshot 2021-11-29 192250.png'
import p3 from '../../img/Screenshot 2021-11-29 192332.png'
const Projects = () => {
    return (
        <div className="container my-5">
            <h1>My Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={p1} class="card-img-top" alt="project-images"/>
                    <div class="card-body text-start">
                        <h5 class="card-title">Hospital Service</h5>
                        <p>
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>Html</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>Css</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>React</span>        
                        </p>
                    </div>
                    <div class="d-flex justify-content-between mx-3">
                       <p><a style={{textDecoration:'none'}} target="_blank" href="https://github.com/abdulmannaf145/Assignement-12-client"><i class="fab fa-github"></i>Client link</a></p>
                        <p><a style={{textDecoration:'none'}} target="_blank" href="https://assignment-10-208b9.web.app/"><i class="fas fa-chart-line"></i>live link</a></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src={p3} class="card-img-top" alt="project-images"/>
                    <div class="card-body text-start">
                        <h5 class="card-title">Hospital Service</h5>
                        <p>
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>Html</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>Css</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>React</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>MongoDB</span>        
                            <span className="px-2 py-1 rounded " style={{background:'rgb(229, 231, 235)'}}>Node js</span>        
                        </p>
                    </div>
                    <div class="d-flex justify-content-between mx-3">
                       <p><a style={{textDecoration:'none'}} target="_blank" href="https://github.com/abdulmannaf145/Assignment-11-client"><i class="fab fa-github"></i>Client link</a></p>
                        <p><a style={{textDecoration:'none'}} target="_blank" href="https://assignment-11-ab915.web.app/home"><i class="fas fa-chart-line"></i>live link</a></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src={p2} class="card-img-top" alt="project-images"/>
                    <div class="card-body text-start">
                        <h5 class="card-title">Hospital Service</h5>
                        <p>
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>Html</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>Css</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>React</span>        
                            <span className="px-2 py-1 rounded me-2" style={{background:'rgb(229, 231, 235)'}}>MongoDB</span>        
                            <span className="px-2 py-1 rounded " style={{background:'rgb(229, 231, 235)'}}>Node js</span>        
                        </p>
                    </div>
                    <div class="d-flex justify-content-between mx-3">
                       <p><a style={{textDecoration:'none'}} target="_blank" href="https://github.com/abdulmannaf145/Car-assignment"><i class="fab fa-github"></i>Client link</a></p>
                        <p><a style={{textDecoration:'none'}} target="_blank" href="https://assignment-12-85161.web.app/"><i class="fas fa-chart-line"></i>live link</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
