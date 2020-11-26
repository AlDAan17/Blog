import React, {useEffect} from "react";
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

const EditProfile = ({ asyncEditProfileWithDispatch, serverValidations, user, successEditing }) => {
    const [form] = Form.useForm();

    const onFinish = (dude) => {
        asyncEditProfileWithDispatch(user.token, dude.username, dude.email, dude.password, dude.avatar);
    };

    if (!Object.keys(user).length) {
        return <Redirect to='/' />;
    }

    if (successEditing) {
        return <Redirect to="/" />;
    }

    return (
        <Form
            {...formItemLayout}
            className="form"
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{
                username: user.username,
                email: user.email,
                avatar: user.image
            }}
        >
            {serverValidations && <Alert message={serverValidations} type="warning" showIcon style={{marginBottom:30}} />}
            <h2>Edit Profile</h2>
            <Form.Item
                name="username"
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
                        message: "Please enter correct email"
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
            <Form.Item
                name="avatar"
                label="Avatar"
                className="form__item"
                rules={[
                    {
                        type: "url",
                        message: "The input is not valid Url!"
                    }
                ]}
            >
                <Input placeholder="Avatar" className="form__input" />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" block  htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditProfile;
