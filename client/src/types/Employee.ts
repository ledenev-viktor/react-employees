import { User } from "./User"

export type Employee = {
    id: string;
    firstName?: string;
    lastName?: string;
    age?: string;
    address?: string;
    user?: User;
    userId?: string;
};