import Page from "@/components/Page";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import PartnerSection from "@/components/PartnerSection";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutSection2 from "@/components/AboutSection2";

const successStories = [
  {
    id: 1,
    image: "/assets/images/success-stories-1.svg",
    title: "Drift Protocol's Data-Driven Journey",
    description: "Fast SQL queries with our automated scaling and replication.",
    action: {
      type: "link",
      text: "Read more",
      href: "/web3-teams",
    },
  },
  {
    id: 2,
    image: "/assets/images/success-stories-2.svg",
    title: "Squads Leverages Our Platform",
    description:
      "AI-powered interface boosts quick, intelligent data analysis.",
    action: {
      type: "link",
      text: "Read more",
      href: "/web3-teams",
    },
  },
  {
    id: 3,
    image: "/assets/images/success-stories-3.svg",
    title: "Linking real‑world data to blockchains",
    description: "Our APIs Streamline Solana development and data management.",
    action: {
      type: "link",
      text: "Read more",
      href: "/web3-teams",
    },
  },
];

export default function Home() {
  return (
    <Page title="Donna Analytics">
      <AboutHeroSection
        tagline="Insight Amplified"
        title="In a complex world clouded with ambiguity, certainty is power"
        image="/assets/images/about-hero.svg"
      />
      <AboutSection2 />
      <SuccessStoriesSection stories={successStories} />
      <PartnerSection />
    </Page>
  );
}
