import React from 'react'
import angular from '../assets/svg/angular.svg'
import reactsvg from '../assets/svg/Reactjs.svg'

const Stacks = () => {
  return (
    <>

            <div className="container text-center">
                
                <h2>Stack?</h2>
                <p>
                    Doesn't matter what stack you use. We have the community here. Connect with the best tutors and professionals
                </p>
                
                <div className="row align=items-center justify-content-center">
                        
                    
                    <div className="col-md-1 text-center stack-icon py-2">
                        <img src={angular} alt="" className="img-fluid" />
                        <h6 className='text-muted'>Angular</h6>
                    </div>

                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                    <div className="col-md-1 stack-icon text-center py-2">
                        <img src={reactsvg} alt="" className="img-fluid" />
                        <h6 className='text-muted'> React</h6>
                    </div> 
                    
                </div>
            </div>
    
    </>
  )
}

export default Stacks