import { ToastContainer } from "react-toastify";
import CustomHeader from "./UI/header";
import Routing from "./routing/routing";

function App() {
  return (
    <>
      <CustomHeader />
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
