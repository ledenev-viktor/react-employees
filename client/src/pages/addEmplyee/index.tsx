import { Row } from "antd"
import { Layout } from "../../components/layout"
import { EmployeeForm } from "../../components/employeeForm"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddEmployeeMutation } from "../../app/services/employees";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { Employee } from "../../types/Employee";
import { Paths } from "../../path";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";



export const AddEmployee = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [addEmployee] = useAddEmployeeMutation();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [navigate, user]);

    const handleAddEmployee = async (data: Employee) => {
        try {
            await addEmployee(data).unwrap();

            navigate(`${Paths.status}/created`);
        } catch (error) {
            const errorMessage = isErrorWithMessage(error);

            if (errorMessage) {
                setError(error.data.message);
            } else {
                setError('Неизветсная ошибка');
            }
        }
    };

    return (
        <Layout>
            <Row
                align="middle"
                justify="center"
            >
                <EmployeeForm
                    title="Добавть сотрудника"
                    btnText="Добавить"
                    onFinish={handleAddEmployee}
                    error={error}
                />
            </Row>
        </Layout>
    )
}