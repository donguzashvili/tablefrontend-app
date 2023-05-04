import { CSSProperties } from "react";
import type { ColumnsType } from "antd/es/table";
import { dataType } from "../types/types";
import { Space } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import useStore from "../store/store";

const trashCanStyle: CSSProperties = {
  color: "red",
  cursor: "pointer",
  fontSize: 20,
};

const ColumnsComponent = (deleteData: (id: number) => void) => {
  const columns: ColumnsType<dataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
      render: (_, record) => (
        <Space size="small">
          <div>{record.address.city},</div>
          <div>{record.address.street}</div>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <DeleteFilled style={trashCanStyle} onClick={() => deleteData(record.id)} />,
    },
  ];
  return columns;
};

export default ColumnsComponent;
