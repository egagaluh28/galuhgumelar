import React, { useState } from 'react';
import { contactData } from './ContactData'; // Make sure the path is correct based on your project structure
import { Map } from '..'; // Adjust this import based on your actual Map component location

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    // const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = async (e) => {
        setInputs((values) => ({
            ...values,
            [e.target.id]: [e.target.value],
        }))
        console.log(inputs.email)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (inputs.name && inputs.email && inputs.message && inputs.subject) {
             try {
                 const res = await fetch(`api/contact`, {
                    method : "POST",
                    headers : {
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify(inputs)
                 });
                 setInputs({
                    name: "",
                    email: "",
                    message: "",
                    subject: "",
                 }); 
             } catch (error) {
                console.log(error)
             }
        }
    }
    

    return (
        <div id="contact" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">Contact</span>
                        <h1 className="display-3 fw-medium mb-0">Let&apos;s <span className="text-gradient">Talk</span></h1>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Email:</h6>
                                <h3 className="mb-0">{contactData.mainData.email}</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Call:</h6>
                                <h3 className="mb-0">{contactData.mainData.phone}</h3>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="contact-form mt-4 mt-lg-5 text-xl-end">
                            <form method="post" id="contactform" onSubmit={(e) => handleSubmit(e)}>
                                <div className="row gx-3 gy-0">
                                    <div className="col-12 col-md-6">
                                        <input type="text" id="name" name="name" placeholder="Name" required value={inputs.name} onChange={handleChange} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="email" id="email" name="email" placeholder="E-Mail" required value={inputs.email} onChange={handleChange}/>
                                    </div>
                                </div>
                                <input type="text" id="subject" name="subject" placeholder="Subject" required value={inputs.subject} onChange={handleChange}/>
                                <textarea name="message" id="message" placeholder="Message"value={inputs.message} onChange={handleChange}></textarea>
                                <button className="button button-dot" type="submit">
                                    <span data-text="Send Message">Send Message</span>
                                </button>
                            </form>
                            {/* Submit result */}
                            {/* <div className="submit-result">
                                {submitStatus === 'success' && (
                                    <span id="success">Thank you! Your Message has been sent.</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span id="error">Something went wrong. Please try again!</span>
                                )}
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Google Maps */}
                <Map /> {/* Adjust this component rendering based on your Map component */}
                {/* end Google Maps */}
            </div>
        </div>
    );
};

export default Contact;
