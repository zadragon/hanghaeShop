import { Outlet, Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Button from "@mui/material/Button";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import * as S from "../styles/layout";

const Layout = () => {
	return (
		<div id="container">
			<S.Header>
				<div className="inner">
					<h1>
						<Link to="/">
							<LocalOfferIcon style={{ color: "#be2edd", fontSize: "34px", verticalAlign: "middle" }} /> 항해 쇼핑몰
						</Link>
					</h1>
					{/* 임시 gnb메뉴 */}
					<div className="util">
						<ul>
							<li>
								<Link to="/seller/addGoods">상품등록</Link>
							</li>
							<li>
								<Link to="/goods/cart">장바구니</Link>
							</li>
							<li>
								<Button variant="contained" startIcon={<VpnKeyIcon />} color="primary" size="small">
									로그인
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</S.Header>

			{/* 공통영역 밑에 들어가는 콘텐츠 */}
			<div id="content">
				<Outlet />
			</div>
			<S.Sitemap>
				<li>
					<Link to="/">상품목록</Link>
				</li>
				<li>
					<Link to="/goods/detail/1">상품상세</Link>
				</li>
				<li>
					<Link to="/goods/cart">장바구니</Link>
				</li>
				<li>
					<Link to="/member/login">로그인</Link>
				</li>
				<li>
					<Link to="/member/join">회원가입</Link>
				</li>
				<li>
					<Link to="/seller/addGoods">상품등록</Link>
				</li>
				<li>
					<Link to="/seller/myGoods">내가등록한상품</Link>
				</li>
			</S.Sitemap>
		</div>
	);
};

export default Layout;
