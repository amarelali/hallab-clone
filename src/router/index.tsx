import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop">
          <Route index element={<Shop />} />
          <Route path="categories" element={<h2>Categories Product</h2>} />
        </Route>
      </Route>
    </>
  )
);
export default router;
