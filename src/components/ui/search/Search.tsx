"use client";
import React, { useEffect, useState } from "react";
import scss from "./search.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { IMenu, main_menu } from "@/constants/menu";
const Search = () => {
	const [value, setValue] = useState<string>("");
	const [searchData, setSearchData] = useState<IMenu[]>([]);
	const router = useRouter();
	useEffect(() => {
		const filterItems = () => {
			if (value.length < 0) {
				setSearchData([]);
			} else if (value.length > 0) {
				const filter = main_menu.filter((el) =>
					el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
				);
				setSearchData(filter);
			}
		};
		filterItems();
	}, [value]);
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className={scss.Search}>
			<div className={scss.searchContainer}>
				<IoSearchOutline className={scss.searchIcon} />
				<input
					value={value}
					onChange={handleSearch}
					className={scss.searchInput}
					type="text"
					placeholder="Search"
				/>
			</div>
			{value.length > 0 && (
				<div className={scss.search_result}>
					{searchData.map((el, index) => (
						<div
							key={index}
							className={scss.search_item}
							onClick={() => {
								router.push(`/search/${el.name}`);
								setValue("");
							}}>
							<p>{el.name}</p>
							<p className={scss.item_price}>${el.price}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
