import Link from "next/link";
import { links } from "@/constants/links";
import styles from "./BurgerMenu.module.scss";
import { useHeaderStore } from "@/store/useHeaderStore";

const BurgerMenu = () => {
	const { isOpen, setIsOpen } = useHeaderStore();

	return (
		<>
			<div className={`${styles.BurgerMenu} ${isOpen ? styles.active : ""}`}>
				<h2 className={styles.Restaurant}>Restaurant</h2>
				<nav className={styles.nav}>
					<ul>
						{links.map((item, index) => (
							<li key={index}>
								<Link href={item.href} onClick={() => setIsOpen(false)}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.languageSwitcher}>
						<span className={styles.activeLang}>EN</span>
						<span className={styles.activeLang}>RU</span>
						<span className={styles.activeLang}>KG</span>
					</div>
				</nav>
			</div>
		</>
	);
};

export default BurgerMenu;
