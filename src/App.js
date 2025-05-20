import UIScript from './component/UIScript';
import Header from './component/Header';
import MainSlider from './component/MainSlider';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './css/style.css';

function App(){
	return(
		<div className="container">
			<UIScript />
			<Header />
			<div className="contents">
				<MainSlider />
				<About />
				<Product />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;