import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import { Cart, Detail, GoodsList } from "../pages/goods";
import { Join, Login } from "../pages/member";
import { AddGoods, MyGoods } from "../pages/seller";

const Router = () => {
	return (
		// url 라우터 처리
		<BrowserRouter>
			<Routes>
				{/* 공통영역(상단 gnb메뉴)을 위한 Layout  */}
				<Route element={<Layout />}>
					{/* 상품 관련 */}
					<Route path="/" element={<GoodsList />} />
					<Route path="/goods/detail/:id" element={<Detail />} />
					<Route path="/goods/cart" element={<Cart />} />

					{/* 회원관련 */}
					<Route path="/member/login" element={<Login />} />
					<Route path="/member/join" element={<Join />} />

					{/* 판매자관련 */}
					<Route path="/seller/addGoods" element={<AddGoods />} />
					<Route path="/seller/myGoods" element={<MyGoods />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
