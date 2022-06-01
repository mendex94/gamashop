import axios from 'axios'
import { Users } from './types'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const renderUsers = (): Promise<Users[]> => {
    return api.get<Users[]>('/users').then(response => response.data)
}

export const createUser = (user: Omit<Users, "id">): Promise<Users> => {
    return api.post<Users>('/users', user).then(response => response.data)
}

export const deleteUser = async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`)
}

export const editUser = async (user: Users): Promise<Users> => {
    return await api.put<Users>(`/users/${user.id}`, user).then(response => response.data)
}

export const updateUser = (id: number, user: Omit<Users, "id">): Promise<Users> => {
    return api.put<Users>(`/users/${id}`, user).then(response => response.data)
}