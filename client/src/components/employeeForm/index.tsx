import { FC } from "react";
import { Employee } from "../../types/Employee";
import { Card, Form, Space } from "antd";
import { CustomInput } from "../customInput";
import { ErrorMessage } from "../errorMessage";
import { CustomButton } from "../customButton";

type EmployeeFormProps<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
}

export const EmployeeForm: FC<EmployeeFormProps<Employee>> = ({
    onFinish,
    title,
    btnText,
    error,
    employee,
}) => {
    return (
        <Card title={title} style={{width: '30rem'}}>
            <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
                <CustomInput type="text" name="firstName" placeholder="Имя" />
                <CustomInput type="text" name="lastName" placeholder="Фамилия" />
                <CustomInput type="number" name="age" placeholder="Возраст" />
                <CustomInput type="text" name="address" placeholder="Адрес" />
                <Space>
                    <ErrorMessage message={error} />
                    <CustomButton htmlType="submit">
                        {btnText}
                    </CustomButton>
                </Space>
            </Form>
        </Card>
    )
}