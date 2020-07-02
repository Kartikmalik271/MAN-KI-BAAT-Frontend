import React from 'react'
 const Login = () => {
     return ( 
        <div className="mankibaat">
             
        <div className="row">
            <div className="col-6">
                <div className="mkbtext">
                   
                    <h1>Man Ki Baat.</h1>
                    <h2>Who are We <span> ? </span></h2>
                    <p> Une école est le lieu où nous obtenons des connaissances.<br/>
                        C'est comme un lieu saint pour les élèves.Et les professeurs<br/>
                         sont nos dieux. Mon école est très belle. Le nom de mon école<br/>
                          est ABC. C'est dans la ville XYZ. C'est avoir 150 chambres.<br/>
                           Mes professeurs sont aussi très compétents. Il y a 4000 <br/>
                           élèves dans notre école. 
                        J'aime mon école.<br/><br/>
                        <a href="#"className="btn btn-half">Signup</a>
                        <a href="#"className="btn btn-full">Login</a><br/>
                    </p>
                  
                </div>
            </div>
            <div className="col-6">
               <img className='brain' src="img/brain.png" alt=""/>
            </div>
        </div>
       
    </div>
      );
 }
  
 export default Login;