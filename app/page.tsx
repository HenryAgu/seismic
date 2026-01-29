import CreateAccount from "@/components/create-account";
import Hero from "@/components/hero";
import PlatformHighlights from "@/components/platform-highlights";
import PopularStores from "@/components/popular-stores";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularStores/>
      <PlatformHighlights/>
      <CreateAccount/>
    </main>
  );
}
