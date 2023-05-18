import { FC, ReactNode, useEffect } from "react"
import styles from "./index.module.css";
import { Layout, Space, Typography } from "antd";
import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { CustomButton } from "../customButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../path";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";

export const Header: FC = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login');
    };

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
            {
                user ? (
                    <CustomButton
                        type="ghost"
                        icon={<LogoutOutlined />}
                        onClick={onLogoutClick}
                    >
                        Выйти
                    </CustomButton>
                ) :
                    (
                        <Space>
                            <Link to={Paths.login}>
                                <CustomButton type="link" icon={<UserOutlined />}>Логин</CustomButton>
                            </Link>
                            <Link to={Paths.register}>
                                <CustomButton type="link" icon={<LoginOutlined />}>Регистрация</CustomButton>
                            </Link>
                        </Space>
                    )
            }

        </Layout.Header>
    )
}