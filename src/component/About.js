import data from "../data";

function About(){
	const { about } = data;

	return(
		<div className="main-about">	
			<div className="main-typo">
				<div><span className="serif">YOUR EFFORTS,</span></div>
				<div><span className="serif">YOUR</span> development</div>
			</div>
			
			<div className="flex-cont">
				<div className="img">
					<div className="img-wrap scale-ani">
						<img src="/images/main_about1.jpg" alt="main about1" />
					</div>
				</div>
				<div className="con">
					<div className="main-tit serif">curiosity</div>

				 <div className="txt" >
					<p>{about[0].p1}</p> 
					<p className="serif">{about[0].p2}</p>
				</div>
				
				</div>
			</div>
		
			<div className="main-typo">
				<div><span className="serif">NEXT MOBILE DEVICE</span></div>
				<div>designdigit</div>
			</div>
			<div className="flex-cont reserve">
				<div className="img">
					<div className="img-wrap scale-ani">
						<img src="/images/main_about2.jpg" alt="main about2" />
					</div>
				</div>
				<div className="con">
					<div className="main-tit serif">Frontend</div>
					
					<div className="txt">
						<p>{about[1].p1}</p>
						<p className="serif">{about[1].p2}</p>
					</div>
				
				</div>
			</div>
		</div>
	);
}

export default About;