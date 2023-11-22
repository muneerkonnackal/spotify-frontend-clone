import React, { useState } from "react";
import "../styles/body.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../image/Tate+McRae+Todays+top+fans.jpg";
import Mainfooter from "./Mainfooter";

function Mainbody() {
   
  return (
    <div className="Cardsection  ">
      <div className="bodyhead d-flex justify-content-between  me-4 ms-3">
        <h3
          className=" p-2"
          style={{ fontSize: "23.5px", letterSpacingpacing: "-1px" }}
        >
          Spotify Playlists
        </h3>
        <h6 className=" p-2">Show all</h6>
      </div>

      <div className="MainCardSection d-flex">
        <div className="card  ms-3">
          <Card
            className="bg-black  rounded-3 mb-"
            style={{ width: "13rem", height: "18.5rem" }}
          >
            <Card.Img
              style={{ height: "13rem", borderRadius: "20px",position:"relative" }}
              className="p-3"
              variant="top"
              src="https://images.squarespace-cdn.com/content/v1/5e4d521a3d1e463a28d50504/1627664477795-15HHBOD0EV2XHR9OQXS3/Tate+McRae+Todays+top+fans.jpg"
            />
                <Card.Body className="text-white " style={{ marginTop: "-20px" }}>
              <Card.Title style={{ fontSize: "16px" }} className="fw-bold mt-1 ">
                Today's Top Hits
              </Card.Title>
              <Card.Text>
             
                <h6  style={{ marginTop: "-5px", fontSize: "15px",textDecoration:'none' }} className="">Tate McRae is on top of the Hottest 50!</h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <button style={{height:"45px",width:"45px", color:"black",backgroundColor:"rgb(32, 219, 32)",marginTop:"-155px",position:"relative",marginLeft:"135px"}} className="crdbtn btn  text-center border rounded-5"><i class="fa-solid fa-play ms-1 align-item-center "></i></button>
        </div>
        {/* card-2 */}

        <div className="card  ms-3">
          <Card
            className="bg-black  rounded-3 mb-"
            style={{ width: "13rem", height: "18.5rem" }}
          >
            <Card.Img
              style={{ height: "14rem", borderRadius: "20px",position:"relative" }}
              className="p-3"
              variant="top"
              src="https://i.scdn.co/image/ab67706c0000bebbdd1472e90717a932033d76de"
            />
                <Card.Body className="text-white " style={{ marginTop: "-20px" }}>
              <Card.Title style={{ fontSize: "16px" }} className="fw-bold mt-1 ">
                RapCaviar
              </Card.Title>
              <Card.Text>
             
                <h6  style={{ marginTop: "-5px", fontSize: "15px",textDecoration:'none' }} className="">Tate McRae is on top of the Hottest 50!</h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <button style={{height:"45px",width:"45px", color:"black",backgroundColor:"rgb(32, 219, 32)",marginTop:"-155px",position:"relative",marginLeft:"135px"}} className="crdbtn btn  text-center border rounded-5"><i class="fa-solid fa-play ms-1 align-item-center "></i></button>
        </div>

        {/* card-3 */}

        <div className="card  ms-3">
          <Card
            className="bg-black  rounded-3 mb-"
            style={{ width: "13rem", height: "18.5rem" }}
          >
            <Card.Img
              style={{ height: "14rem", borderRadius: "20px",position:"relative" }}
              className="p-3"
              variant="top"
              src="https://i.scdn.co/image/ab67706f00000003cc30c9c5cf2114e3efd90d1b"
            />
                <Card.Body className="text-white " style={{ marginTop: "-20px" }}>
              <Card.Title style={{ fontSize: "16px" }} className="fw-bold mt-1 ">
              All Out 2010s
              </Card.Title>
              <Card.Text>
             
                <h6  style={{ marginTop: "-5px", fontSize: "15px",textDecoration:'none' }} className="">The biggest songs of the 2010s</h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <button style={{height:"45px",width:"45px", color:"black",backgroundColor:"rgb(32, 219, 32)",marginTop:"-155px",position:"relative",marginLeft:"135px"}} className="crdbtn btn  text-center border rounded-5"><i class="fa-solid fa-play ms-1 align-item-center "></i></button>
        </div>

          {/* card-4 */}

        <div className="card  ms-3">
          <Card
            className="bg-black  rounded-3 mb-"
            style={{ width: "13rem", height: "18.5rem" }}
          >
            <Card.Img
              style={{ height: "14rem", borderRadius: "20px",position:"relative" }}
              className="p-3"
              variant="top"
              src="https://i.scdn.co/image/ab67706f00000003fb1854533582c7bdc25f3da1"
            />
                <Card.Body className="text-white " style={{ marginTop: "-20px" }}>
              <Card.Title style={{ fontSize: "16px" }} className="fw-bold mt-1 ">
                Rock Classics
              </Card.Title>
              <Card.Text>
             
                <h6  style={{ marginTop: "-5px", fontSize: "15px",textDecoration:'none' }} className="">Rock legends & epic songs that continue to inspire</h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <button style={{height:"45px",width:"45px", color:"black",backgroundColor:"rgb(32, 219, 32)",marginTop:"-155px",position:"relative",marginLeft:"135px"}} className="crdbtn btn  text-center border rounded-5"><i class="fa-solid fa-play ms-1 align-item-center "></i></button>
        </div>

        {/* card-5 */}

        <div className="card  ms-3">
          <Card
            className="bg-black  rounded-3 mb-"
            style={{ width: "13rem", height: "18.5rem" }}
          >
            <Card.Img
              style={{ height: "14rem", borderRadius: "20px",position:"relative" }}
              className="p-3"
              variant="top"
              src="https://i.scdn.co/image/141c40597e8b10ad61822aec44584e295e2c7330"
            />
                <Card.Body className="text-white " style={{ marginTop: "-20px" }}>
              <Card.Title style={{ fontSize: "16px" }} className="fw-bold mt-1 ">
                Chill Hits
              </Card.Title>
              <Card.Text>
             
                <h6  style={{ marginTop: "-5px", fontSize: "15px",textDecoration:'none' }} className="">Kick back to the best new and recent chill hits.</h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <button style={{height:"45px",width:"45px", color:"black",backgroundColor:"rgb(32, 219, 32)",marginTop:"-155px",position:"relative",marginLeft:"135px"}} className="crdbtn btn  text-center border rounded-5"><i class="fa-solid fa-play ms-1 align-item-center "></i></button>
        </div>
      </div>
      <Mainfooter/>
      

    </div>
  );
}

export default Mainbody;
