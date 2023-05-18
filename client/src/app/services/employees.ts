import { api } from './api';
import { Employee } from '../../types/Employee';

export const employeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployees: builder.query<Employee[], void>({
            query: () => ({
                url: '/employees',
                method: 'GET'
            })
        }),

        getEmployee: builder.query<Employee, string>({
            query: (id) => ({
                url: `/employees/${id}`,
                method: 'GET'
            })
        }),

        editEmployee: builder.mutation<string, Employee>({
            query: (employee) => ({
                url: `/employees/edit/${employee.id}`,
                method: 'PUT',
                body: employee
            })
        }),

        removeEmployee: builder.mutation<string, string>({
            query: (id) => ({
                url: `/employees/remove/${id}`,
                method: 'DELETE',
                body: { id }
            })
        }),

        addEmployee: builder.mutation<Employee, Employee>({
            query: (employee) => ({
                url: `/employees/add`,
                method: 'POST',
                body: employee
            })
        }),
    }),
});

export const {
    useAddEmployeeMutation,
    useGetAllEmployeesQuery,
    useEditEmployeeMutation,
    useRemoveEmployeeMutation,
    useGetEmployeeQuery,
} = employeesApi;

export const {
    endpoints: {
        getAllEmployees,
        getEmployee,
        editEmployee,
        removeEmployee,
        addEmployee
    }
} = employeesApi;