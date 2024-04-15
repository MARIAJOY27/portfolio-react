import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
      <div className="footer row mt-5">
         <div className="col-md-2"></div>
         <div className="col-md-4">
            <div>
              <h2 style={{paddingTop:"40px"}}>Contact</h2>
              <h4 className='feel'>Feel free to reach out!</h4>
            </div>
         </div>
         <div className="col-md-4 mt-5">
           <div className='links'>
           <FontAwesomeIcon icon={faEnvelope} className='fs-5 me-2' /> <a style={{textDecoration:"none",fontSize:"22px",color:"white"}}  href="mariajoy1271@gmail.com">mariajoy1271@gmail.com</a>
           </div>
           <div className='links'>
           <FontAwesomeIcon icon={faGithub} className='fs-5 me-2' /> <a style={{textDecoration:"none",fontSize:"22px",color:"white"}} href="https://github.com/MARIAJOY27">https://github.com/MARIAJOY27</a>
           </div>
           <div className='links'>
           <FontAwesomeIcon icon={faLinkedin} className='fs-5 me-2' /> <a style={{textDecoration:"none",fontSize:"22px",color:"white"}} href="https://www.linkedin.com/in/maria-joy-b15556201">https://www.linkedin.com/in/maria-joy-b15556201</a>
           </div>
         </div>
         <div className="col-md-2"></div>
      </div>
    </>
  )
}

export default Footer
