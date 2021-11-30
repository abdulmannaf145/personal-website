import React from 'react';
import Typewriter from "typewriter-effect";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="hero-section">
                <div className="py-5 text-white text-start container">
                    <h1 className='h1'>Hi,I am Abdul Mannaf</h1>
                    <p className="h2 my-3">
                        Still top of and the drops. What don't issued character god,<br /> no ports, credit question and curse casting problem <br /> will the one could apply.
                    </p>
                    <h1 className="mb-2">
                        <Typewriter
                            options={{
                            autoStart: true,
                            loop: true,
                            delay: 90,
                            strings: [
                            "JavaScript Developer",
                            "React.js Developer",
                            "MongoDB",
                            "Bootstrap",
                            "HTML",
                            "CSS",
                            ],
                        }}
                        />
                    </h1>
                <a
                href={
                  "https://drive.google.com/u/0/uc?id=1Nfc5hEOtVE0IkUpgAkCq1Gmg38CaPqmZ&export=download"
                }
                download="Abdul_Mannaf Resume.pdf"
              >
                <button className="button-dark">
                 Resume <i class="fas fa-download"></i>
                </button>
              </a>
                </div>
            </div>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;