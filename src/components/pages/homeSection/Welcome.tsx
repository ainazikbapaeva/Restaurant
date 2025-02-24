"use client";
import scss from "./welcome.module.scss";
import left from "../../../app/assets/rigth.png";
import right from "../../../app/assets/left.png";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { useBookingStore } from "@/store/useBookingStore";
import BookingModal from "@/components/ui/booking_modal/BookingModal";

interface Text {
	name: string;
	descr: string;
}

interface Info {
	locationInfo: string;
	phone: string;
}

const Welcome = () => {
	const { isOpen, setIsOpen } = useBookingStore();

	const text: Text = {
		name: "Italian Cuisine",
		descr:
			"Classic steak & delicious with delightfully unexpected twists. The restaurant's sunny decor was inspired by diners.",
	};

	const Info: Info = {
		locationInfo: "Rua da moeda 1g,1200-275,Portugal",
		phone: "+771219900",
	};
	return (
		<div
			style={{
				position: "relative",
				top: "70px",
			}}
			className={scss.welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.delicious}>
						<Image src={left} alt="img" width={25} height={10} />
						<h3>Delicious</h3>
						<Image src={right} alt="img" width={25} height={10} />
					</div>

					<h1>{text.name}</h1>
					<p>{text.descr}</p>
					<div className={scss.btnBlock}>
						<div className={scss.line}></div>
						<button onClick={() => setIsOpen(true)}>
							Reserve Your Table
							<GrFormNextLink />
						</button>
						<div className={scss.line}></div>
					</div>
				</div>
				<div className={scss.bottom_text}>
					<div className={scss.location_block}>
						<h5>Location</h5>
						<div className={scss.location_line}></div>
						<span>
							<ImLocation2 />
						</span>
						<p className={scss.location_p}>{Info.locationInfo}</p>
					</div>
					<div className={scss.phone_block}>
						<h5>Hotline"</h5>
						<div className={scss.location_line}></div>
						<span>
							<IoIosCall />
						</span>
						<p>+771219900</p>
					</div>
				</div>
			</div>
			<div className={scss.bottom_line}></div>
			<div className={scss.right_line}></div>
			{isOpen && <BookingModal />}
		</div>
	);
};

export default Welcome;
