import { StaticImageData } from "next/image";
import image1 from "../app/assets/photo1.png";
import image2 from "../app/assets/photo2.png";
import image3 from "../app/assets/photo3.png";
import image4 from "../app/assets/photo4.png";
import image5 from "../app/assets/photo5.png";
import image6 from "../app/assets/photo6.png";
interface IExtra {
	name: string;
	price: number;
}
interface IDrinks {
	name: string;
	price: number;
}

export interface IMenu {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	image: StaticImageData;
	consistance: string[];
	extras: IExtra[];
	drinks: IDrinks[];
}

export const main_menu: IMenu[] = [
	{
		id: 1,
		name: "Ice cream",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "desserts",
		price: 10,
		image: image1,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 2,
		name: "desserts",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "desserts",
		price: 20,
		image: image2,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 3,
		name: "hot drinks",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "desserts",
		price: 9,
		image: image3,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 4,
		name: "national foods",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "desserts",
		price: 9,
		image: image4,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 5,
		name: "eastern cuisine",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "desserts",
		price: 9,
		image: image5,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 6,
		name: "fast foots",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "desserts",
		price: 9,
		image: image6,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	//hot drinkg
	{
		id: 7,
		name: "Tea",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Hot drinks",
		price: 9,
		image: image1,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 8,
		name: "fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Hot drinks",
		price: 9,
		image: image2,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 9,
		name: "Coca-Cola",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Hot drinks",
		price: 9,
		image: image3,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 10,
		name: "Tea",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Hot drinks",
		price: 9,
		image: image4,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 11,
		name: "Tea",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Hot drinks",
		price: 9,
		image: image5,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 12,
		name: "Tea",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Hot drinks",
		price: 9,
		image: image6,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	//cold drinks
	{
		id: 13,
		name: "Fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Cold drinks",
		price: 9,
		image: image1,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 14,
		name: "Fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Cold drinks",
		price: 9,
		image: image2,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 15,
		name: "Fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Cold drinks",
		price: 9,
		image: image3,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 16,
		name: "Fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Cold drinks",
		price: 9,
		image: image4,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 17,
		name: "Fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Cold drinks",
		price: 9,
		image: image5,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 18,
		name: "Fanta",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Cold drinks",
		price: 9,
		image: image6,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	//National foods
	{
		id: 19,
		name: "Besh-mark",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "National Foods",
		price: 9,
		image: image1,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 20,
		name: "Besh-mark",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "National Foods",
		price: 9,
		image: image2,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 21,
		name: "Besh-mark",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "National Foods",
		price: 9,
		image: image3,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 22,
		name: "Besh-mark",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "National Foods",
		price: 9,
		image: image4,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 23,
		name: "Besh-mark",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "National Foods",
		price: 9,
		image: image5,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 24,
		name: "Besh-mark",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "National Foods",
		price: 9,
		image: image6,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	//Eastern coisine
	{
		id: 25,
		name: "Sushi",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Eastern cuisine",
		price: 9,
		image: image1,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 26,
		name: "Sushi",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Eastern cuisine",
		price: 9,
		image: image2,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 27,
		name: "Sushi",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Eastern cuisine",
		price: 9,
		image: image3,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 28,
		name: "Sushi",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Eastern cuisine",
		price: 9,
		image: image4,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 29,
		name: "Sushi",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Eastern cuisine",
		price: 9,
		image: image5,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 30,
		name: "Sushi",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Eastern cuisine",
		price: 9,
		image: image6,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	//Fast food
	{
		id: 31,
		name: "Burger",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Fast food",
		price: 9,
		image: image1,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 32,
		name: "Burger",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Fast food",
		price: 9,
		image: image2,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 33,
		name: "Burger",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Fast food",
		price: 9,
		image: image3,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 34,
		name: "Burger",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Fast food",
		price: 9,
		image: image4,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 35,
		name: "Burger",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Fast food",
		price: 9,
		image: image5,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
	{
		id: 36,
		name: "Burger",
		description:
			"Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
		category: "Fast food",
		price: 9,
		image: image6,
		consistance: ["Soda", "cream", "milk", "sugar"],
		extras: [
			{
				name: "Cherry",
				price: 0.9,
			},
			{
				name: "Cherry",
				price: 0.9,
			},
		],
		drinks: [
			{
				name: "Coca-cola",
				price: 0.9,
			},
			{
				name: "Coca-Cola",
				price: 0.9,
			},
		],
	},
];
