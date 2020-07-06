import React from 'react'

import illustration from '../img/illustration.png'
import blogs from '../img/blog-icon.png'
import poetry from '../img/poetry-icon.png'
import videos from '../img/video-icon.png'
import songs from '../img/song-icon.png'
import ab from '../img/audiobooks-icon.png'
import lowerbg from '../img/background.png'

const Content = () => {
    return ( 
    <div className="content">
       <div className="col-12">
        <div className="container">
           <div className="row">
           <img className='illustration'src={illustration} alt=""/>
           <img className="lowerbg" src={lowerbg} alt=""/>
         <div className="col-4">
            <div className="card">
             <div className="row justify-content-center">
               <h1>BLOGS</h1>
               <img className="icon" src={blogs} alt=""/>
               <p>Une école est le lieu où nous
                  obtenons des connaissances
                  Une école est le lieu où nous.
               </p>
               <button className="btn btn-full" href="#">VISIT PAGE</button>
             </div>
           </div>
         </div>

         <div className="col-4">
            <div className="card">
             <div className="row justify-content-center">
               <h1>POETRY</h1>
               <img className="icon1" src={poetry} alt=""/>
               <p>Une école est le lieu où nous
                  obtenons des connaissances
                  Une école est le lieu où nous.
               </p>
               <button className="btn btn-full" href="#">VISIT PAGE</button>
             </div>
           </div>
         </div>

         <div className="col-4">
            <div className="card">
             <div className="row justify-content-center">
               <h1>VIDEOS</h1>
               <img className="icon1-1" src={videos} alt=""/>
               <p>Une école est le lieu où nous
                  obtenons des connaissances
                  Une école est le lieu où nous.
               </p>
               <button className="btn btn-full" href="#">VISIT PAGE</button>
             </div>
           </div>
         </div>
         <div className="col-12">
             <div className="row justify-content-center">
             <div className="col-4">
            <div className="card2">
             <div className="row justify-content-center">
               <h1>SONGS</h1>
               <img className="icon1-1" src={songs} alt=""/>
               <p>Une école est le lieu où nous
                  obtenons des connaissances
                  Une école est le lieu où nous.
               </p>
               <button className="btn btn-full" href="#">VISIT PAGE</button>
             </div>
           </div>
         </div>

         <div className="col-4">
            <div className="card2">
             <div className="row justify-content-center">
               <span><h1>AUDIO BOOKS</h1></span>
               <img className="icon1-1" src={ab} alt=""/>
               <p>Une école est le lieu où nous
                  obtenons des connaissances
                  Une école est le lieu où nous.
               </p>
               <button className="btn btn-full" href="#">VISIT PAGE</button>
             </div>
           </div>
         </div>
             </div>
         </div>
         
         </div>
       </div>

       

        
      </div>
    </div>
     );
}
 
export default Content;
