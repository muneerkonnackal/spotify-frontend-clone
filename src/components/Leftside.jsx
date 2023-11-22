import React from "react";
import "../styles/Leftside.css";

function Leftside() {
  return (
    <div className="Leftmenu">
      <div
        className="logocard  border-dark rounded p-4 ms-2 mt-2"
        style={{ width: "265px" }}
      >
        <h6 className="fw-bold">
          <i class="fa-brands fa-spotify fa-xl me-1"></i>Spotify
          <sup style={{ fontSize: "9px" }}>
            {" "}
            <i class="fa-regular fa-registered fa-xs"></i>
          </sup>
        </h6>
        <h6 style={{ fontSize: "17px" }} className="mt-4 fw-bold">
          <i class="fa-solid fa-house me-4 fa-lg "></i>Home
        </h6>
        <h6 className="mt-4 fw-bold" style={{ fontSize: "17px", color: "grey" }}>
          <i class="fa-solid fa-search me-4 fa-lg"></i>Search
        </h6>
      </div>

      <div
        className="library  border-rounded p-4 ms-2 mt-3"
        style={{ width: "265px", fontSize: "17px" }}
      >
        <h6 className="fw-bold" style={{ marginTop: "-10px" ,fontSize:"17px"}}>
          <i class="fa-solid fa-lines-leaning fa-lg me-2 "></i>Your Library{" "}
          <i class="fa-solid fa-plus fa-lg" style={{ marginLeft: "70px" }}></i>
        </h6>
      </div>

      <div className="scrolldiv  ms-3  ">
        <div className="div1 p-3  rounded-3">
          <h6 className="mt-2 fw-bold">Create your first playlist</h6>
          <span className="fw-" style={{ fontSize: "14px" }}>
            it's easy,we'll help you
          </span>
          <button
            className="btn bg-white rounded-5 mb-1 mt-3 fw-bold"
            style={{ height: "35px" }}
          >
            Create playlist
          </button>
        </div>
        <div className="div1 p-2 mt-2 rounded-3">
          <h6 className="mt-3 fw-bold">Let's find some podcasts to follow</h6>
          <h6 className="fw-normal" style={{ fontSize: "14px" }}>
            We'll keep you updated on new episodes
          </h6>
          <button className="btn bg-white rounded-5 mb-2 mt-2 fw-bold">
            Browse podcasts
          </button>
        </div>       
      </div>
      <div className="leftfooter mt-5">
       
            <ul className="d-flex me-2 " style={{listStyle:"none"}}>
                <li>Legal</li>
                <li>Privacy center</li> 
                <li>Privacy policy</li>
            </ul>
            <ul className="d-flex me-2" style={{listStyle:"none"}}>
                <li>Cookies</li>
                <li>About Ads</li> 
                <li>Accessibility</li>
            </ul>
            <ul className="d-flex me-2 " style={{listStyle:"none"}}>
                <li>Cookies</li>
                
            </ul>

            <button className="btn  bg-black text-white fw-bold border rounded-5" style={{height:"35px", marginLeft:"20px"}}><i class="fa-solid fa-globe me-2"></i>English</button>
        
      </div>
    </div>
  );
}

export default Leftside;
