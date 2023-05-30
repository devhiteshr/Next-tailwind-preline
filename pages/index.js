import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../assets/logo.png";
import Pricing from "@/components/pricing";
import HeroSection from "@/components/heroSection";
import Plans from "@/components/plans";
import Testimonial from "@/components/testimonial";
import Cards from "@/components/cards";
import Faq from "@/components/faq";
import Feature from "@/components/feature";
import("preline");

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Feature />
      <Pricing />
      <Plans />
      <Cards />
      <Testimonial />
      <Faq />
    </main>
  );
}
