import productModal from '../hooks/ProductsHooks/productModal'
import productRequests from '../hooks/ProductsHooks/productRequests'
import AddProductsModal from './ProductsModal/AddProductsModal'
import EditProductsModal from './ProductsModal/EditProductsModal'
import UserNavbar from '../Navbar'
import ProductsTable from './ProductsTable'


function App(): JSX.Element {
  const {
    productsList,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct
  } = productRequests()

  const {
    addProductModal,
    handleOpenAddProductModal,
    handleCloseAddProductModal,
    editProductModal,
    handleOpenEditProductModal,
    handleCloseEditProductModal
  }  = productModal()

  return (
    <div className="App">
      <UserNavbar />
      <ProductsTable
        products={productsList}
        onClick={handleOpenAddProductModal}
        onClickEdit={handleOpenEditProductModal}
        onDelete={handleDeleteProduct}
      />
      <AddProductsModal
        show={addProductModal}
        addProduct={handleAddProduct}
        onHide={handleCloseAddProductModal}
      />
      <EditProductsModal
        show={editProductModal}
        updateProduct={handleUpdateProduct}
        onHide={handleCloseEditProductModal}
      />
    </div>
  )
}

export default App
