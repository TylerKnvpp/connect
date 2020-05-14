import Head from "next/head";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="layout-style">
      <Header />
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:wght@400;600&display=swap");

          * {
            font-family: "Raleway", sans-serif;
          }

          p {
            font-family: "Source Sans Pro", sans-serif;
          }

          layout-style {
            margin: 0;
            background-color: #f5f3f3;
            width: "100%";
            padding: 0;
          }
          body {
            background: #fafafa;
            color: black;
            padding: 0;
            width: 100%;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
