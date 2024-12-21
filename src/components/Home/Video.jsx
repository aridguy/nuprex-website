import React from 'react'
import Vids from "../../assets/animation.mp4";

const Video = () => {
  return (
    <div>
    <section
    // style={{ position: "relative", top: "14em" }}
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div>
            <video
              style={{
                borderRadius: "8px",
                objectFit: "cover",
                height: "23em",
                width: "100%",
              }}
              height={500}
              width="100%"
              autoPlay
              loop
              muted
            >
              <source src={Vids} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Video
