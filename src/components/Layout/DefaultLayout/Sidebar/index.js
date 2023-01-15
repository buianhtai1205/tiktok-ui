import clsx from "clsx";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem";
import styles from "./Sidebar.module.scss";
import { images } from "~/assets/images";
import Button from "~/components/Button";

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
			{/* NavBar */}
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

			{/* If user not login */}
			<div className={clsx(styles.unLogin, styles.container)}>
				<p>
					Log in to follow creators, like videos, and view comments.
				</p>
				<div className={clsx(styles.loginBtn)}>
					<Button outline>Log in</Button>
				</div>
			</div>
			{/* endif */}

			{/* Suggested accounts */}
			<div className={clsx(styles.suggestedAccounts, styles.container)}>
				<h4 className={clsx(styles.title)}>Suggested accounts</h4>
				<div className={clsx(styles.listAccounts)}>
					{suggestedAccounts.map((item, index) => (
						<AccountItem key={index} accountInfo={item} />
					))}
				</div>
				<span>See all</span>
			</div>

			{/* Discover */}
			<div className={clsx(styles.discover, styles.container)}>
				<h4>Discover</h4>
			</div>

			{/* Footer */}
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
