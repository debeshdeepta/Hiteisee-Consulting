import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted! We will review your application.');
    };

    return (
        <div className="careers-container">
            {/* <h1 className="page-heading">Career Page</h1> */}
            <div className="careers-banner">
                <h1 className="careers-heading">Career</h1>
                <p className="careers-subheading">Shape your future with us</p>
            </div>

            <div className="careers-content">
                <h1 className="content-heading">Go beyond the expected.</h1>
                <p className="intro-text">
                    A global leader and pioneer in business strategy, Boston Consulting Group (BCG) works closely with giants in the corporate world and society to take on their most important challenges and tap into their greatest opportunities. We go beyond ideas to design solutions and implement meaningful action. We’re dedicated to helping our clients do amazing things and unlocking the potential of those who advance the world. Join us, and you can too.
                </p>

                <div className="positions">
                    <h2 className="positions-heading">Open Positions</h2>
                    <ul className="positions-list">
                        <li>Software Developer</li>
                        <li>Data Analyst</li>
                        <li>Project Manager</li>
                        <li>Marketing Specialist</li>
                    </ul>
                </div>

                <div className="application-form">
                    <h2 className="form-heading">Apply Now</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Cover Letter</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resume">Upload Resume</label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Careers;
