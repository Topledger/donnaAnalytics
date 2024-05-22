import Image from "next/image";
import styles from "./page.module.css";
import Page from "@/components/Page";
import Section from "@/components/Section";
import DataCultureSection from "@/components/CultureSection";
import SuccessStoriesSection from "@/components/EnhanceBusinessResultsSection";
import AdvanceGoalsSection from "@/components/AdvanceGoalsSection";
import EmpoweringJourneySection from "@/components/EmpoweringJourneySection";
import HomeHeroSection from "@/components/HomeHeroSection";
import PartnerSection from "@/components/PartnerSection";

const dataCultures = [
  {
    id: 1,
    title: "Uncompromising analytics - End to end solutions",
    description:
      "Our robust infrastructure, combined with our data indexing and decoding capabilities and enterprise support, ensures that you receive end-to-end analytics that are both broad and deep, without any interruption.",
    action: {
      forwardArrow: true,
      type: "link",
      //target: "_blank",
      primary: true,
      text: "Success stories",
      href: "/web3-teams",
    },
    bottomContent: {
      text: "Indexing Helium's on-chain and oracle data",
    },
  },
];

const results = [
  {
    id: 1,
    image: "/assets/images/results/analysts.svg",
    title: "For analysts",
    description: "Fast SQL queries with our automated scaling and replication.",
    action: {
      type: "link",
      text: "Start free trial",
      href: "/web3-teams",
    },
  },
  {
    id: 2,
    image: "/assets/images/results/business.svg",
    title: "For business",
    description:
      "AI-powered interface boosts quick, intelligent data analysis.",
    action: {
      type: "link",
      text: "Schedule a call",
      href: "/web3-teams",
    },
  },
  {
    id: 3,
    image: "/assets/images/results/developers.svg",
    title: "For developers",
    description: "Our APIs Streamline Solana development and data management.",
    action: {
      type: "link",
      text: "Check docs",
      href: "/web3-teams",
    },
  },
];

const journeys = [
  {
    id: 1,
    title: "Comprehensive Data Analysis",
    description:
      "Gain deep insights with our thorough analysis of historical blockchain data, helping you understand long-term trends and cycles.",
    image: "/assets/images/journey-data-analysis.webp",
    action: {
      forwardArrow: true,
      type: "link",
      primary: true,
      text: "Start Analysing",
      href: "/web3-teams",
    },
  },
  {
    id: 2,
    title: "Customizable Dashboards",
    description:
      "Tailor your data viewing experience with customizable dashboards that highlight the metrics most important to you.",
    image: "/assets/images/journey-dashboards-.svg",
    action: {
      forwardArrow: true,
      type: "link",
      primary: true,
      text: "Start Analysing",
      href: "/web3-teams",
    },
  },
  {
    id: 3,
    title: "Expert Support",
    description:
      "Our team of data experts is here to provide dedicated support and assist you in understanding and utilizing the data effectively.",
    image: "/assets/images/journey-expert-support.svg",
    action: {
      forwardArrow: true,
      type: "link",
      primary: true,
      text: "Start Analysing",
      href: "/web3-teams",
    },
  },
];

const goals = [
  {
    id: 1,
    title: "Make informed decisions",
    description:
      "Gain deep insights with our thorough analysis of historical blockchain data, helping you understand long-term trends and cycles.",
  },
  {
    id: 2,
    title: "Enhance Efficiency",
    description:
      "Reduce research time and bypass the complexities of blockchain data with our streamlined analytics platform.",
  },
  {
    id: 3,
    title: "Gain Competitive Edge",
    description:
      "Utilize our comprehensive analysis to stay ahead of your competitors in leveraging blockchain technology.",
  },
];

export default function Home() {
  return (
    <Page title="Donna Analytics">
      <HomeHeroSection
        tagline="Insight Amplified"
        title="Turn data into decisions"
        description="Uncover Hidden Patterns. Fuel Innovation. Achieve Unmatched Clarity and Growth."
        image="/assets/images/home-hero.svg"
      />
      <EmpoweringJourneySection journeys={journeys} />
      <AdvanceGoalsSection goals={goals} />
      <SuccessStoriesSection results={results} />
      <DataCultureSection dataCultures={dataCultures} />
      <PartnerSection />
    </Page>
  );
}
