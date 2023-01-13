import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = (props) => {
	console.log(props);
	return (
		<button className={clsx(styles.button)}>
			<div
				className={clsx(styles.textButton, {
					[styles.default]: props?.default,
					[styles.primary]: props?.primary,
					[styles.outline]: props?.outline,
				})}
			>
				{props.children}
			</div>
		</button>
	);
};

export default Button;
