import { useState, useEffect } from "react";
import Link from "next/link";
import LinkContainer from "./LinkContainer";
import MobileHeader from "./MobileHeader";

export default function Header() {
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
    <div className="header-style">
      <Link href="/">
        <a className="logo-style">
          <h1>Connect</h1>
        </a>
      </Link>
      {dimensions.width < 700 ? <MobileHeader /> : <LinkContainer />}

      <style jsx>{`
        .header-style {
          background-color: white;
          box-shadow: 1px 2px 10px #aba8a8;
          display: flex;
          justify-content: space-between;
          padding: 5px;
          margin-bottom: 0;
          position: fixed;
          top: 0;
          left: 0;
          transition: height 2s linear 1s;
          width: 100%;
        }

        .link-style {
          color: black;
          margin-left: 20px;
          margin-right: 10px;
          font-size: 18px;
          margin-top: 20px;
          text-decoration: none;
        }
        .link-style:hover {
          color: #9373ff;
        }
        .logo-style {
          text-decoration: none;
          color: black;
          margin-left: 1em;
        }
        .logo-style:hover {
          color: blue;
        }
        .link-container {
          margin-top: 1.6em;
          margin-right: 2em;
        }

        @media only screen and (max-width: 320px) {
          .header-style {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
