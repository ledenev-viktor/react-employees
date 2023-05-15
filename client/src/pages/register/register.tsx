import { Row, Card, Form, Space, Typography } from "antd"
import { Layout } from "../../components/layout"
import { CustomInput } from "../../components/customInput"
import { PasswordInput } from "../../components/passwordInput"
import { CustomButton } from "../../components/customButton"
import { Link } from "react-router-dom"
import { Paths } from '../../path'


export const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Зарегистрируйтесь" style={{ width: '30rem' }}>
                    <Form onFinish={() => null}>
                        <CustomInput
                            name="name"
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
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}