import { FC, ReactNode } from "react";
import scss from "./layoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutSiteProps {
	children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
	return (
		<div className={scss.layoutSite}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default LayoutSite;
