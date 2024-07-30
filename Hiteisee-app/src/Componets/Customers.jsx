import React from 'react';
import './Customers.css';
import img from '../assets/partners.jpg';

const Customers = () => {
    // // Example data for customers
    // const customerData = [
    //     { name: 'Company A', logo: '../assets/companyA-logo.png', description: 'Leading in technology solutions.' },
    //     { name: 'Company B', logo: '../assets/companyB-logo.png', description: 'Innovative healthcare provider.' },
    //     { name: 'Company C', logo: '../assets/companyC-logo.png', description: 'Global retail giant.' },
    //     { name: 'Company D', logo: '../assets/companyD-logo.png', description: 'Pioneers in automotive industry.' },
    //     { name: 'Company E', logo: '../assets/companyE-logo.png', description: 'Experts in financial services.' },
    //     { name: 'Company F', logo: '../assets/companyF-logo.png', description: 'Leaders in consumer electronics.' },
    //     // Add more companies as needed
    // ];

    return (
        <div className='customers-container'>
            <h2 className='customers-heading'>Our Esteemed Customers</h2>
            <div className='customers-grid'>
             <img src={img} alt="" className='partner-img' />
            </div>
        </div>
    );
}

export default Customers;
