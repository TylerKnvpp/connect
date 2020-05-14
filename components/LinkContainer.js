import Link from "next/link";

export default function LinkContainer() {
  return (
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
      <style jsx>{`
        .header-style {
          background-color: white;
          box-shadow: 1px 2px 10px #aba8a8;
          display: flex;
          justify-content: space-between;
          padding: 10;
          margin-bottom: 0;
          position: fixed;
          top: 0;
          left: 0;
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
          color: blue;
        }
        .logo-style {
          text-decoration: none;
          color: black;
          margin-left: 1em;
        }
        .logo-style:hover {
          color: red;
        }
        .link-container {
          margin-top: 1.6em;
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
