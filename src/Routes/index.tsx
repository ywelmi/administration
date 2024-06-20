import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'
// import LayoutRoutes from './LayoutRoutes'
// import { authRoutes } from './AuthRoutes';
import Login from '../Component/Authentication/Login';

const RouterData = () => {
  const login = localStorage.getItem("login");
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {/* {login ? ( */}
        {/*   <> */}
        {/*     <Route */}
        {/*       path={`${import.meta.env.VITE_PUBLIC_URL}` || '/'} */}
        {/*       element={ */}
        {/*         <Navigate to={`${import.meta.env.VITE_PUBLIC_URL}/dashboard/default`} /> */}
        {/*       } */}
        {/*     /> */}
        {/*   </> */}
        {/* ) : ( */}
        {/*   "" */}
        {/* )} */}
        {/* <Route path={"/"} element={<PrivateRoute />}> */}
        {/*   <Route path={`/*`} element={<LayoutRoutes />} /> */}
        {/* </Route> */}
        {/* {authRoutes.map(({ path, Component }, i) => ( */}
        {/*   <Route path={path} element={Component} key={i} /> */}
        {/* ))} */}
        {/* {login ? null : */}
        <Route path={'/'} element={<Login />} />
        {/* } */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterData
