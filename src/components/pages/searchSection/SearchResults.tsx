"use client";
import React, { useMemo } from "react";
import scss from "./searchResults.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";
import { main_menu } from "@/constants/menu";
const SearchResults = () => {
	const { query } = useParams();
	const data = useMemo(() => {
		return main_menu.filter((el) => el.name === query);
	}, [query]);

	return (
		<section className={scss.SearchResults}>
			<div className="container">
				<div className={scss.search_content}>
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
										<div className={scss.card_info_category}></div>
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
				</div>
			</div>
		</section>
	);
};

export default SearchResults;
