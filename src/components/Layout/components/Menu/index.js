import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import {
	faCircleQuestion,
	faKeyboard,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from "./Menu.module.scss";
import Popper from "~/components/Popper";
import { images } from "~/assets/images";

const Menu = ({ children }) => {
	return (
		<Tippy
			interactive={true}
			placement="bottom-end"
			render={(attrs) => (
				<div
					className={clsx(styles.menuOption)}
					tabIndex="-1"
					{...attrs}
				>
					<Popper>
						{/* isLogin = true */}
						{/* ... */}

						{/* Always */}
						<div className={clsx(styles.option)}>
							<FontAwesomeIcon
								className={clsx(styles.icon)}
								icon={faLanguage}
							/>
							English
						</div>
						<div className={clsx(styles.option)}>
							<FontAwesomeIcon
								className={clsx(styles.icon)}
								icon={faCircleQuestion}
							/>
							Feedback and help
						</div>
						<div className={clsx(styles.option)}>
							<FontAwesomeIcon
								className={clsx(styles.icon)}
								icon={faKeyboard}
							/>
							Keyboard shortcuts
						</div>
						<div className={clsx(styles.option)}>
							<img
								src={images.moonIcon}
								alt="moon"
								className={clsx(styles.icon)}
							/>
							Dark mode
						</div>
					</Popper>
				</div>
			)}
		>
			{children}
		</Tippy>
	);
};

export default Menu;
