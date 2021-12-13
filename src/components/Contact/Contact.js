import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

     const sendSubmit = e => {
            e.preventDefault();
    emailjs.sendForm('gmail', 'template_u4aqybs', e.target, 'user_i5QMrTK4m4s55zPKgxsaA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset();
  };
    return (
        <div className="container my-5">
            <h1>Contact Me</h1>
            <form
                onSubmit={sendSubmit}
            >
                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-box">
                            <input required className="form-control" placeholder="Enter your name" type="text" name="name" />
                            <label htmlFor="form-name" className="icon lb-name">
                                <i class="fas fa-user"></i>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-box">
                            <input required className="form-control" placeholder="Enter your Email Address" type="text" name="email" />
                            <label htmlFor="form-name" className="icon lb-name">
                                <i class="far fa-envelope"></i>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-box">
                            <input required className="form-control" placeholder="Enter your Subject" type="text" name="subject"/>
                            <label htmlFor="form-name" className="icon lb-name">
                                <i class="fab fa-creative-commons-share"></i>
                            </label>
                        </div>
                    </div>
                    {/* <div className="col-sm-12 my-3">
                        <div className="form-box">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                             <label className="icon lb-name">
                                <i class="fab fa-creative-commons-share"></i>
                            </label>
                        </div>
                    </div> */}
                    <div className="col-lg-12 my-2">
                        <textarea  required className="input-box" placeholder="Your message" name="message" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <button className="button-dark">Send Now</button>
            </form>
        </div>
    );
};

export default Contact;