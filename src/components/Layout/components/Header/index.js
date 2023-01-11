import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";
import { images } from "~/assets/images";
import {
	faCircleXmark,
	faSpinner,
	faMagnifyingGlass,
	faPlus,
	faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

console.log(images.logo);

const Header = () => {
	return (
		<header className={clsx(styles.wrapper)}>
			<div className={clsx(styles.inner)}>
				{/* Logo */}
				<div className={clsx(styles.logo)}>
					<img src={images.logo} alt="TikTok" />
				</div>

				{/* Search */}
				<div className={clsx(styles.search)}>
					<input
						placeholder="Search account and video"
						spellCheck={false}
					/>
					<button className={clsx(styles.clear)}>
						{/* Clear */}
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
					{/* Loading */}
					<FontAwesomeIcon
						className={clsx(styles.loading)}
						icon={faSpinner}
					/>
					<button className={clsx(styles.searchBtn)}>
						{/* Search */}
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>

				{/* Action */}
				<div className={clsx(styles.action)}>
					{/* Upload */}
					<button>
						<FontAwesomeIcon icon={faPlus} />
						Upload
					</button>

					{/* Login */}
					<button>Log in</button>

					{/* Menu */}
					<button>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
