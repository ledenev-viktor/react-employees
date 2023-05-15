import { FC, ReactNode } from "react"
import styles from "./index.module.css";
import { Layout, Space, Typography } from "antd";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { CustomButton } from "../customButton";
import { Link } from "react-router-dom";
import { Paths } from "../../path";

export const Header: FC = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to={Paths.home}>
                    <CustomButton type="ghost">
                        <Typography.Title level={1} className={styles.title}>Сотрудник</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.login}>
                    <CustomButton type="link" icon={<UserOutlined/>}>Логин</CustomButton>
                </Link>
                <Link to={Paths.register}>
                    <CustomButton type="link" icon={<LoginOutlined/>}>Регистрация</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}