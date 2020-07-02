import React from 'react'

const Contactus = () => {
    return ( 
        <div className="contact-us">
        <div className="row">
            <div class="col-5">
                <div className="ctutext">
                   <div className="container">
                    <h1>Contact Us:</h1>
                    <div class="mail col-9"><p>mankibaat.pvt.ltd@gmail.com</p></div>
                    <div class="website col-9"><p>www.mankibaat.tech</p></div>
                    <div class="phone col-9"><p>+91 98366 06960</p></div>                
                  
                   </div>
                </div>
            </div>
            <div className="col-5">
                <div className="team">
                    <div id="slider1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active ">
                           
                                <img className='teamman' src="img/kartik.jpg"/><br/>
                                <h3>KARTIK MALIK</h3><br/>
                                <h4>frontend developer</h4>
                           
                          </div>
                          <div className="carousel-item">
                            
                          <img className='teamman' src="img/kartik.jpg"/><br/>
                                <h3>KARTIK MALIK</h3><br/>
                                <h4>frontend developer</h4>

                            
                          </div>
                          <div className="carousel-item">
                          <img className='teamman' src="img/kartik.jpg"/><br/>
                                <h3>KARTIK MALIK</h3><br/>
                                <h4>frontend developer</h4>
                        </div>
                        <a className="carousel-control-prev" href="#slider1" data-slide="prev">
                          <span className="carousel-control-prev-icon"></span>
                          <span className="se-only">PREV</span>
                        </a>
                        <a className="carousel-control-next" href="#slider1" data-slide="next">
                          <span className="se-only">NEXT</span>
                          <span className="carousel-control-next-icon"></span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    </div>
    
     );
}
 
export default Contactus;