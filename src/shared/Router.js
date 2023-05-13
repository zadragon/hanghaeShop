import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Cart from "../pages/goods/Cart";
import Detail from "../pages/goods/Detail";
import Join from "../pages/member/Join";
import Login from "../pages/member/Login";
import AddGoods from "../pages/seller/AddGoods";
import MyGoods from "../pages/seller/MyGoods";
import GoodsList from "../pages/goods/GoodsList";

const Router = () => {
	return (
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
