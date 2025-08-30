import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="name">
            <a href="me"><i class="fa-brands fa-pied-piper-alt"></i> Jk</a>
          </div>
          <div className="links">
            <a href="Home"><i class="fa-solid fa-house"></i> Home</a>
            <a href="About"><i class="fa-solid fa-tree"></i> Top places</a>
            <a href="Gallery"><i class="fa-solid fa-image"></i> Gallery</a>
            <a href="Contact"><i class="fa-solid fa-envelope"></i> Contact</a>
            <a href="Map"><i class="fa-solid fa-map"></i> Maps</a>
          </div>
          <div className="icon">
            <a href="Login">
              <i className="fa-solid fa-right-to-bracket"></i>
            </a>
          </div>
        </div>

        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            .navbar {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 30px;
              color: white;
              z-index: 10;
            }

            .links {
                display: flex;
                align-items: center;
                height: 40px;
                width: 800px;
                border-radius: 9px;
                padding: 0 20px;
                justify-content: center;
                gap: 20px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }

            .name a {
              color: white;
              text-decoration: none;
              font-size: 24px;
              font-weight: bold;
            }

            .links a {
              color: white;
              text-decoration: none;
              margin-left: 35px;
              font-family: 'Arial', sans-serif;
              font-size: 20px;
            }

            .icon a {
              color: white;
              text-decoration: none;
              font-size: 24px;
            }

            .links a:hover,
            .icon a:hover {
              color: skyblue;
            }


            .icon a:hover::after {
              content: "Add Account";
              position: absolute;
              top: 50px;
              right: 20px;
              background-color: white;
              color: black;
              padding: 5px 10px;
              border-radius: 5px;
              font-size: 12px;
            }
          `}
        </style>
      </>
    );
  }
}

export default Navbar;
