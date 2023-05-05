import styled from "styled-components";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .ant-result-title {
    color: #ffffff;
  }

  .ant-result-subtitle {
    color: #ffffff;
  }
`;

const Error404 = () => {
  return (
    <ErrorWrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </ErrorWrapper>
  );
};

export default Error404;
