import react from "react";
import "./Mid.css";

const Mid = () => {
  return (
    <>
      <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h2 className="hero_title">
                Inscribe Excellence, Authenticate with Ease:
              </h2>
              <p className="hero_desc">
                Certify and Verify, the Assurance You Deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container mt-4 pt-4">
          <h1 className="text-center">About Us</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src="/images/abt.png"
                className="imageAboutPage"
                alt="not loadeds"
              />
            </div>

            <div className="col-lg-8">
              <p>
                Welcome to NFTCert! <br />
                We're on a mission to simplify certificate management. Our
                project leverages blockchain and NFT technology to make
                certificates more secure, accessible, and user-friendly.
                <br />
              </p>
              <br />
              <ul>
                <li>Revolutionizing Certificates:</li>
                <li>Decentralized Prowess:</li>
                <li>Unwavering Commitment:</li>
                <li>Transforming Traditional Documents:</li>
                <li>Vision for the Future:</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <br />
          <br />
          <h1 class="text-center">Services</h1>
          <br />
          <div class="row">
            <div class="col-lg-6 mt-6">
              <div class="card servicesText">
                <div class="card-body">
                  <h4 class="card-title mt-10">Certificate Generation</h4>
                  <center>
                    <img src="/images/generation.png" height="80px" />
                  </center>
                  <p class="card-text mt-10">
                    NFTCert simplifies certificate creation by gathering user
                    details, generating a unique identifier, and securely
                    recording this data on the Polygon blockchain using NFT
                    technology. Smart contracts and IPFS ensure authenticity,
                    and the seamless process allows for easy recipient access
                    through download or viewing options, embodying a secure and
                    efficient certification ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-6">
              <div class="card servicesText">
                <div class="card-body">
                  <h4 class="card-title mt-8">Certificate Verification</h4>
                  <center>
                    <img src="/images/verfication.png" height="90px" />
                  </center>
                  <p class="card-text mt-8">
                    NFTCert ensures a seamless certificate verification process.
                    Users input a unique identifier, validated against the
                    Polygon blockchain for authenticity. Upon confirmation,
                    vital metadata is retrieved and rigorously validated,
                    providing swift and trustworthy verification results for
                    immediate access to genuine digital certificates.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="how_it_works">
        <br />
        <br />
        <center>
          <h1>HOW IT WORKS</h1>
        </center>
        <div class="row">
          <div class="column">
            <img class="image" src="\images\request.jpeg" alt="Image 1" className="create" />
            <p className="info">REQUEST AND TEMPLATE SELECTION::</p>
          </div>
          <div class="column">
            <img class="image" src="\images\generation_img.png" alt="Image 2" className="create" height="200px" width="200px" />
           <br/> <p className="info"><br/>CERTIFICATE GENERATION AND METADATA INCLUSION:</p>
          </div>
          <div class="column">
            <img class="image" src="\images\nft.jpeg" alt="Image 3" className="create img_second" />
            <p className="info"><br/>NFT CONVERSION AND BLOCKCHAIN INTEGRATION:</p>
          </div>
        </div>
        <center>
        <a href="/generate"><button classname="button">      <span>Generate Certifiacte Now</span></button></a>
        </center>
      </div>




      <div className="how_it_works">
        <br />
        <br />
        <center>
          <h1>HOW IT WORKS</h1>
        </center>
        <div class="row">
          <div class="column">
            <img class="image" src="\images\select.png" alt="Image 1" />
            <p className="info">REQUEST AND CUSTOMIZATION:</p>
          </div>
          <div class="column">
            <img class="image" src="\images\request.png" alt="Image 2" />
            <p className="info">GENERATION & METADATA ADDITION:</p>
          </div>
          <div class="column">
            <img class="image" src="\images\receive.png" alt="Image 3" />
            <p className="info">RECEIVE YOUR E-VERIFIED CERTIFICATE</p>
          </div>
        </div>
        <center>
        <a href="/verification"><button classname="button">      <span>DirectVerify Now</span></button></a>
        </center>
      </div>
    </>
  );
};

export default Mid;
