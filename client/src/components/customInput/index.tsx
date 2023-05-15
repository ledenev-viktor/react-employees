import { Input, Form } from "antd"
import { FC } from "react"

export type CustomInputProps = {
    name: string;
    placeholder: string;
    type?: string;
}

export const CustomInput: FC<CustomInputProps> = ({ name, placeholder, type = 'text' }) => {
    return (
        <Form.Item name={name} shouldUpdate={true} rules={[{ required: true, message: "Обязательное поле" }]}>
            <Input placeholder={placeholder} type={type} size='large' />
        </Form.Item>
    )
} 