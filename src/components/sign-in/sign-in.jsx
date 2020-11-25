import React from "react";
import './sign-in.scss';
import "antd/dist/antd.css";
import { Form, Input, Checkbox, Button } from "antd";
import {Link} from "react-router-dom";

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

const SignIn = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Form
            {...formItemLayout}
            className="form"
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <h2>Sign in</h2>
            <Form.Item
                name="email"
                label="E-mail"
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
                <Input placeholder="E-mail" className="form__input" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                className="form__item"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!"
                    }
                ]}
                hasFeedback
            >
                <Input.Password placeholder="Password" className="form__input" />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" block  htmlType="submit">
                    Register
                </Button>
                <p className="have-an-account">Don’t have an account? <Link to="/sign-up">Sign Up.</Link></p>
            </Form.Item>
        </Form>
    );
};

export default SignIn;
