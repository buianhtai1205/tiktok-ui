import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./AccountItem.module.scss";

const AccountItem = (props) => {
	const [account, setAccount] = useState({});

	useEffect(() => {
		const { accountInfo } = props;
		setAccount(accountInfo);
	}, [account]);

	return (
		<div className={clsx(styles.wrapper)}>
			<img
				className={clsx(styles.avatar)}
				src={account.images}
				alt={account.fullname}
			/>
			<div className={clsx(styles.info)}>
				<h4 className={clsx(styles.username)}>
					<span>{account.username}</span>
					{account.isTick && (
						<FontAwesomeIcon
							className={clsx(styles.check)}
							icon={faCheckCircle}
						/>
					)}
				</h4>
				<span className={clsx(styles.fullname)}>
					{account.fullname}
				</span>
			</div>
		</div>
	);
};

export default AccountItem;
