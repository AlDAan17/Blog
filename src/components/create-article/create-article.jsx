import React from "react";
import "antd/dist/antd.css";
import "./create-article.scss"
import {Form, Input, Button, Alert} from "antd";
import {Link, Redirect} from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
  }
};

const EditProfile = ({ asyncAuthenticationWithDispatch, serverValidations, user }) => {

  const [form] = Form.useForm();

  const onFinish = ({email, password}) => {
    asyncAuthenticationWithDispatch(email, password);
  };

  if (!Object.keys(user).length) {
    return <Redirect to='/' />;
  }


  return (
      <Form
          {...formItemLayout}
          className="form form__create"
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
      >
        {serverValidations && <Alert message={serverValidations} type="warning" showIcon style={{marginBottom:30}} />}
        <h2>Edit Profile</h2>
        <Form.Item
            name="Title"
            label="Title"
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true
              }
            ]}
        >
          <Input placeholder="Title" className="form__input" />
        </Form.Item>
        <Form.Item
            name="Short description"
            label="Short description"
            className="form__item"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]}
        >
          <Input placeholder="Description" className="form__input" />
        </Form.Item>

          <Form.Item
              name="Text"
              label="Text"
              className="form__item"
          >
              <Input.TextArea placeholder="Text" className="form__input" />
          </Form.Item>

          <Button>Add tag</Button>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" block  htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
  );
};

export default EditProfile;
