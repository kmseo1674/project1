import Logo from "./Logo";
import Navigation from "./Navigation";

function Header(){
	return(
		<header id="header">
			<div className="hd-wrap">
				<Logo />
				<Navigation />
				<div className="hd-info">
					<a href="">FAQ</a>
					<a href="">Get in Touch <span>↗</span></a>
					<a href="" className="lang">Contact</a>
					<div className="hd-allmenu-open">
						<a href="" className="btn-allmenu">
							<span></span>
							<span></span>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;