import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import routes from "./Route";
import useGetUser from '../hook/useGetUser';

const LayoutRoutes = () => {
  useGetUser()
  return (
    <Routes>
      {routes.map(({ path, Component }, i) => (
        <Route element={<Layout />} key={i}>
          <Route path={path} element={Component}/>
        </Route>
      ))}
    </Routes>
  )
}

export default LayoutRoutes
