"use client";
import React, { useMemo } from "react";
import scss from "./menu.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useMenuModalStore } from "@/store/useMenuModal";
import { main_menu } from "@/constants/menu";
const MenuModal = () => {
	const { close, itemId, category, setItemIndex } = useMenuModalStore();

	const data = useMemo(() => {
		return main_menu.filter((el) => el.id === itemId);
	}, [itemId]);
	const similar = main_menu
		.filter((el) => el.category === category)
		.slice(0, 4);
	const buttons = main_menu.reduce<string[]>((acc, el) => {
		if (acc.includes(el.category)) return acc;
		return [...acc, el.category];
	}, []);

	const buttonBlackVariant = {
		hidden: {
			x: -20,
			opacity: 0,
		},
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.2,
				ease: "easeInOut",
			},
		}),
	};

	return (
		<div className={scss.MenuModal}>
			<div className={scss.modal_wrapper}>
				<div className={scss.content}>
					<div className={scss.button_box}>
						{buttons.map((el, index) => (
							<motion.button
								layout
								key={index}
								onClick={() => {
									close(false);
								}}
								className={scss.buttons}
								initial="hidden"
								whileInView="visible"
								variants={buttonBlackVariant}
								custom={index}
								viewport={{ once: true, amount: 0.8 }}>
								<p
									className={`${scss.button_text} ${
										el === category ? scss.active : ""
									}`}>
									{el}
								</p>

								{el === category && (
									<motion.span
										className={scss.button_active}
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
											transition: {
												duration: 1,
												ease: "linear",
											},
										}}></motion.span>
								)}
								{el === category && (
									<span className={scss.button_right_line}></span>
								)}
							</motion.button>
						))}
					</div>
					<div className={scss.menu_item_box}>
						<div className={scss.menu_item}>
							{data.map((el, index) => (
								<div key={index} className={scss.menu_item_wrapper}>
									<div className={scss.menu_item_image_box}>
										<Image
											src={el.image}
											alt={el.name}
											width={300}
											height={190}
											className={scss.menu_item_image}
										/>
										<div className={scss.menu_item_info}>
											<span className={scss.item_info_content}>
												<p className={scss.item_name}>{el.name}</p>
												<p className={scss.item_price}>${el.price}</p>
											</span>
											<div className={scss.item_consistnce}>
												{el.consistance.map((el) => (
													<p key={el} className={scss.item_consistnce_name}>
														{el},
													</p>
												))}
											</div>
											<div className={scss.card_info_category}>{category}</div>
										</div>
									</div>
									<div className={scss.item_extras_drinks}>
										<div className={scss.item_extras}>
											<p className={scss.extras_title}>Extras</p>
											{el.extras.map((el, index) => (
												<div key={index} className={scss.extra_item}>
													<p className={scss.item_name}>{el.name}</p>
													<p className={scss.item_price}>{el.price}</p>
												</div>
											))}
										</div>
										<div className={scss.item_drinks}>
											<p className={scss.drinks_title}>Drinks</p>
											{el.drinks.map((el, index) => (
												<div key={index} className={scss.drinks_item}>
													<p className={scss.item_name}>{el.name}</p>
													<p className={scss.item_price}>{el.price}</p>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={scss.menu_similar_items}>
							<h1 className={scss.similar_items_title}>Similar gueries</h1>
							<div className={scss.similar_item_content}>
								{similar.map((el, index) => (
									<div
										className={scss.card_wrapper}
										key={index}
										onClick={() => setItemIndex(el.id)}>
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
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<IoIosCloseCircleOutline
					className={scss.close_icon}
					onClick={() => close(false)}
				/>
			</div>
		</div>
	);
};

export default MenuModal;
