import { Alert, Space, Spin } from "antd";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;

  div span i {
    background-color: rgba(0, 0, 0, 0.88) !important;
  }
  div .ant-spin-text {
    color: rgba(0, 0, 0, 0.88) !important;
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Space direction="vertical">
        <Spin size="large" tip="Loading..."></Spin>
      </Space>
    </LoadingWrapper>
  );
};

export default Loading;
