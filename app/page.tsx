import BuiltForYou from "@/components/built-for-you";
import CreateAccount from "@/components/create-account";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import PlatformHighlights from "@/components/platform-highlights";
import PopularStores from "@/components/popular-stores";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularStores />
      <HowItWorks/>
      <PlatformHighlights />
      <BuiltForYou/>
      <Services />
      <Faqs/>
      <CreateAccount />
    </main>
  );
}
