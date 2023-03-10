import clsx from "clsx";
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
	return (
		<div className={clsx(styles.wrapper)}>
			<Header />
			<div className={clsx(styles.container)}>
				<Sidebar />
				<div className={clsx(styles.content)}>{children}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
