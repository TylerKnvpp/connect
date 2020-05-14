import { useState, useEffect } from "react";
import Link from "next/link";
const Hero = (props) => {
  const [dimensions, setDimensions] = useState({
    width: "",
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
    });

    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-container">
      <div className="text-container">
        <h1 className="title">
          <span style={{ color: "blue" }}>CONNECT</span> WITH YOUR AUDIENCE
        </h1>

        <p className="text-container-copy">
          We won't waste your time with the cliche's. Connect is a full-stack
          agency specializing in software development and content creation.
          Whether it is building software with the latest and greatest framework
          or filming and editing videos, we will deliver a product that
          resonates with your organization's core values and clientelle.
        </p>

        <Link href="/portfolio">
          <a className="link">See some of our work &rarr;</a>
        </Link>
      </div>
      <iframe
        src="https://player.vimeo.com/video/418591011?embedparameter=value;title=0;sidedock=0;controls=0;autoplay=1;loop=5;"
        width={dimensions.width * 0.8}
        height={dimensions.width * 0.6}
        frameborder="0"
      ></iframe>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:wght@400;600&display=swap");

        * {
          font-family: "Raleway", sans-serif;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          width: 90%;
        }

        .title {
          color: black;
          font-family: "Raleway", sans-serif;
          font-size: 60px;
          font-weight: 900;
          margin-bottom: 0;
        }

        .text-container-copy {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 24px;
          line-height: 1.7;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          margin-top: 7em;
          padding-left: 10%;
          padding-right: 10%;
          width: 80%;
        }

        .link {
          color: blue;
          font-family: "Source Sans Pro", sans-serif;
          font-size: 24px;
          font-weight: 600;
        }

        .link:hover {
          color: teal;
        }

        .hero-img {
          display: flex;
          height: 100%;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }

        @media only screen and (max-width: 600px) {
          .hero-container {
            flex-direction: column-reverse;
          }

          .title {
            font-size: 48px;
          }

          .link {
            font-size: 18px;
          }

          .text-container-copy {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
