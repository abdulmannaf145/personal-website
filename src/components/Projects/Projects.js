import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/fakebd.json')
        .then(res => res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className="container my-5">
            <h1>My Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.map(load => <div class="col">
                    <div class="card h-100">
                    <img style={{height:"300px"}} src={load.p1} class="card-img-top" alt="project-images"/>
                    <div class="card-body text-start">
                                <h5 class="card-title">{load.name }</h5>
                    </div>
                    <div class="d-flex justify-content-between mx-3">
                        <p><a style={{ textDecoration: 'none' }} target="_blank" href={load.github}><i class="fab fa-github"></i>Client link</a></p>
                        <p>
                            <Link to={`/details/${load.key}`}>
                            <a>see more details</a>
                        </Link>        
                        </p>
                        <p><a style={{textDecoration:'none'}} target="_blank" href={load.livelink}><i class="fas fa-chart-line"></i>live link</a></p>
                    </div>
                    </div>
                </div>)
                }
                
                {/* <div class="col">
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
                       <p><a style={{textDecoration:'none'}} target="_blank" href=""><i class="fab fa-github"></i>Client link</a></p>
                        <p><a style={{textDecoration:'none'}} target="_blank" href=""><i class="fas fa-chart-line"></i>live link</a></p>
                    </div>
                    </div>
                </div> */}
                {/* <div class="col">
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
                       <p><a style={{textDecoration:'none'}} target="_blank" href=""><i class="fab fa-github"></i>Client link</a></p>
                        <p><a style={{textDecoration:'none'}} target="_blank" href=""><i class="fas fa-chart-line"></i>live link</a></p>
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
