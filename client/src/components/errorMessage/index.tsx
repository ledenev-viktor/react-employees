import { Alert } from "antd";
import { FC } from "react";

type ErrorProps = {
    message?: string;
}


export const ErrorMessage:FC<ErrorProps> = ({message}) => {
    if (!message) return null;
    return <Alert message={message} type="error" />;
}