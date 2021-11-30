import React from 'react';
import img from '../../img/istockphoto-1319188679-170667a.jpg'
const About = () => {
    return (
        <div className="container py-5">
            <h1>About Me</h1>
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1">
                <div className="col text-start">
                    <img src={img} alt="" />
                    <ul style={{marginLeft:"200px"}} className="d-flex list-unstyled">
                        <li><a style={{display: 'inline-block',height: '40px',width: '40px',fontSize: '16px',textAlign: 'center',lineHeight: '40px',color: 'gray',margin: '0 4px',borderRadius: '50%',transition: 'all .3s ease'}} href=""><i className="fab fa-facebook fs-4 ms-2"></i></a></li>
                        <li><a style={{display: 'inline-block',height: '40px',width: '40px',fontSize: '16px',textAlign: 'center',lineHeight: '40px',color: 'gray',margin: '0 4px',borderRadius: '50%',transition: 'all .3s ease'}} href=""><i className="fab fa-instagram fs-4 ms-2"></i></a></li>
                        <li><a style={{display: 'inline-block',height: '40px',width: '40px',fontSize: '16px',textAlign: 'center',lineHeight: '40px',color: 'gray',margin: '0 4px',borderRadius: '50%',transition: 'all .3s ease'}} href=""><i className="fab fa-github fs-4 ms-2"></i></a></li>
                        <li><a style={{display: 'inline-block',height: '40px',width: '40px',fontSize: '16px',textAlign: 'center',lineHeight: '40px',color: 'gray',margin: '0 4px',borderRadius: '50%',transition: 'all .3s ease'}} href=""><i className="fab fa-linkedin fs-4 ms-2"></i></a></li>
                    </ul>
                </div>
                <div className="col text-start d-flex justify-content-center align-items-center">
                    <p>Hi! I am <b>Mannaf</b>. I am a Web Developer. I have worked both in <b>web development</b>. But currently doing web development seriously. I can develop website by using HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind and so on. I have did more than 12 web project. I can adjust with innovative tach or new feature of programming easily.</p>
                </div>
            </div>
        </div>
    );
};

export default About;