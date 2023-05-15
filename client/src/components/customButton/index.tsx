import { Button, Form } from "antd"
import { ButtonHTMLType, ButtonShape, ButtonType } from "antd/es/button";
import { IconType } from "antd/es/notification/interface";
import { FC, ReactNode } from "react"

type CustomButtomProps = {
    children: ReactNode;
    htmlType?: ButtonHTMLType;
    onClick?: () => void;
    type?: ButtonType;
    danger?: boolean;
    loading?: boolean;
    shape?: ButtonShape;
    icon?: ReactNode;
}

export const CustomButton: FC<CustomButtomProps> = ({ children, htmlType = 'button', type, danger, loading, shape, icon, onClick }) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >
                {children}
            </Button>
        </Form.Item>
    )
} 