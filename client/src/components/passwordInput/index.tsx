import { FC } from "react";
import { Form, Input } from 'antd';
import { NamePath } from "antd/es/form/interface";

export type PasswordInputProps = {
    name: string;
    placeholder: string;
    dependenies?: NamePath[];

}

// валидация: [{...}, () => {...rules}]
export const PasswordInput: FC<PasswordInputProps> = ({ name, placeholder, dependenies }) => {
    return (
        <Form.Item name={name} dependencies={dependenies} hasFeedback rules={[
            {
                required: true,
                message: 'Обязательное поле'
            }, ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value) {
                        return Promise.resolve();
                    }
                    if (name === 'confirmPassword') {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Пароли должны совпадать'));
                    } else {
                        if (value.length < 6) {
                            return Promise.reject(new Error('Пароль должен быть длинее 6ти символов'));
                        }
                        return Promise.resolve();
                    }
                }
            })

        ]}>
            <Input.Password placeholder={placeholder} size='large' />
        </Form.Item>
    )
}