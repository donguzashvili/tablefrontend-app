import { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import useStore from "../store/store";
import ColumnContainer from "../components/columns";
import TableWrapper from "./table.styled";
import CustomModal from "../components/modal";
import { dataType, formType } from "../types/types";
import { capitalizeWords } from "../helpers/helpers";
import Loading from "../components/loading";

const TableComponent: React.FC = () => {
  const { data, addData, fillData, deleteData, loading } = useStore();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editRow, setEditRow] = useState<formType | undefined>(undefined);

  useEffect(() => {
    fillData();
  }, []);

  const handleData = (values: formType) => {
    const { id, city, email, gender, name, phone, street } = values;
    const dataForServer = {
      id: id || 0,
      email,
      gender,
      name: capitalizeWords(name),
      phone,
      address: { city: capitalizeWords(city), street: capitalizeWords(street) },
    };
    addData(dataForServer);
    setEditRow(undefined);
    setOpenModal(false);
  };

  const handleRow = (record: dataType) => {
    return {
      onDoubleClick: () => {
        const { id, email, address, gender, name, phone } = record;
        const newObj = {
          id,
          email,
          gender,
          name,
          phone,
          city: address.city,
          street: address.street,
        };
        setEditRow(newObj);
      },
    };
  };

  const showModal = () => {
    setEditRow(undefined);
    setOpenModal(true);
  };

  const closeModal = () => {
    setEditRow(undefined);
    setOpenModal(false);
  };

  if (loading) return <Loading />;

  return (
    <TableWrapper>
      <Space style={{ marginBottom: "20px" }}>
        <Button onClick={showModal}>Add Data</Button>
      </Space>
      <Table rowKey={({ id }) => id} bordered columns={ColumnContainer(deleteData)} dataSource={data} onRow={handleRow} />
      <CustomModal open={openModal || !!editRow} onCancel={closeModal} onSubmit={handleData} initialValues={editRow} />
    </TableWrapper>
  );
};

export default TableComponent;
