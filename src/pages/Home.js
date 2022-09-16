import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Hero from "../components/Global/Hero";
import { headerData, heroData } from "../constants/data";
import Typewriter from "../components/Typewriter";
import Stats from "../components/Stats/Stats";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Work from "../components/Work/Work";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Global/Footer";

export default function Home() {
	return (
		<PageWrapper>
			<Header/> 
			<Hero
				title={heroData.home.title}
				subtitle={heroData.home.subtitle}
				image={heroData.home.image}
				alt={heroData.home.alt}
			/>
			<main id="maincontent" role="main">
				<Typewriter />
				<Stats />
				<Services />
				<Skills />
				<Work />
				<Clients />
				<Testimonials />
			</main>
			<Footer />
		</PageWrapper>
	);
}
