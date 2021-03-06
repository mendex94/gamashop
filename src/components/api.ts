import axios from 'axios';
import { Users, Fornecedor, Entregas } from './types';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export const renderUsers = (): Promise<Users[]> => {
    return api.get<Users[]>('/users').then(response => response.data)
};

export const createUser = (user: Omit<Users, "id">): Promise<Users> => {
    return api.post<Users>('/users', user).then(response => response.data);
};

export const deleteUser = async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
};

export const updateUser = (id: number, user: Omit<Users, "id">): Promise<Users> => {
    return api.put<Users>(`/users/${id}`, user).then(response => response.data);
};

export const renderFornecedores = async (): Promise<Fornecedor[]> => {
    const response = await api.get<Fornecedor[]>('/fornecedores');
    return response.data;
};

export const createFornecedor = async (fornecedor: Omit<Fornecedor, "id">): Promise<Fornecedor> => {
    const response = await api.post<Fornecedor>('/fornecedores', fornecedor);
    return response.data;
};

export const deleteFornecedor = async (id: number): Promise<void> => {
    await api.delete(`/fornecedores/${id}`);
};

export const updateFornecedor = async (id: number, fornecedor: Omit<Fornecedor, "id">): Promise<Fornecedor> => {
    const response = await api.put<Fornecedor>(`/fornecedores/${id}`, fornecedor);
    return response.data;
};

export const renderEntregas = async (): Promise<Entregas[]> => {
    const response = await api.get<Entregas[]>('/entregas');
    return response.data;
};

export const createEntregas = async (entregas: Omit<Entregas, "id">): Promise<Entregas> => {
    const response = await api.post<Entregas>('/entregas', entregas);
    return response.data;
};

export const deleteEntregas = async (id: number): Promise<void> => {
    await api.delete(`/entregas/${id}`);
};

export const updateEntregas = async (id: number, entregas: Omit<Entregas, "id">): Promise<Entregas> => {
    const response = await api.put<Entregas>(`/entregas/${id}`, entregas);
    return response.data;
};