import { ToastContainer } from "react-toastify";
import RouterData from "./Routes";
import "./index.css";
import "./i18n";

function App() {
  return (
    <>
      <RouterData />
      <ToastContainer />
    </>
  );
}

export default App;
