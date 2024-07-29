import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import Login from "../Component/Authentication/Login";
import { getUser } from "../shared/localStorage/user";

const RouterData = () => {
    const login = getUser();
    return (
        <BrowserRouter basename={"/"}>
            <Routes>
                {login ? (
                    <>
                        <Route path="/" element={<Navigate to={"/sport/list"} />} />
                    </>
                ) : null}
                <Route path={"/"} element={<PrivateRoute />}>
                    <Route path={`/*`} element={<LayoutRoutes />} />
                </Route>
                {/* {authRoutes.map(({ path, Component }, i) => ( */}
                {/*   <Route path={path} element={Component} key={i} /> */}
                {/* ))} */}
                {login ? null : <Route path={"/sign-in"} element={<Login />} />}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterData;
