import React from 'react'
import '../styles/bottombanner.css'

function Bottombanner() {
  return (
    <div className='banner me-2 ms-2 mb-2 fixed-bottom d-flex justify-content-between'>
        <div>
            <ul style={{marginLeft:"-15px"}}>
                <li className='' style={{listStyle:"none"}}><p style={{fontSize:"13px"}}>PREVIEW OF SPOTIFY</p></li>
                <li style={{listStyle:"none",fontWeight:"700", fontSize:"16px"}} ><p className=''>Sign up to get unlimited songs and podcasts with occasional ads.No credit card needed.</p></li>
            </ul>
        </div>
        <div>
        <button className='btn me-3  fw-bold text-black bg-white  border rounded-5' style={{width:"160px", height:"50px",marginTop:"9px"}}>Sign up free</button>
        </div>
    </div>
  )
}

export default Bottombanner