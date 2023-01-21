import { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faSpinner,
	faMagnifyingGlass,
	faPlus,
	faEllipsisVertical,
	faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircleQuestion,
	faKeyboard,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";
import { images } from "~/assets/images";
import Popper from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const MENU_ITEMS = [
	{
		icon: (
			<FontAwesomeIcon className={clsx(styles.icon)} icon={faLanguage} />
		),
		name: "English",
		children: {
			title: "Language",
			value: [
				{
					type: "Language",
					code: "en",
					name: "English",
				},
				{
					type: "Language",
					code: "vi",
					name: "Tiếng Việt",
				},
			],
		},
	},
	{
		icon: (
			<FontAwesomeIcon
				className={clsx(styles.icon)}
				icon={faCircleQuestion}
			/>
		),
		name: "Feedback and help",
		to: "/feedback",
	},
	{
		icon: (
			<FontAwesomeIcon className={clsx(styles.icon)} icon={faKeyboard} />
		),
		name: "Keyboard shortcuts",
	},
	{
		icon: (
			<img
				src={images.moonIcon}
				alt="moon"
				className={clsx(styles.icon)}
			/>
		),
		name: "Dark mode",
	},
];

const Header = () => {
	const [searchResult, setSearchResult] = useState([]);
	useEffect(() => {
		//fake api
		const apiResult = [
			{
				username: "nguyenvana.offical",
				fullname: "Nguyen Van A",
				images: "https://img.meta.com.vn/Data/image/2022/01/06/avatar-tiktok-6.jpg",
				isTick: true,
			},
			{
				username: "nguyenvana.offical",
				fullname: "Nguyen Van A",
				images: "https://img.meta.com.vn/Data/image/2022/01/06/avatar-tiktok-6.jpg",
				isTick: true,
			},
			{
				username: "nguyenvana.offical",
				fullname: "Nguyen Van A",
				images: "https://img.meta.com.vn/Data/image/2022/01/06/avatar-tiktok-6.jpg",
				isTick: false,
			},
			{
				username: "nguyenvana.offical",
				fullname: "Nguyen Van A",
				images: "https://img.meta.com.vn/Data/image/2022/01/06/avatar-tiktok-6.jpg",
				isTick: false,
			},
		];

		setSearchResult(apiResult);
	}, []);

	return (
		<header className={clsx(styles.wrapper)}>
			<div className={clsx(styles.inner)}>
				{/* Logo */}
				<div className={clsx(styles.logo)}>
					<img src={images.logo} alt="TikTok" />
				</div>

				{/* Search */}
				<Tippy
					interactive={true}
					visible={searchResult.length > 0}
					render={(attrs) => (
						<div
							className={clsx(styles.searchResult, "d-none")}
							tabIndex="-1"
							{...attrs}
						>
							<Popper>
								<h4 className={clsx(styles.title)}>Account</h4>
								{searchResult.map((item, index) => (
									<AccountItem
										key={index}
										accountInfo={item}
									/>
								))}
							</Popper>
						</div>
					)}
				>
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
				</Tippy>

				{/* Action */}
				<div className={clsx(styles.action)}>
					{/* Upload */}
					<div className={clsx(styles.upload)}>
						<Button default>
							<FontAwesomeIcon
								className={clsx(styles.iconPlus)}
								icon={faPlus}
							/>
							<div className={clsx(styles.text)}>Upload</div>
						</Button>
					</div>

					{/* Login */}
					<div className={clsx(styles.login)}>
						<Button primary>Log in</Button>
					</div>

					{/* Menu */}
					<Menu items={MENU_ITEMS}>
						<div className={clsx(styles.menu)}>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</div>
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
