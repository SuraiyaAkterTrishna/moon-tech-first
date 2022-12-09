import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ProductProvider from './context/ProductProvider';

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;