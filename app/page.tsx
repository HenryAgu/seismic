import Hero from "@/components/hero";
import PopularStores from "@/components/popular-stores";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularStores/>
    </main>
  );
}
