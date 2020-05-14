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
            margin-top: 20px;
            margin-bottom: 1em;
            text-decoration: none;
          }
          .link-style:hover {
            color: red;
          }
          .logo-style {
            text-decoration: none;
            color: black;
            margin-left: 1em;
          }
          .logo-style:hover {
            color: red;
          }
          .close {
            color: red;
          }
          .link-container {
            display: flex;
            top: 200px;
            flex-direction: column;
            right: 140px;
            height: 800px;
            position: relative;
            text-align: center;
            -webkit-transition: height 2s;
            transition: height 2s;
            width: 100%;
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
            .link-container {
              top: 200px;
              right: 150px;
            }
          }
          @media (max-width: 375px) {
            .link-container {
              top: 200px;
              right: 130px;
            }
          }
          @media (max-width: 320px) {
            .link-container {
              top: 150px;
              right: 100px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
