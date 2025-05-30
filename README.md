## GSAP 및 Swiper를 활용한 인터랙티브 웹 프로젝트

Vanilla JavaScript, **Swiper**, **GSAP**를 기반으로 제작한 반응형 랜딩 페이지입니다.  
PC 및 모바일에서 자연스럽고 부드러운 사용자 경험을 제공합니다.

<br/>

### 주요 기능

- 반응형 메뉴 (모바일/데스크탑 구분)
- 메인 슬라이더 (Swiper 적용)
- 상품 슬라이드 (브레이크포인트 설정)
- 스크롤 트리거 애니메이션 (GSAP)
- 커스텀 마우스 커서 및 호버 효과
- Top 버튼 기능
- 디바이스별 이미지 자동 교체

<br/>

### 사용 기술

| 태그 | ![HTML](https://img.shields.io/badge/HTML5-F05032?logo=html5&logoColor=white&style=flat-square) | ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square) | ![Swiper](https://img.shields.io/badge/Swiper-6332F6?logo=swiper&logoColor=white&style=flat-square) | ![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white&style=flat-square) |
|---|---|---|---|---|---|
| 설명 | 마크업 구조 | 반응형 스타일 처리 | DOM 제어, Swiper & GSAP 연동 | 슬라이더 구현 | 고급 스크롤 애니메이션 |


<br/>

### 기능 상세 설명

### 1. 화면 크기에 따라 모바일/데스크탑 여부 구분
- desktopFlag를 기준으로 해상도로 판단하여, 모바일 or 데스크탑을 구분 합니다.
- 메뉴가 열려 있을 경우 서브메뉴와 함께 초기화여 닫습니다.

 ``` JavaScript
function checkWindowSize(){
	let winw = window.innerWidth;
	if(winw >= 1240){
		desktopFlag = true;
	} else {
		desktopFlag = false;
	}
	// 메뉴 초기화
	if(header.classList.contains("menu-open")){
		header.classList.remove("menu-open");
	}
	// 서브메뉴 초기화
	Array.from(gnbList).forEach(function(item){
		item.classList.remove("open");
	});
}
```

---

### 2. "모바일" 메뉴 버튼 클릭 시 전체 메뉴 토글기능

- 모바일에서 `menu-open` 클래스를 토글하여 전체메뉴 기능을 제어합니다.  
- GNB는 하나의 메뉴만 열리도록 구성되어 있어 사용성이 향상됩니다.

```javascript
menuTab.addEventListener("click", function(e){
	e.preventDefault();
	header.classList.toggle("menu-open");
});
```

- 메뉴가 열린 상태 일떄 배경을 클릭하면 전체메뉴를 닫습니다.
  
```javascript
dimmed.addEventListener("click", function(){
	header.classList.remove("menu-open");
});
```

---

### 3. GNB 하위메뉴 열고 닫기 (모바일 전용)

- 모바일일 때만 작동되며, 클릭한 하위메뉴만 열리거나 닫습니다.

```javascript
Array.from(gnbList).forEach(function(item1, i){
	item1.addEventListener("click", function(e){
		e.preventDefault();
		if(desktopFlag) return;
		if(item1.classList.contains("no-depth")) return;

		if(!item1.classList.contains("open")){
			Array.from(gnbList).forEach(function(item2, j){
				if(j == i){
					item2.classList.add("open");
				} else {
					item2.classList.remove("open");
				}
			});
		} else {
			item1.classList.remove("open");
		}
	});
});
```

### 4. GBN 메뉴 Hover 효과

- PC모드에서 GNB에 마우스를 올리면, Hover효과가 적용 되어 메뉴가 열리고, GNB에서 멀어지면 원래 상태로 되돌아갑니다.

```javascript
menuTab.addEventListener("click", function(e){
	e.preventDefault();
	header.classList.toggle("menu-open");
});
```

- 메뉴가 열린 상태 일떄 배경을 클릭하면 전체메뉴를 닫습니다.
  
```javascript
dimmed.addEventListener("click", function(){
	header.classList.remove("menu-open");
});
```

---

### 5. 슬라이드 이미지 설정

- 슬라이드에 사용할 이미지 데이터를 배열로 정의하고, 각 슬라이드 배경 이미지를 설정합니다.

```javascript
const imageData = [
	{ pc: "visual_pc1.jpg", mobile: "visual_mobile1.jpg" },
	{ pc: "visual_pc2.jpg", mobile: "visual_mobile2.jpg" }
];

let swiperSlides = document.querySelectorAll(".main-slider .swiper-slide");

swiperSlides.forEach(function(item, i){
	let pc = item.querySelector(".pc");
	let mobile = item.querySelector(".mobile");

	pc.style.backgroundImage = `url(images/${imageData[i].pc})`;
	mobile.style.backgroundImage = `url(images/${imageData[i].mobile})`;
});

```

---

### 6. Swiper 초기화

- 메인 슬라이더의 Swiper 인스턴스를 생성하고, 슬라이드 자동으로 전환되며 페이드 효과를 사용합니다.

```javascript
new Swiper(".main-slider .mainSwiper", {
	loop: true,
	speed: 1000,
	effect: "fade",
	fadeEffect: { crossFade: true },
	autoplay: { delay: 5000 },
	pagination: {
		el: ".main-slider .swiper-pagination",
		clickable: true,
		renderBullet: function(index, className){
			return `<span class="${className}">0${index+1}</span>`;
		}
	}
});

```

---

### 7. 다중 Swiper 초기화

- 슬라이더의 Swiper 인스턴스를 생성하고, 화면크기에 따라 슬라이드 수와 간격을 조정합니다.
- autoplay를 적용하여 자동으로 넘어가는 형태입니다.

```javascript
const productSwiper = new Swiper(".main-product .productSwiper", {
	loop: true,
	speed: 2000,
	slidesPerView: 1.5,
	centeredSlides: true,
	spaceBetween: 20,
	autoplay: { delay: 2000 },
	breakpoints: {
		769: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1025: {
			slidesPerView: 4.5,
			spaceBetween: 50
		}
	}
});


```
---

### 8. 디바이스 체크 및 GSAP 애니메이션

- 화면 크기에 따라 모바일 또는 PC로 구분합니다.
- GSAP을 사용하여 스크롤 트리거에 따라 애니메이션을 설정합니다..

```javascript
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

```

---

### 9. 리사이즈 이벤트

- 화면 크기 변경시 메뉴,장치 상태 및 슬라이더를 업데이트 합니다.

```javascript
window.addEventListener("resize", function(){
    checkWindowSize();
    checkDevice();
    productSwiper.update();
});

```

---

### 10. GSAP 애니메이션 설정

- 스크롤에 따라 애니메이션 효과를 추가합니다.

```javascript
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
```
---
### 11. 마우스 따라다니는 커서

- 마우스 움직임에 따라 커서를 커스터마이즈 합니다.
- GSAP를 사용하여 부드러운 애니메이션 효과를 제공합니다.


```javascript
document.body.addEventListener("mousemove", function(e){
	gsap.to("#custom-cursor, #custom-cursor-text", {
		x: e.clientX,
		y: e.clientY,
		duration: 1.2,
		ease: Power3.easeOut
	});
});
```
* Hover시 텍스트와 원이 부드럽게 커지는 효과를 부여합니다.
* 이미지에서 벗어나면 효과가 제거 됩니다.

```javascript
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

```

---

### 12. 페이지 스크롤 및 TOP버튼

- 스크롤 위치에 따라 "TOP"버튼의 표시 여부를 결정합니다.
- 스크롤이 화면높이보다 클경우 버튼이 나타 납니다.

```javascript
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
```
---

* TOP 버튼 클릭시 부드럽게 페이지 맨위로 이동합니다.
```javascript
	pageTop.addEventListener("click", function(){
		gsap.to(window, { scrollTo: 0, duration: 0.3, ease: Power3.easeOut });
	});


