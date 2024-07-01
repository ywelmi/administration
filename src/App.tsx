import { ToastContainer } from "react-toastify";
import RouterData from "./Routes";
import "./index.css";
import "./i18n";
import "./utils/overwrite";

function App() {
  return (
    <>
      <RouterData />
      <ToastContainer />
    </>
  );
}

export default App;
