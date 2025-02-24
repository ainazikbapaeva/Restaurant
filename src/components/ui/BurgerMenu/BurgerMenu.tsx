import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { links } from "@/constants/links";
import { useHeaderStore } from "@/store/useHeaderStore";

const BurgerMenu = () => {
	const { isOpen } = useHeaderStore();

	return (
		<div className={`${scss.BurgerMenu} ${isOpen ? scss.active : ""}`}>
			<nav className={scss.nav}>
				<ul>
					{links.map((item, index) => (
						<li key={index}>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default BurgerMenu;
