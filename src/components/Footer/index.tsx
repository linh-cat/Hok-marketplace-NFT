import './index.scss';

// ant design
import {
	TwitterSquareFilled,
	FacebookFilled,
	InstagramFilled,
	GithubFilled,
} from '@ant-design/icons';
// component
import ButtonHok from 'components/ButtonHok';
import HokLogo from 'assets/images/HOK-Logo-white.png';

const index = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__top--left">
					<div className="title">Stay in the loop</div>
					<p className="text">
						Join our mailing list to stay in the loop with our newest feature releases, NFT drops,
						and tips and tricks for navigating House of Kibaa.
					</p>
					<div className="form-contact">
						<input type="text" />
						<ButtonHok
							type="default"
							text="Sign up"
							backgroundColor="#2B78E4"
							radius="5px"
							color="#FFFFFF"
							border="none"
						/>
					</div>
				</div>
				<div className="footer__top--right">
					<div className="title">Join the community</div>
					<div className="icons">
						<TwitterSquareFilled className="item twitter" />
						<FacebookFilled className="item facebook" />
						<InstagramFilled className="item instagram" />
						<GithubFilled className="item github" />
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="item label">
					<div className="logo">
						<img src={HokLogo} alt="Hok logo" />
					</div>
					<div>House of Kibaa</div>
					<div>
						House of Kibaa delivers superbHouse of Kibaa delivers superb 3D design assets and
						technical solutions.
					</div>
				</div>
				<div className="item about_us">
					<ul>
						<li>Contact</li>
						<li>company</li>
						<li>careers</li>
					</ul>
				</div>
				<div className="item products">
					<ul>
						<li>Hok-Main</li>
						<li>GenX</li>
						<li>GenHero</li>
					</ul>
				</div>
				<div className="item support">
					<ul>
						<li>FAQ</li>
						<li>Help center</li>
						<li>Feed back</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default index;
