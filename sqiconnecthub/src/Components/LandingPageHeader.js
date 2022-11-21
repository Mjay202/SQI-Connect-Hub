import React from 'react'
import webdev from '../assets/svg/teammeeting.svg'


const LandingPageHeader = () => {
  return (
    <>
    
        <header className='landing-page-header gradient text-white'>
            <div className="container pt-5">
                <div className="row align-items-center justify-content-center g-5">
                    <div className="col-md-5">
                        <h1><strong>Welcome.</strong> </h1> 
                        <br />
                        <h3> SQI Connect Hub</h3>
                        <strong>Connect. Collaborate. Showcase. Get Hired.</strong>
                        <br />
                        <button className='mt-2 inline-block btn btn-lg btn-outline-light getStarted'>
                            
                        {/* <i className="bi bi-arrow-right mr-2"></i> */}
                            Get started
                            </button>

{/* 
                        <p>
                            The world of unlimited possibilities for the next-gen developers.
                        </p>

                        <p>
                            Find yourself a community @ SQI among top-leading tech leaders and world-class developers and boost your networking strength by <strong>100%</strong>. 
                        </p>

                        <p>
                            Connect and collaborate with the world-class tutors, students and alumnis  of SQI College of ICT.
                        </p> */}
                    </div>
                    
                    <div className="col-md-5 text-center">
                        <img className='img-fluid' src={webdev} alt="Dev Picture" />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#fff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,112C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </header>
    
    </>
  )
}

export default LandingPageHeader