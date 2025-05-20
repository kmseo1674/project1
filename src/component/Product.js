import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import data from '../data';

function Product(){
	const { portfolio } = data;
	return(
		
		<div className="main-product">
		<div className="main-tit serif">Our Portfolio</div>
			<Swiper
				loop={true}
				speed={1000}
				slidesPerView={1.5}
				centeredSlides= {true}
				spaceBetween= {20}
				autoplay= {{
				delay: 2000
				}}
				breakpoints={{
				769: {
				slidesPerView: 3,
				spaceBetween:20,
				},
				1025: {
				slidesPerView: 4.5,
				spaceBetween: 50,
				}
				}}
				modules={[Autoplay,EffectFade]}
				className="productSwiper"
				>
				{[...portfolio, ...portfolio].map((item, i) => (
				<SwiperSlide key={i+1}>
				<div className="thumb">
				<a href=""><img src={`/images/${item.image}`} alt={item.alt} /></a>
				</div>
				<div className="desc">
				<div className="name serif">{item.title}</div>
				<p>
				{item.description.map((desc,j) => (<span key={j+1}>{desc}<br /></span>
				))}	
				</p>
				<a href="" className="btn">View More</a>
				</div>
				</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Product;