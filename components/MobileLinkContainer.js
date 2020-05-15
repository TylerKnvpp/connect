import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileLinkContainer(props) {
  return (
    <div className="test">
      <div className="link-container">
        <Link href="/portfolio">
          <a className="link-style">Portfolio</a>
        </Link>
        <Link href="/blog">
          <a className="link-style">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="link-style">Contact</a>
        </Link>
        <a
          className="link-style close"
          onClick={() => props.setMenuOpened(!props.setMenuOpened)}
        >
          Close
        </a>
        <style jsx>{`
          .test {
            position: absolute;
          }
          .link-style {
            color: black;
            font-size: 18px;
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 1em;
            text-decoration: none;
          }
          .link-style:hover {
            color: blue;
          }
          .logo-style {
            text-decoration: none;
            color: black;
            margin-left: 1em;
          }
          .logo-style:hover {
            color: blue;
          }
          .close {
            color: blue;
          }
          .link-container {
            display: flex;
            top: 200px;
            flex-direction: column;
            right: 140px;
            height: 800px;
            position: relative;
            text-align: center;
            width: 100%;
            animation: slideleft;
          }

          @keyframes slideleft {
            from {
              margin-top: 0;
              margin-left: 0;
              top: 0;
              right: 0;
            }
            to {
              margin-top: 400px;
              margin-left: 1000px;
              right: 140px;
              top: 200px;
            }
          }

          @media (max-width: 700px) {
            .link-container {
              top: 200px;
              right: 250px;
            }
          }
          @media (max-width: 550px) {
            .link-container {
              top: 200px;
              right: 200px;
            }
          }
          @media (max-width: 414px) {
            @keyframes slide {
              from {
                top: 200px;
                right: -500px;
              }
              to {
                right: 155px;
                top: 200px;
              }
            }

            .link-container {
              right: 155px;
              top: 200px;
              animation: slide;
              animation-duration: 0.4s;
            }
          }
          @media (max-width: 375px) {
            @keyframes slide {
              from {
                top: 200px;
                right: -500px;
              }
              to {
                right: 140px;
                top: 200px;
              }
            }

            .link-container {
              right: 140px;
              top: 200px;
              animation: slide;
              animation-duration: 0.4s;
            }
          }
          @media (max-width: 320px) {
            @keyframes slide {
              from {
                top: 110px;
                right: -500px;
              }
              to {
                right: 115px;
                top: 110px;
              }
            }

            .link-container {
              right: 115px;
              top: 110px;
              animation: slide;
              animation-duration: 0.4s;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
