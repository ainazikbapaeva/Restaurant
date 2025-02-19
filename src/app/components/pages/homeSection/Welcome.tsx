import scss from "./welcome.module.scss";

const Welcome = () => {
	return (
		<div className={scss.welcome}>
			<div className="container">
				<div className={scss.content}>Welcome</div>
			</div>
		</div>
	);
};

export default Welcome;
