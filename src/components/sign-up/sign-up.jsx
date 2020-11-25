import React, {useEffect} from "react";
import './sign-up.scss';
import "antd/dist/antd.css";
import {Form, Input, Checkbox, Button, Alert} from "antd";
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

const SignUp = ({ asyncRegistrationWithDispatch, serverValidations, beginningWithDispatch, user }) => {

    useEffect(() => {
        return beginningWithDispatch;
    }, []);

    const [form] = Form.useForm();

    const onFinish = ({Username, email, password}) => {
        asyncRegistrationWithDispatch(Username, email, password);
    };

    if (Object.keys(user).length) {
        return <Redirect to='/' />;
    }

    return (
        <Form
            {...formItemLayout}
            className="form"
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            {serverValidations && <Alert message={serverValidations} type="warning" showIcon style={{marginBottom:30}} />}
            <h2>Create new account</h2>
            <Form.Item
                name="Username"
                label="Username"
                className="form__item"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                        whitespace: true
                    }
                ]}
            >
                <Input placeholder="Username" className="form__input" />
            </Form.Item>

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
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (value.length < 6 || value.length > 16) {
                                return Promise.reject(
                                    "Your password needs to be at least 6 and shorter then 16 characters."
                                );
                            }
                            return Promise.resolve()
                        }
                    })
                ]}
                hasFeedback
            >
                <Input.Password placeholder="Password" className="form__input" />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                className="form__item"
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
                                "Passwords must match"
                            );
                        }
                    })
                ]}
            >
                <Input.Password placeholder="Password" className="form__input" />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                className="form__item"
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
