import React from 'react'

const NavBar = () => {
  return (
    
    <>

    <nav class="navbar navbar-expand-lg navbar-light bg-light p-1 fixed-top body-rounded shadow">
        <div class="container bg-light">
            <a class="navbar-brand" href="#">
                <span className='text-primary'> SQI</span>
                <span>Connect</span>
                <span>Hub</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">My Profile</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://edu.sqi.ng/our-story/#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#about">Communities</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Events</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link" href="#">
                        <button className='btn btn-sm btn-outline-secondary '><strong>Hire us</strong></button>
                        </a>
                    </li>
                    <li class="nav-item align-self-center">
                    <button className='btn btn-sm gradient text-white'><strong>Connect Hub</strong></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default NavBar