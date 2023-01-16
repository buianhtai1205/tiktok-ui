import clsx from "clsx";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem";
import styles from "./Sidebar.module.scss";
import { images } from "~/assets/images";
import Button from "~/components/Button";

const Sidebar = () => {
	const [suggestedAccounts, setSuggestedAccounts] = useState([]);
	const [showAll, setShowAll] = useState(false);

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
		console.log(">>call api");
	}, []);

	useEffect(() => {}, [showAll]);

	const handleShowHide = () => {
		setShowAll(!showAll);
	};

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
					{suggestedAccounts.map((item, index) => {
						if (showAll === false && index >= 5) {
							return "";
						}
						return <AccountItem key={index} accountInfo={item} />;
					})}
				</div>
				<span className={clsx(styles.showAll)} onClick={handleShowHide}>
					{showAll ? "See less" : "See all"}
				</span>
			</div>

			{/* Discover */}
			<div className={clsx(styles.discover, styles.container)}>
				<h4 className={clsx(styles.title)}>Discover</h4>
				<div className={clsx(styles.discoverList)}>
					<div className={clsx(styles.discoverItem)}>
						<img src={images.hashtagIcon} alt="hashtag" />
						<p>suthatla</p>
					</div>
					<div className={clsx(styles.discoverItem)}>
						<img src={images.hashtagIcon} alt="hashtag" />
						<p>mackedoi</p>
					</div>
					<div className={clsx(styles.discoverItem)}>
						<img src={images.hashtagIcon} alt="hashtag" />
						<p>sansangthaydoi</p>
					</div>
					<div className={clsx(styles.discoverItem)}>
						<img src={images.musicIcon} alt="hashtag" />
						<p>
							Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n &
							BHMedia
						</p>
					</div>
					<div className={clsx(styles.discoverItem)}>
						<img src={images.musicIcon} alt="hashtag" />
						<p>
							Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14
							Casper & Hoàng Dũng
						</p>
					</div>
					<div className={clsx(styles.discoverItem)}>
						<img src={images.musicIcon} alt="hashtag" />
						<p>Thiên Thần Tình Yêu - RICKY STAR</p>
					</div>
				</div>
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
