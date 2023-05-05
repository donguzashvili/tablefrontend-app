import { Routes, Route } from "react-router-dom";
import TableComponent from "../UI/table";
import ChartComponent from "../UI/chart";
import Error404 from "../UI/404";

const Routing = () => {
  return (
    <Routes>
      <Route key="home" path="/" element={<TableComponent />} />
      <Route key="chart" path="/chart" element={<ChartComponent />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
