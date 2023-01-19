import { useEffect, useState } from "react";
import clsx from "clsx";
import { ref, child, get } from "firebase/database";
import { database } from "~/firebase-server";
import styles from "./ContentItem.module.scss";
import { Link } from "react-router-dom";

const ContentItem = (props) => {
	const [user, setUser] = useState();
	const [video, setVideo] = useState("");

	useEffect(() => {
		const dbRef = ref(database);
		get(child(dbRef, `0/videos/${props.id}`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					setVideo(snapshot.val());
					const userId = snapshot.val().userId;
					get(child(dbRef, `0/users/${userId}`)).then((snapshot) => {
						if (snapshot.exists()) {
							setUser(snapshot.val());
						} else {
							console.log("No data user available");
						}
					});
				} else {
					console.log("No data video available");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, [props.id]);

	return (
		<div className={clsx(styles.wrapper)}>
			<Link>
				<img
					src="https://img.meta.com.vn/Data/image/2022/01/06/avatar-tiktok-6.jpg"
					alt="avatar"
					width="100px"
				/>
			</Link>
			<div className={clsx(styles.contentContainer)}>
				<div className={clsx(styles.textInfoContainer)}>
					{user?.username}
					{user?.name}
				</div>
				<div className={clsx(styles.videoContainer)}>
					<iframe
						id="ytplayer"
						type="text/html"
						width="360"
						height="550"
						src={`https://www.youtube.com/embed/${video.urlId}?autoplay=1&origin=http://example.com`}
						frameborder="0"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContentItem;
