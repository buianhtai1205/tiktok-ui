import React, { useState, useEffect } from "react";
import { ref, child, get } from "firebase/database";
import { database } from "~/firebase-server";

function VideoPlayer(props) {
	const [urlId, setUrlId] = useState("");

	useEffect(() => {
		const dbRef = ref(database);
		get(child(dbRef, `videos`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					const videos = snapshot.val();
					setUrlId(videos[props.id].urlId);
				} else {
					console.log("No data available");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, [props.id]);

	return (
		<iframe
			id="ytplayer"
			type="text/html"
			width="360"
			height="550"
			src={`https://www.youtube.com/embed/${urlId}?autoplay=1&origin=http://example.com`}
			frameborder="0"
		></iframe>
	);
}

export default VideoPlayer;
