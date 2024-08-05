<<<<<<< HEAD
// import React from 'react'
// import '../Componets/Home.css';
// const Home = () => {
//     return (
//         <div className='container'>
//             <div className="home">

//                 <div className="heading-home">
//                     <p className='welcome'>Welcome to <span className='hiteisee'>Hiteisee</span></p>
//                     <h1 className='text'>We help to grow your Buiseness</h1>
//                 </div>
//                 <div className="button">
//                     Our Services
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home
import React from 'react'
import './Home.css'

const Home = () => {
  return (
        <div className='container'>
            <div className="home">

                <div className="heading-home">
                    <p className='welcome'>Welcome to <span className='hiteisee'>Hiteisee</span></p>
                    <h1 className='text'>We help to grow your Buiseness</h1>
                </div>
                <div className="button">
                    Our Services
                </div>
            </div>
        </div>
  )
}

export default Home

=======
import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className="home">
                <div className="heading-home">
                    <p className='welcome'>Welcome to <span className='hiteisee'>Hiteisee</span></p>
                    <h1 className='text'>We help to grow your Business</h1>
                </div>
                <div className="button">
                  <Link to="/services" className="button-link">Explore Services</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
>>>>>>> 689d482e29b0aab1ac7f50384119f7cc158cc5c2
