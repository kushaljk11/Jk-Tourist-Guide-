import React from "react";
import image from "../pictures/card1.png";
import image2 from "../pictures/card2.png";
import image3 from "../pictures/map.png";



class Main extends React.Component {
  render() {
    return (
      <>
        <div className="deals">
            <h1 className="deal">Great deals from JK</h1>
            <p className="description">Discover amazing offers and discounts on your favorite trips.</p>
        </div>
        <div className="card">
            <div className="card1">
                <img src={image} alt="card1" height="100%" width="100%" />
            </div>
            <div className="card2">
                <img src={image2} alt="card2" height="100%" width="100%" />
            </div>
        </div>
        <div className="writer">
            <div className="card1write">
                <h1>Wanna explore Pokhara?</h1>
                <p>Pokhara is a beautiful city in Nepal, known for its stunning lakes, mountains, and adventure activities. It's a perfect destination for nature lovers and adventure seekers.</p>
                <p>Would you like to know more about Pokhara?</p>
                <button>Yes</button> <button>No</button>
            </div>
            
            <div className="card2write">
                <h1>Wanna explore Kathmandu?</h1>
                <p>Kathmandu, the capital of Nepal, is a city rich in history and culture. It's home to ancient temples, vibrant markets, and stunning architecture.</p>
                <p>Would you like to know more about Kathmandu?</p>
                <button>Yes</button> <button>No</button>
            </div>
            </div>
            <div className="map">
                <h1>Explore the map</h1>
                <p>Click on the map or a button to explore different places in Nepal.</p>
                <button>View Map</button>
            </div>
            <div className="mapfig">
                <img src={image3} alt="map" height={"50%"} width={"50%"} />
            </div>

        <style>
            {`
                .deals {
                    text-align: center;
                    margin-bottom: 20px;
                    margin-top: 60px;
                    margin-bottom: 60px;
                }

                .card {
                    display: flex;
                    justify-content: space-between;
                }

                .card1,
                .card2 {
                    flex: 1;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    margin: 0 10px;

                }
                .card1 img,
                .card2 img {
                    border-radius: 8px;
                    width: 100%;   
                }

                .card1write,
                .card2write {
                    height: 280px;
                    width: 400px;
                    text-align: left;
                    margin-top: 20px;
                    padding: 20px;
                    background-color: rgba(0, 0, 0, 0.4);
                    color: white;
                    border-radius: 8px;
                    position: relative;
                }
                    .writer {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    top: -300px;
                }
                .card1write {
                    position: absolute;
                    left: 10px;
                    top: -1px;
                }
                .card2write {
                    position: absolute;
                    left: 767px;
                    top: -1px;
                }

                .card1write button {
                    margin-right: 10px;
                    margin-top: 10px;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;   
                }
                .card1write button:hover {
                    background-color: #0056b3;
                }
                
                .card2write button {
                    margin-right: 10px;
                    margin-top: 10px;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;   
                }
                .card2write button:hover {
                    background-color: #0056b3;
                }
                .map {
                    text-align: center;
                    margin-top: 60px;
                    margin-bottom: 60px;
                    padding: 20px;
                    color: black;
                    
                }

                .map h1 {
                    font-size: 2rem;
                    margin-bottom: 10px;
                    color: black;
                }
                .map button {
                    padding: 10px 20px;
                    margin-top: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;   
                }
                .map button:hover {
                    background-color: #0056b3;
                }
                .mapfig {
                    text-align: center;
                    margin-top: 20px;
                    margin-bottom: 60px;
                }

            `}
        </style>
      </>
    );
  }
}

export default Main;
