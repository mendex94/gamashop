import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Users from './Users';
import Fornecedores from './components/Fornecedores';
import Products from './components/ProductsUI';

const MyRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/usuarios" element={<Users />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/produtos" element={<Products />} />
        {/* Entregas */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;