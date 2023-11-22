import React from 'react'
import '../styles/mainfooter.css'

function Mainfooter() {
  return (
    <div className='mainfooter '>
        <div className="footerdiv1 d-flex justify-content-between">
        <ul>
            <li className='fw-bold text-white'>Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
        </ul>
        <ul>
            <li className='fw-bold text-white'>Communities</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
        </ul>
        <ul >
            <li className='fw-bold text-white'>Useful links</li>
            <li>Support</li>
            <li>Free Mobile App</li>
            
        </ul>
        <ul>
            <li></li>
            <li></li>
        </ul>
        <ul className='btn d-flex  ' style={{marginRight:"10px" }} >
            <li className='me-2'><button className='btn p- '><i class="fa-brands fa-instagram  "></i></button></li>
            <li className='me-2'><button className='btn'><i class="fa-brands fa-x-twitter "></i></button></li>
            <li className='me-2'><button className='btn'><i class="fa-brands fa-facebook "></i></button></li>
        </ul>
        </div>
        <hr className='ms-5 me-5' />
        <div>
            <p style={{fontSize:"15px", fontWeight:"bold",color:"rgb(152, 149, 149)"}} className=' ms-5 mt-5 mb-5'><i class="fa-regular fa-copyright"></i>2023 Spotify AB</p>
        </div>
    </div>
  )
}

export default Mainfooter