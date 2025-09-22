import Hero from "@/components/Hero";
import Teaser from "@/components/Teaser";
import Products from "@/components/Products";
import NewsletterInvite from "@/components/NewsletterInvite";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="container mx-auto space-y-20">
				<Teaser />
				<Products />
				<NewsletterInvite />
			</div>
		</>
	);
}
