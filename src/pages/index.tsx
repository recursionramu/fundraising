import type { NextPage } from 'next';
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import FeaturedCampaigns from "../Components/FeaturedCampaigns";
import Footer from "../Components/Footer";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Herosection />
      <FeaturedCampaigns />
      <Footer />
    </main>
  );
}

export default Home;
