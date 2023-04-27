import Prallax from "react-rellax";

export default function Hero(props) {
	const scrollToSection = () => {
		document.querySelector('#maincontent').scrollIntoView({behavior: "smooth"})
	}

	return (
		<section	
			className="hero-container"
			id="hero"
			role="tabpanel"	
			style={{height: "100vh"}}
		>
			<Prallax speed={6} className="text-box-container">
				<div className="text-wrapper">
					<h1 className="hero-title">{props.title}</h1>
					<p className="hero-subtitle">{props.subtitle}</p>
				</div>
			</Prallax>

			<button onClick={scrollToSection} className="btn-scroll">
				<span className="sr-only">scroll to next section</span>
			</button>
		</section>
	);
}
