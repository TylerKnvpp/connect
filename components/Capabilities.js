import { BsCodeSlash, BsCameraVideo, BsDisplay } from "react-icons/bs";

const Capabilities = () => {
  return (
    <div className="capabilities-section">
      <h1>Capabilities</h1>

      <div className="cap-container">
        <div className="cap-box-blue">
          <div className="title-container ">
            <BsCodeSlash size="1.5em" color="blue" />
            <h3 className="title">Development</h3>
          </div>

          <p>
            The zeitgeist of software development is ever changing. We stay up
            to date with the most popular frameworks, libraries and tools. We
            love React, GraphQL, MongoDB, Express, JAMstack and Swift.
          </p>
        </div>

        <div className="cap-box-purple">
          <div className="title-container ">
            <BsCameraVideo size="1.5em" color="purple" />
            <h3 className="title">Video</h3>
          </div>
          <p>
            The zeitgeist of software development is ever changing. We stay up
            to date with the most popular frameworks, libraries and tools. We
            love React, GraphQL, MongoDB, Express, JAMstack and Swift.
          </p>
        </div>

        <div className="cap-box-green">
          <div className="title-container ">
            <BsDisplay size="1.5em" color="green" />
            <h3 className="title">Content</h3>
          </div>

          <p>
            The zeitgeist of software development is ever changing. We stay up
            to date with the most popular frameworks, libraries and tools. We
            love React, GraphQL, MongoDB, Express, JAMstack and Swift.
          </p>
        </div>
      </div>
      <style jsx>{`
        .capabilities-section {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10em;
          margin-top: 3em;
          width: 80%;
        }

        .cap-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 2em;
          width: 100%;
        }

        .cap-box-blue {
          border: 2px solid blue;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          padding: 1em;
          transition: all 2s;
          width: 25%;
        }

        .cap-box-purple {
          border: 2px solid purple;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          padding: 1em;
          transition: all 2s;
          width: 25%;
        }

        .cap-box-green {
          border: 2px solid green;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          padding: 1em;
          transition: all 2s;
          width: 25%;
        }

        .cap-box-blue:hover {
          border: 6px solid blue;
          box-shadow: inset 0px 5px 12px #6262e8;
           
        }


        .cap-box-purple:hover {
          border: 6px solid purple;
          box-shadow: inset 0px 5px 12px #cb85cb;
        }

        .cap-box-green:hover {
          border: 6px solid green;
          box-shadow: inset 0px 5px 12px #91de91;
        }

        .cap-box-blue:active {
          border: 6px solid blue;
          box-shadow: inset 0px 3px 9px #6262e8;
        }

        .cap-box-purple:active {
          border: 6px solid purple;
          box-shadow: inset 0px 3px 9px #cb85cb;
        }

        .cap-box-green:active {
          border: 6px solid green;
          box-shadow: inset 0px 3px 9px #91de91;
        }

        .title-container {
          align-items: center;
          display: flex;
          flex-direction: row;
        }

        .title {
          margin-left: 1em;
        }

        p {
          line-height: 1.9;
        }

        @media only screen and (max-width: 600px) {
          .cap-container {
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
          }

        .cap-box-blue {
            margin-bottom: 2em;
            width: 90%
        }

        .cap-box-purple {
            margin-bottom: 2em;
            width: 90%
        }

        .cap-box-green {
            margin-bottom: 2em;
            width: 90%
        }
      `}</style>
    </div>
  );
};

export default Capabilities;
