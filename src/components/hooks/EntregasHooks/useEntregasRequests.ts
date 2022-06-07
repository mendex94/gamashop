import { useEffect, useState } from 'react';
import { createEntregas, deleteEntregas, renderEntregas, updateEntregas } from '../../api';
import { Entregas } from '../../types';


function EntregasRequests() {
  const [entregas, setEntregas] = useState<Entregas[]>([] as Entregas[]);

  useEffect(() => {
    renderEntregas().then(Entregas => setEntregas(Entregas))
  }, []);


  const handleCreateEntregas = async (Entregas: Omit<Entregas, "id">) => {
    const newEntregas = await createEntregas(Entregas);

    setEntregas([...entregas, newEntregas]);
  };


  const handleDeleteEntregas = async (id: number) => {
    await deleteEntregas(id);

    setEntregas(entregas.filter(Entregas => Entregas.id !== id));
  };

  const handleUpdateEntregas = async (id: number, Entregas: Omit<Entregas, "id">) => {
    const newEntregas = await updateEntregas(id, Entregas);

    setEntregas(entregas.map(
      Entregas => Entregas.id === newEntregas.id ? newEntregas : Entregas));
  };

  return {
    entregas,
    handleCreateEntregas,
    handleUpdateEntregas,
    handleDeleteEntregas
  };
};

export default EntregasRequests;