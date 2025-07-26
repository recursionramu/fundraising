import type { NextPage } from 'next';
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import FeaturedCampaigns from "../Components/FeaturedCampaigns";
import Footer from "../Components/Footer";
import InfiniteMovingCards from "../Components/InfiniteMovingCards";




const testimonials = [
  {
    quote: "This platform helped us raise funds twice as fast as our previous campaigns!",
    name: "Olivia Parker",
    title: "Founder, Hope4All Foundation"
  },
  {
    quote: "The integrated donor analytics are a game-changer for our outreach strategy.",
    name: "Carlos Mendez",
    title: "Development Director"
  },
  {
    quote: "A seamless experience from launch to payout—highly recommended for any nonprofit.",
    name: "Sarah Ibrahim",
    title: "COO, GreenFuture"
  },
  {
    quote: "We met our \$100k goal in under a week—unbelievable!",
    name: "Ethan Wood",
    title: "Campaign Manager"
  },
  {
    quote: "I love how transparent the fee structure is compared to other services.",
    name: "Priya Desai",
    title: "Finance Lead"
  },
  
  {
    quote: "The recurring-donor option created a sustainable revenue stream for our shelter.",
    name: "Grace Johnson",
    title: "Program Coordinator"
  },
  
  {
    quote: "Donor segmentation tools helped us personalize outreach and boost retention.",
    name: "Lucas Silva",
    title: "Data Analyst"
  },
  {
    quote: "We appreciated the instant payout option—crucial for urgent relief efforts.",
    name: "Natalie Roberts",
    title: "Relief Coordinator"
  },
  {
    quote: "The milestone badges kept our volunteer fundraisers motivated throughout the month.",
    name: "Sebastian Fischer",
    title: "Volunteer Lead"
  },
  {
    quote: "A/B testing on campaign pages let us optimize our pitch quickly.",
    name: "Zoey Bennett",
    title: "Growth Hacker"
  },
  {
    quote: "Gamified donor tiers encouraged larger gifts than we’ve ever seen before.",
    name: "Oliver Adams",
    title: "Chief Development Officer"
  }
];




const Home: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Herosection />
      <FeaturedCampaigns/>
      <InfiniteMovingCards 
        items={testimonials}
        direction="left"
        speed="normal"
        pauseOnHover={true}
      /> // 

      <Footer />
    </main>
  );
}

export default Home;
