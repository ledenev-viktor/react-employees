import { PlusCircleOutlined } from "@ant-design/icons"
import { CustomButton } from "../../components/customButton"
import { Layout } from "../../components/layout"
import { Table } from "antd"
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import { ColumnsType } from "antd/es/table";
import { Employee } from "../../types/Employee";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../path";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const columns: ColumnsType<Employee> = [
    {
        title: 'Имя',
        dataIndex: 'firstName',
        key: 'firstName'
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address'
    },
];

export const Empoyees = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetAllEmployeesQuery();
    const user = useSelector(selectUser);
    console.log('user', user)

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [navigate, user]);

    const goToAddUser = () => navigate(Paths.employeeAdd);

    return (
        <Layout>
            <CustomButton type="primary" onClick={goToAddUser} icon={<PlusCircleOutlined />}>
                Добавить
            </CustomButton>
            <Table
                loading={isLoading}
                dataSource={data}
                pagination={false}
                columns={columns}
                rowKey={(record) => record.id}
                onRow={(record, rowIndex) => (
                    {
                        onClick: () => navigate(`${Paths.employee}/${record.id}`)
                    }
                )}
            />
        </Layout>
    )
}