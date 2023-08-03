import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import QrGenerateTabs from "./components/QrGenerateTabs";

export default function Home() {
  return (
    <main className="">
      {/* <Navbar /> */}
      <HeroSection />
      <QrGenerateTabs />
    </main>
  );
}
