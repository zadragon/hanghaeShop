import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			{/* 임시 gnb메뉴 */}
			<h1>항해 쇼핑몰</h1>
			<nav>
				<ul>
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
				</ul>
			</nav>
			{/* 공통영역 밑에 들어가는 콘텐츠 */}
			<Outlet />
		</div>
	);
};

export default Layout;
