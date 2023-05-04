import { Routes, Route } from "react-router-dom";
import TableComponent from "../UI/table";
import ChartComponent from "../UI/chart";

const Routing = () => {
  return (
    <Routes>
      <Route key="home" path="/" element={<TableComponent />} />
      <Route key="chart" path="/chart" element={<ChartComponent />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default Routing;
