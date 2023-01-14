import clsx from "clsx";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem";
import styles from "./Sidebar.module.scss";
import { images } from "~/assets/images";

const Sidebar = () => {
	const [suggestedAccounts, setSuggestedAccounts] = useState([]);
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

		setSuggestedAccounts(apiResult);
	}, []);
	return (
		<aside className={clsx(styles.wrapper)}>
			{/* Sidebar */}
			<div className={clsx(styles.navBar, styles.container)}>
				<div className={clsx(styles.navBarContent, styles.home)}>
					<img src={images.homeIcon} alt="home" />
					For You
				</div>
				<div className={clsx(styles.navBarContent)}>
					<img src={images.followingIcon} alt="following" />
					Following
				</div>
				<div className={clsx(styles.navBarContent)}>
					<img src={images.liveIcon} alt="live" />
					LIVE
				</div>
			</div>

			<div className={clsx(styles.suggestedAccounts, styles.container)}>
				<h4>Suggested accounts</h4>
				{suggestedAccounts.map((item, index) => (
					<AccountItem key={index} accountInfo={item} />
				))}
				<span>See all</span>
			</div>

			<div className={clsx(styles.discover, styles.container)}>
				<h4>Discover</h4>
			</div>

			<div className={clsx(styles.footer)}>
				<a href="/">About</a>
				<a href="/">Newsrooms</a>
				<a href="/">Contact</a>
				<a href="/">Careers</a>
				<a href="/">ByteDance</a>
			</div>
		</aside>
	);
};

export default Sidebar;
