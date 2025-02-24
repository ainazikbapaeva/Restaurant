"use client";
import { links } from "@/constants/links";
import scss from "./header.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
// import { Search } from "lucide-react";
import BurgerButton from "@/components/ui/BurgerButton/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu/BurgerMenu";
import Search from "@/components/ui/search/Search";

const Header = () => {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);
	const [isMobile, setMobile] = useState(true);
	console.log("header mobile:", isMobile);
	const router = useRouter();

	const changeIsMobile = () => {
		setMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		changeIsMobile();
		addEventListener("resize", changeIsMobile);
		return () => {
			removeEventListener("resize", changeIsMobile);
		};
	}, []);

	useEffect(() => {
		setActiveLink(pathname);
	}, [pathname]);
	return (
		<div className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<h3 onClick={() => router.push("/")}>Restaurant</h3>
					{!isMobile ? (
						<>
							<div className={scss.nav}>
								<div className={scss.headerBlock}>
									<ul>
										{links.map((item, index) => (
											<li key={index}>
												<Link href={item.href}>{item.name}</Link>
											</li>
										))}
									</ul>
									<div className={scss.search}>
										<Search />
									</div>
								</div>
								<select className={scss.select}>
									<option value="en">EN</option>
									<option value="ru">RU</option>
									<option value="ky">KG</option>
								</select>
							</div>
						</>
					) : (
						<div className={scss.burger}>
							<BurgerButton />
							<BurgerMenu />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
