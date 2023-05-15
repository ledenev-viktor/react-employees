import { Layout as AntLaoyt } from "antd";
import { FC, ReactNode } from "react";
import styles from "./index.module.css";
import { Header } from "../header";

type LayoutProps = {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header/>
            <AntLaoyt.Content className={styles.main} style={{ height: '100%' }}>
                {children}
            </AntLaoyt.Content>
        </div>
    )
}