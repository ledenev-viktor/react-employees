import { Row, Card, Form, Space, Typography } from "antd"
import { Layout } from "../../components/layout"
import { CustomInput } from "../../components/customInput"
import { PasswordInput } from "../../components/passwordInput"
import { CustomButton } from "../../components/customButton"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from '../../path'
import { UserData, useLoginMutation } from "../../app/services/auth"
import { isErrorWithMessage } from "../../utils/isErrorWithMessage"
import { useState } from "react"
import { ErrorMessage } from "../../components/errorMessage"


export const Login = () => {
    const navigate = useNavigate();
    const [loginUser, loginUserResult] = useLoginMutation();
    const [error, setError] = useState('');

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate("/"); // Если авторизация прошла успешно, редирект на главную страницу.
        } catch (error) {
            const isError = isErrorWithMessage(error);
            if (isError) {
                setError(error.data.message);
            } else {
                setError('Неизвестная ошибка');
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: '30rem' }}>
                    <Form onFinish={login}>
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Пароль"
                        />
                        <CustomButton
                            type="primary"
                            htmlType="submit"
                        >Войти</CustomButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Нет аккаунта?
                            <Link to={Paths.register}>Зарегистрируйтесь</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}