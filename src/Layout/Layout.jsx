import Navbar from "./Navbar/Navbar";
import SideBar from "./Sidebar/SideBar";

import { Routes, Route } from "react-router-dom";
import { routes } from "../Routes/Routes";

import ProductDetails from "../Pages/Product/ProductDetails";
import UpdateProduct from "../Pages/Product/UpdateProduct";

function Layout() {
  return (
    <>
      <SideBar />

      <div id="right-panel" class="right-panel">
        <Navbar />

        <div class="content">
          <div class="animated fadeIn">
            <Routes>
              {routes.map((el) =>
                el.data && el.data.length > 0 ? (
                  el.data.map((ele) => (
                    <Route path={ele.path} element={ele.component} />
                  ))
                ) : (
                  <Route path={el.path} element={el.component} />
                )
              )}
              <Route
                path={"product-details/:id"}
                element={<ProductDetails />}
              />
              <Route path={"update-product/:id"} element={<UpdateProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
