import React from 'react'
import collaborate from '../assets/svg/collaborate.svg'
import connectpuzzle from '../assets/svg/connectpuzzle.svg'
import friends from '../assets/svg/friends.svg'
import community from '../assets/svg/community.svg'
import tutors from '../assets/svg/tutor.svg'
import showcase from '../assets/svg/showcase.svg'
import alumnis from '../assets/svg/Alumnis.svg'
import hire from '../assets/svg/hirework.svg'


const About = () => {
  return (
    <>

        <section className="about p-3" id='about'>
            <div className="container py-5">
                <h2 className='text-center mb-5'>What you can do</h2>
                <div className="row justify-content-center align-items-center">
                    
                    <div className="col-md-3 text-center">
                        <img src={friends} alt="about" className="img-fluid" />
                        <p>Connect with friends in class</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={collaborate} alt="about" className="img-fluid" />
                        <p>Collaborate on projects</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={connectpuzzle} alt="about" className="img-fluid" />
                        <p>Build your own team</p>
                    </div>
                    
                    <div className="col-md-3 text-center">
                        <img src={community} alt="about" className="img-fluid" />
                        <p>Join SQI community</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={tutors} alt="about" className="img-fluid" />
                        <p>Chat with our Pro Tutors</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={alumnis} alt="about" className="img-fluid" />
                        <p>Connect with experienced Alumnis </p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={showcase} alt="about" className="img-fluid" />
                        <p>Showcase your best projects</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={hire} alt="about" className="img-fluid" />
                        <p>Get Hired by recruiters</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,69.3C672,64,768,96,864,101.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </section>
    
    </>
  )
}

export default About