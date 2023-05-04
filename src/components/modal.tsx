import { Modal, Form, Input, Select, Button, Col } from "antd";
import { formType, modalPropType } from "../types/types";
import ModalWrapper from "./modal.styled";
import { useForm } from "antd/es/form/Form";
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    phone: "${label} is not a valid phone number!",
  },
};

/* eslint-enable no-template-curly-in-string */

const CustomModal = ({ open, onCancel, onSubmit, initialValues }: modalPropType) => {
  const [form] = useForm();

  const submitForm = (values: formType) => {
    onSubmit(values);
    form.resetFields();
  };

  const cancelForm = () => {
    onCancel();
    form.resetFields();
  };

  return (
    <Modal key={initialValues?.id || Math.random() * 9999} footer={null} title={`${initialValues ? "Edit" : "Add"} Data`} open={open} onCancel={cancelForm}>
      <ModalWrapper>
        <Form onFinish={submitForm} name={`${initialValues ? "Edit" : "Add"} Data`} {...layout} autoComplete="off" validateMessages={validateMessages} initialValues={initialValues}>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>

          <Form.Item labelAlign="left" label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item labelAlign="left" label="Email" name="email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>

          <Form.Item labelAlign="left" label="Phone" name="phone" rules={[{ required: true, pattern: /^\+1 \([0-9]{3}\) [0-9]{3}\-[0-9]{4}$/, message: "Phone number pattern: +1 (XXX) XXX-XXXX" }]}>
            <Input />
          </Form.Item>

          <Form.Item labelAlign="left" label="Gender" name="gender" rules={[{ required: true, message: "Please select gender!" }]}>
            <Select placeholder="Please select gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item labelAlign="left" label="City" name="city" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item labelAlign="left" label="Street" name="street" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item noStyle>
            <Col className="buttonWrapper">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={onCancel}>Cancel</Button>
            </Col>
          </Form.Item>
        </Form>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
