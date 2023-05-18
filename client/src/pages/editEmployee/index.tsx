import { useNavigate, useParams } from "react-router-dom"
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import { FC, useState } from "react";
import { useEditEmployeeMutation, useGetEmployeeQuery } from "../../app/services/employees";
import { Layout } from "../../components/layout";
import { Row } from "antd";
import { EmployeeForm } from "../../components/employeeForm";
import { Employee } from "../../types/Employee";
import { Paths } from "../../path";

export const EditEmployee:FC = () => {
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const [error, setError] = useState("");
    const { data, isLoading } = useGetEmployeeQuery(params.id || "");
    const [editEmployee] = useEditEmployeeMutation();

    if (isLoading) {
        return <span>Загрузка</span>
    }

    const handleEditUser = async (employee: Employee) => {
        try {
            const editedEmployee = {
                ...data,
                ...employee,
            };
            await editEmployee(editedEmployee).unwrap();
            navigate(`${Paths.status}/updated`);
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
                <EmployeeForm
                    title="Редактировать сотрудника"
                    btnText="Редактировать"
                    error={error}
                    employee={data}
                    onFinish={handleEditUser}
                />
            </Row>
        </Layout>
    )
}