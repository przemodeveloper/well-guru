import Hero from "@/components/Hero";
import Teaser from "@/components/Teaser";
import Products from "@/components/Products";
import NewsletterInvite from "@/components/NewsletterInvite";
import { getEventsFromDB } from "@/utils/events";

export default async function Home() {
  // Prefetch events data on the server
  const eventsData = await getEventsFromDB(1, 6); // Get first 6 events for the homepage

  return (
    <>
      <Hero />
      <div className="container mx-auto space-y-20">
        <Teaser />
        <Products events={eventsData.data} />
        <NewsletterInvite />
      </div>
    </>
  );
}
