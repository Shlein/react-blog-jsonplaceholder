import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTE_BIO_PAGE, ROUTE_POSTS_PAGE, ROUTE_USER_PAGE} from "./constants/routes";
import PostListPage from "./pages/PostListPage/PostListPage";
import BioPage from "./pages/BioPage/BioPage";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout />} >
                    <Route index element={<PostListPage />} />
                    <Route path={ROUTE_BIO_PAGE} element={<BioPage />} />
                    <Route path={ROUTE_USER_PAGE + "/:userId"} element={<UserPage />} />
                    <Route path={"*"} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
