"use client";
import React, { useState, useEffect } from "react";
import scss from "./menu.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMenuModalStore } from "@/store/useMenuModal";
import { main_menu } from "@/constants/menu";
import MenuModal from "@/components/ui/menu_modal/MenuModal";
import { useGetMenuQuery } from "@/redux/api/menu";

const Menu = () => {
	const { data, error, isLoading } = useGetMenuQuery();

	const [isActive, setIsActive] = useState<number>(0);
	const [animationKey, setAnimationKey] = useState(0);
	const [menuData, setMenuData] = useState(
		main_menu.filter((el) => el.category === "desserts")
	);

	const { isOpen, setIsOpen, setItemIndex } = useMenuModalStore();

	const buttons = main_menu.reduce<string[]>((acc, el) => {
		if (acc.includes(el.category)) return acc;
		return [...acc, el.category];
	}, []);

	const handleFilter = (category: string) => {
		setMenuData(main_menu.filter((el) => el.category === category));
		setAnimationKey((prevKey) => prevKey + 1); // Это поможет обновить ключ анимации
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	const buttonBlackVariant = {
		hidden: { x: -20, opacity: 0 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: { delay: i * 0.2, ease: "easeInOut" },
		}),
	};

	const menuItemVariants = {
		hidden: { opacity: 0, x: -5 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: i * 0.2, ease: "easeInOut" },
		}),
	};

	return (
		<section className={scss.Menu}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.button_box}>
						{buttons.map((el, index) => (
							<motion.button
								layout
								key={index}
								onClick={() => {
									handleFilter(el);
									setIsActive(index);
								}}
								className={scss.buttons}
								initial="hidden"
								whileInView="visible"
								variants={buttonBlackVariant}
								custom={index}
								viewport={{ once: true, amount: 0.8 }}>
								<p
									className={`${scss.button_text} ${
										isActive === index ? scss.active : ""
									}`}>
									{el}
								</p>
								{isActive === index && (
									<motion.span
										className={scss.button_active}
										initial={{ opacity: 0 }}
										animate={{
											opacity: 1,
											transition: { duration: 1, ease: "linear" },
										}}></motion.span>
								)}
								{isActive === index && (
									<span className={scss.button_line}></span>
								)}
							</motion.button>
						))}
					</div>

					{/* Карточки меню */}
					<div className={scss.card_box} key={animationKey}>
						{menuData.map((el, index) => (
							<motion.div
								key={index}
								className={scss.menu_cards}
								initial="hidden"
								animate="visible"
								variants={menuItemVariants}
								custom={index}
								onClick={() => {
									setIsOpen(true, el.category);
									setItemIndex(el.id);
								}}>
								<div className={scss.card_wrapper}>
									<Image
										src={el.image}
										alt={el.name}
										width={300}
										height={187}
										className={scss.card_img}
									/>
									<div className={scss.card_info}>
										<span className={scss.card_name}>
											<p className={scss.name}>{el.name}</p>
											<p className={scss.price}>${el.price}</p>
										</span>
										<span className={scss.consistance}>
											{el.consistance.map((el, index) => (
												<p key={index} className={scss.consistance_item}>
													{el},
												</p>
											))}
										</span>
										<p className={scss.price_mobile}>${el.price}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{isOpen && <MenuModal />}

			  <div>
				{data?.map((el) => (
					<div key={el.id}>
						{/* <h1>{el.menu_name}</h1> */}
					</div>
				)) || <div>No data available</div>}
			</div>
		</section>
	);
};

export default Menu;
