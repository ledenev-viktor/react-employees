import { api } from './api';
import { User } from '../../types/User';

export type UserData = Omit<User, "id">
export type ResponseLoginData = User & { token: string };

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/user/login',
                method: 'POST',
                body: userData
            })
        }),
        register: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/user/register',
                method: 'POST',
                body: userData
            })
        }),
        // void - потому что в current ничего не передается
        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url: '/user/current',
                method: 'GET',
            })
        }),
    })
});

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi;

export const { endpoints: { login, register, current } } = authApi;