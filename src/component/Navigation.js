import data from '../data';


function Navigation(){
	let {navigation}=data;



	// 배열을 JSX HTML 자리에 추가하면 HTML로 그려집니다.
	// 동적으로 그릴 때는 Key값이 필요합니다.

	// 그렇다면 들어온 데이터로 배열을 만들면 됩니다.
	//  forEach()는 배열을 순환하는 방법입니다.
	//  map()은 forEach()와 배열을 순환하는 방법인데, return을 사용하면 좌항에 새로운 배열로 선언됩니다.

	//  상황에 따라 삼항식으로 분기해서 리턴합니다.

	let htmlData=navigation.map((d, i) => {
		return(
			d.depth2 ?
			<li key={i+1}>
				<a href="">{d.depth1}</a>
				<div className="depth">
					<ul>
						{
							d.depth2.map((d2, j) => {
								return (
									<li key={j+1}>
										<a href="">{d2}</a>
									</li>
								)
							})
						}
					</ul>
				</div>
			</li>
			:	
					<li key={i+1} className="no-depth">
						<a href="">{d.depth1}</a>	
					</li>
				
			
			);
		});


	return(
		<div className="hd-menu">
			<nav className="gnb-wrap">
				<ul className="gnb">

					{htmlData}
					{/*
					 <li className="no-depth">
						<a href="">Intro</a>
					</li>
					<li className="no-depth">
						<a href="">About</a>
					</li>
					<li>
						<a href="">Skill</a>
						<div className="depth">
							<ul>
								<li><a href="">Web</a></li>
								<li><a href="">Front End</a></li>
								<li><a href="">Back End</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">Portfolio</a>
						<div className="depth">
							<ul>
								<li><a href="">Oksuro</a></li>
								<li><a href="">Purito Seoul</a></li>
								<li><a href="">Lifeplus</a></li>
								<li><a href="">Men Noblesse</a></li>
								<li><a href="">b.state design</a></li>
							</ul>
						</div>
					</li>
					 */}
				

				</ul>
			</nav>
			<span className="hd-mark"></span>
		</div>
	);
}

export default Navigation;