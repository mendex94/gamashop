import { useEffect, useState } from 'react';
import { createFornecedor, deleteFornecedor, renderFornecedores, updateFornecedor } from '../../api';
import { Fornecedor } from '../../types';

function useFornecedoresRequests() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([] as Fornecedor[]);

  useEffect(() => {
    renderFornecedores().then(fornecedores => setFornecedores(fornecedores))
  }, []);


  const handleCreateFornecedor = async (fornecedor: Omit<Fornecedor, "id">) => {
    const newFornecedor = await createFornecedor(fornecedor);

    setFornecedores([...fornecedores, newFornecedor]);
  };


  const handleDeleteFornecedor = async (id: number) => {
    await deleteFornecedor(id);

    setFornecedores(fornecedores.filter(fornecedor => fornecedor.id !== id));
  };

  const handleUpdateFornecedor = async (id: number, fornecedor: Omit<Fornecedor, "id">) => {
    const newFornecedor = await updateFornecedor(id, fornecedor);

    setFornecedores(fornecedores.map(
      fornecedor => fornecedor.id === newFornecedor.id ? newFornecedor : fornecedor));
  };

  return {
    fornecedores,
    handleCreateFornecedor,
    handleUpdateFornecedor,
    handleDeleteFornecedor
  };
};

export default useFornecedoresRequests;