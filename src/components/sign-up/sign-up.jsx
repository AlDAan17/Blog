import React from "react";
import './sign-up.scss';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Form, Input, Tooltip, Checkbox, Button } from "antd";
import {Link} from "react-router-dom";
// import { QuestionCircleOutlined } from "@ant-design/icons";

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

const SignUp = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Form
            {...formItemLayout}
            className="sign-up__form"
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <h2>Create new account</h2>
            <Form.Item
                name="Username"
                label="Username"
                className="sign-up__form__item"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                        whitespace: true
                    }
                ]}
            >
                <Input placeholder="Username" className="sign-up__input" />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                className="sign-up__form__item"
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
                <Input placeholder="E-mail" className="sign-up__input" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                className="sign-up__form__item"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!"
                    }
                ]}
                hasFeedback
            >
                <Input.Password placeholder="Password" className="sign-up__input" />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                className="sign-up__form__item"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!"
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(
                                "The two passwords that you entered do not match!"
                            );
                        }
                    })
                ]}
            >
                <Input.Password placeholder="Password" className="sign-up__input" />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                className="sign-up__form__item"
                rules={[
                    {
                        validator: (_, value) =>
                            value
                                ? Promise.resolve()
                                : Promise.reject("Should accept agreement")
                    }
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I agree to the processing of my personal information
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" block  htmlType="submit">
                    Register
                </Button>
                <p className="have-an-account">Already have an account? <Link to="/sign-in">Sign In.</Link></p>
            </Form.Item>
        </Form>
    );
};

export default SignUp;
