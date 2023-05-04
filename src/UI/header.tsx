import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { Link } from "react-router-dom";
import HeaderWrapper from "./header.styled";

const CustomHeader: React.FC = () => {
  return (
    <Header>
      <HeaderWrapper>
        <Link to="/">
          <Button>Table</Button>
        </Link>
        <Link to="chart">
          <Button>Chart</Button>
        </Link>
      </HeaderWrapper>
    </Header>
  );
};

export default CustomHeader;
