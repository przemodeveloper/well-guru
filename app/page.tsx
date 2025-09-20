import Hero from "../components/Hero";
import Teaser from "../components/Teaser";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="container mx-auto">
				<Teaser />
			</div>
		</>
	);
}
