import React from "react";
import image from "../pictures/image.png";

class Body extends React.Component {
  render() {
    return (
    <>
      <div className="body">
        <div className="image">
          <img src={image} alt="pic" height={"100%"} width={"100%"} />
        </div>
        <div className="text">
          <h1>Feel heaven in Nepal</h1>
        </div>
        <div className="country">
            <h1><i class="fa-solid fa-location-dot"></i>NEPAL</h1>
        </div>
      </div>
      <style>
        {`
          .body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .image {
            width: 100%;
            height: auto;
          }
          .text {
            width: 400px;
            height: 20px
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 80%;
            left: 13%;
            transform: translate(-50%, -50%);
          }
        
          .text h1 {
            color: white;
            text-align: center;
            font-size: 2.5rem;
            margin: 0;
            
            font-family: 'Arial', sans-serif;
          }

          .country {
            position: absolute;
            top: 38%;
            left: 47%;
            transform: translate(-50%, -50%);
            padding: 10px;
            border-radius: 5px;
            
          }

        .country h1 {
            color: white;
            font-size: 1.5rem;
            margin: 0;
            font-size: 100px;
            text-shadow: 12px 12px 8px rgba(0, 0, 0, 0.5);
            letter-spacing: 5px;
        }

        `}
      </style>
    </>
    );
  }
}

export default Body;
