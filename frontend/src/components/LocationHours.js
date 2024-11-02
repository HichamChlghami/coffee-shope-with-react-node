import React from 'react';


function LocationHours(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <h1 className="title">
                <img
                  src="\assets\img\locationicon.png"
                  alt="icon"
                  width="04%"
                />{" "}
                <sp />
                Location & Hours
              </h1>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <img src="\assets\img\CoffeeShopBuilding.jpg" width="85%" />
            </div>
            <div className="col-sm-5  col-lg-3 mt-4 offset-2 ">
              <h2 className="location-h2 text-center">Location</h2>
              <h6 className="mt-3">
                <p>
                  1125 North Capitol St. N.W <br /> Washington, DC 20002
                </p>
              </h6>
              <h2 className="mt-5 location-h2 text-center">Hours</h2>
              <h6 className="mt-3">
                <p>
                  Mon-Fri 7am-6pm
                  <br />
                  Sat + Sun 8am-6pm
                  <br />
                  Happy Hour M-F 3-6pm
                  <br />
                  After Hour Events 6-12am
                </p>
              </h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 text-center offset-3 location-h2">
              <h3>We'd Love To Hear From You!</h3>
            </div>
            <div className="col-12 text-center mt-3">
              <h5>
                <p>
                  <i className="fa fa-phone"></i>202.555.5555
                </p>
              </h5>
            </div>
            <div className="col-12 text-center">
              <a className="btn btn-link" href="mailto:info@capitolc&p.com">
                <i className="fa fa-envelope"></i> info@capitolc&p.com
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default LocationHours;