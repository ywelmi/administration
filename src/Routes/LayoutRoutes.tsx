import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import routes from "./Route";

const LayoutRoutes = () => {
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