import { useEffect, useState } from 'react'
import { renderProducts, addProduct, deleteProduct, updateProduct } from '../../interfaces/produtos'
import { Produtos } from '../../types'

function productRequests() {
    const [productsList, setProducts] = useState<Produtos[]>([] as Produtos[])

    useEffect(() => {
      renderProducts().then(products => setProducts(products))
    }, [])
  
  
    const handleAddProduct = async (product: Omit<Produtos, "id">) => {
      const newProduct = await addProduct(product)
      setProducts(
        oldProductList => [...oldProductList, newProduct]
      )
    }
  
  
    const handleDeleteProduct = async (id: number) => {
      await deleteProduct(id)
      setProducts(
        oldProductList => oldProductList.filter(product => product.id !== id)
      )
    }
  
    const handleUpdateProduct = async (id: number, product: Omit<Produtos, "id">) => {
      const newProduct = await updateProduct(id, product)
      setProducts(
        oldProductList => oldProductList.map(
          oldProduct => oldProduct.id === newProduct.id ? newProduct : oldProduct
        )
      )
    }

    return {
        productsList,
        handleAddProduct,
        handleUpdateProduct,
        handleDeleteProduct
    }
}
export default productRequests