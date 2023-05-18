import { useCurrentQuery } from "../../app/services/auth"


export const Auth = ({ children }: { children: JSX.Element }) => {
    const { isLoading } = useCurrentQuery();
    // isLoading - внутренний статус redux-tollkit
    if (isLoading) {
        return <span>Загрузка</span>
    }

    return children;
}