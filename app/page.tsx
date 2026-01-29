import CreateAccount from "@/components/create-account";
import Hero from "@/components/hero";
import PlatformHighlights from "@/components/platform-highlights";
import PopularStores from "@/components/popular-stores";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularStores />
      <PlatformHighlights />
      <Services />
      <CreateAccount />
    </main>
  );
}
