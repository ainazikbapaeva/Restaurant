import scss from "./header.module.scss";

const Header = () => {
	return (
		<div className={scss.header}>
			<div className="container">
				<div className={scss.content}>Header</div>
			</div>
		</div>
	);
};

export default Header;
