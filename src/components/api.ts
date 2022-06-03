import axios from 'axios'
import { AppIndicator } from 'react-bootstrap-icons'
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

export const renderUser = async (id: number): Promise<Users> => {
    const response = await api.get<Users>(`/users/${id}`)
    return response.data
}