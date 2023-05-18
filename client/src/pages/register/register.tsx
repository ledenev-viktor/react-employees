import { Row, Card, Form, Space, Typography } from "antd"
import { Layout } from "../../components/layout"
import { CustomInput } from "../../components/customInput"
import { PasswordInput } from "../../components/passwordInput"
import { CustomButton } from "../../components/customButton"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from '../../path'
import { selectUser } from "../../features/auth/authSlice"
import { useRegisterMutation } from "../../app/services/auth"
import { User } from "../../types/User"
import { isErrorWithMessage } from "../../utils/isErrorWithMessage"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { ErrorMessage } from "../../components/errorMessage"

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [error, setError] = useState('');
    const [registerUser] = useRegisterMutation();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [navigate, user]);

    const register = async (data: RegisterData) => {
        try {
            await registerUser(data).unwrap();
            console.log(data);

            navigate('/');
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError("Неизвестная ошибка");
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Зарегистрируйтесь" style={{ width: '30rem' }}>
                    <Form onFinish={register}>
                        <CustomInput
                            type="text"
                            name="name"
                            placeholder="Имя"
                        />
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Пароль"
                        />
                        <PasswordInput
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                        />
                        <CustomButton
                            type="primary"
                            htmlType="submit"
                        >Зарегистрироваться</CustomButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Уже зарегистрированы?
                            <Link to={Paths.login}>Войдите</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}