import { useEffect } from "react";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from "@studio-freight/lenis";

function UIScript(){
	useEffect(() => {
		// ********** GSAP Library
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		let header=document.getElementById("header");
		let menuTab=document.querySelector(".hd-allmenu-open");
		let dimmed=document.querySelector(".hd-mark");
		let gnb=document.querySelector(".gnb");
		let gnbList=gnb.children;

		let desktopFlag;

		function checkWindowSize(){
			let winw=window.innerWidth;

			if(winw >= 1240){
				desktopFlag=true;
			}
			else{
				desktopFlag=false;
			}

			if(header.classList.contains("menu-open")){
				header.classList.remove("menu-open");
			}

			Array.from(gnbList).forEach(function(item){
				if(item.classList.contains("open")){
					item.classList.remove("open");
				}
			});
		}

		checkWindowSize();

		menuTab.addEventListener("click", function(e){
			e.preventDefault();

			header.classList.toggle("menu-open");
		});

		dimmed.addEventListener("click", function(){
			header.classList.remove("menu-open");
		});

		Array.from(gnbList).forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				if(desktopFlag) return;

				if(item1.classList.contains("no-depth")) return;

				if(!item1.classList.contains("open")){
					Array.from(gnbList).forEach(function(item2, j){
						if(j == i){
							item2.classList.add("open");
						}
						else{
							item2.classList.remove("open");
						}
					});
				}
				else{
					item1.classList.remove("open");
				}
			});

			item1.addEventListener("mouseenter", function(){
				if(!desktopFlag) return;

				header.classList.add("on");
				header.style.height="300px";
			});

			item1.addEventListener("mouseleave", function(){
				if(!desktopFlag) return;

				header.classList.remove("on");
				header.removeAttribute("style");
			});
		});

		let device;
		let xoffset;

		function checkDevice(){
			if(window.matchMedia("(max-width: 768px)").matches){
				if(device == "mobile") return;

				device="mobile";
				xoffset=7;

				gsap.utils.toArray(".main-typo").forEach(function(item){
					const tl=gsap.timeline({
						scrollTrigger: {
							trigger: item,
							scrub: 1,
							start: "top bottom"
						}
					});

					tl.to(item.querySelector("div:nth-child(1)"), {
						x: -1*xoffset+"%",
						duration: 1
					});

					tl.to(item.querySelector("div:nth-child(2)"), {
						x: xoffset+"%",
						duration: 1,
						delay: -1
					});
				});
			}
			else{
				if(device == "pc") return;

				device="pc";
				xoffset=15;

				gsap.utils.toArray(".main-typo").forEach(function(item){
					const tl=gsap.timeline({
						scrollTrigger: {
							trigger: item,
							scrub: 1,
							start: "top bottom"
						}
					});

					tl.to(item.querySelector("div:nth-child(1)"), {
						x: -1*xoffset+"%",
						duration: 1
					});

					tl.to(item.querySelector("div:nth-child(2)"), {
						x: xoffset+"%",
						duration: 1,
						delay: -1
					});
				});
			}
		}

		checkDevice();

		window.addEventListener("resize", function(){
			checkWindowSize();
			checkDevice();
			// productSwiper.update(); // SwiperJS
		});

		gsap.utils.toArray(".scale-ani").forEach(function(item){
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top bottom",
					end: "bottom top",
					onEnter: function(){
						item.classList.add("active");
					},
					onLeave: function(){
						item.classList.remove("active");
					},
					onLeaveBack: function(){
						item.classList.remove("active");
					}
				},
				delay: 2
			});
		});

		let customHover=document.querySelectorAll(".custom-hover");
		let pageTop=document.querySelector("#page-top");

		document.body.addEventListener("mousemove", function(e){
			gsap.to("#custom-cursor, #custom-cursor-text", {
				x: e.clientX,
				y: e.clientY,
				duration: 1.2,
				ease: Power3.easeOut
			});
		});

		customHover.forEach(function(item){
			item.addEventListener("mouseenter", function(){
				gsap.to(".custom-hover-circle, .custom-hover-text", {
					width: "100%",
					height: "100%",
					opacity: 1,
					duration: 0.3,
					ease: Power3.easeOut
				});
			});

			item.addEventListener("mouseleave", function(){
				gsap.to(".custom-hover-circle, .custom-hover-text", {
					width: 0,
					height: 0,
					opacity: 0,
					duration: 0.3,
					ease: Power3.easeOut
				});
			});
		});

		window.addEventListener("scroll", function(){
			let winH=window.innerHeight;

			if(window.scrollY > winH){
				if(!pageTop.classList.contains("show")){
					pageTop.classList.add("show");
				}
			}
			else{
				if(pageTop.classList.contains("show")){
					pageTop.classList.remove("show");
				}
			}
		});

		pageTop.addEventListener("click", function(){
			gsap.to(window, { scrollTo: 0, duration: 0.3, ease: Power3.easeOut });
		});

		// ********** Lenis Library
		const lenis=new Lenis({
			duration: 2,
			easing: (t) => Math.min(1, 1.001-Math.pow(2, -10*t))
		});

		function raf(time){
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	return(
		<></>
	);
}

export default UIScript;