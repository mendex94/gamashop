import axios from 'axios'
import { Produtos } from '../types'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const renderProducts = (): Promise<Produtos[]> => {
    return api.get<Produtos[]>('/produtos').then(response =>response.data)
}

export const addProduct = (produto: Omit<Produtos, "id">): Promise<Produtos> => {
    return api.post<Produtos>('/produtos', produto).then(response => response.data)
}

export const deleteProduct = async (id: number): Promise<void> => {
    await api.delete(`/produtos/${id}`)
}

export const updateProduct = (id: number, produto: Omit<Produtos, "id">): Promise<Produtos> => {
    return api.put<Produtos>(`/produtos/${id}`, produto).then(response => response.data)
}