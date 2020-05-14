import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Capabilities from "../components/Capabilities";

export default function Home() {
  return (
    <Layout pageTitle="CONNECT &rarr;">
      <Hero />
      <Capabilities />
    </Layout>
  );
}
