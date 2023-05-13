import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	border-bottom: 1px solid #e6e6e6;
	padding: 10px 0;
	h1 {
		font-size: 36px;
		font-weight: bold;

		a {
			color: #2c3e50;
		}
	}
	.inner {
		position: relative;
		width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}
	.util {
		position: absolute;
		top: 10px;
		right: 0;
		font-size: 14px;
		ul {
			display: flex;
			align-items: center;
			gap: 15px;
		}
	}
`;

export const Content = styled.div`
	width: 1000px;
	margin: 0 auto;
	padding-bottom: 100px;
`;

export const Sitemap = styled.ul`
	position: fixed;
	bottom: 0;
	width: 100%;
	justify-content: center;
	background-color: white;
	display: flex;
	flex-direction: row;
	gap: 10px;
`;
