import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './create-article.scss';
import { Form, Input, Button, Alert } from 'antd';
import { Link, Redirect } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const EditProfile = ({ asyncCreateArticleWithDispatch, resetWithDispatch, user, successCreating, errorCreating, mission, article, asyncEditArticleWithDispatch, successEditing }) => {
  const {slug} = article;

  useEffect(() => {
    return resetWithDispatch;
  }, [resetWithDispatch]);

  const [form] = Form.useForm();

  const onFinish = ({ title, shortDescription, text, tagList }) => {
    mission === 'edit' ? asyncEditArticleWithDispatch(user.token, title, shortDescription, text, tagList, slug)
      :
    asyncCreateArticleWithDispatch(user.token, title, shortDescription, text, tagList);
  };

  if (!Object.keys(user).length) {
    return <Redirect to="/sign-in"/>;
  }

  if (successCreating || successEditing) {
    return <Redirect to="/"/>;
  }

  const head = mission === "edit" ? 'Edit Article' : 'Create new article';

  const initialValues = mission === 'edit'? {
    title: article.title,
    shortDescription: article.description,
    text: article.body,
    tagList:article.tagList,
  } : null;

  return (
    <Form
      {...formItemLayout}
      className="form form__create"
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      initialValues={initialValues}
    >
      {errorCreating && <Alert message={errorCreating} type="warning" showIcon style={{ marginBottom: 30 }}/>}
      <h2>{head}</h2>
      <Form.Item
        name="title"
        label="Title"
        className="form__item"
        rules={[
          {
            required: true,
            message: 'Please input title',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Title" className="form__input"/>
      </Form.Item>

      <Form.Item
        name="shortDescription"
        label="Short description"
        className="form__item"
        rules={[
          {
            required: true,
            message: 'Please input short description',
          },
        ]}
      >
        <Input placeholder="Description" className="form__input"/>
      </Form.Item>

      <Form.Item
        name="text"
        label="Text"
        className="form__item"
        rules={[
          {
            required: true,
            message: 'Please enter text article',
          },
        ]}
      >
        <Input.TextArea placeholder="Text" className="form__input" style={{ height: 168 }}/>
      </Form.Item>

      <Form.List name="tagList">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (

              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                required={false}
                key={field.key}
                className="form__row"
              >
                <Form.Item
                  style={{ marginLeft: 0}}
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please input tag or delete this field.',
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="Tag" className="input__tag"/>
                </Form.Item>

                <Button
                  className="btn__tag btn__tag-del"
                  type="danger" ghost
                  onClick={() => remove(field.name)}
                >Delete</Button>
                <Button
                  className="btn__tag btn__tag-add"
                  type="primary" ghost
                  onClick={() => add()}
                >Add Tag</Button>

              </Form.Item>
            ))}

            {(fields.length === 0) ? <Form.Item style={{textAlign: 'left'}}>
              <Button
                type="primary" ghost
                className="btn__tag btn__tag-add"
                onClick={() => add()}
              >
                Add tag
              </Button>
              <Form.ErrorList errors={errors}/>
            </Form.Item> : null}
          </>
        )}
      </Form.List>

      <Form.Item {...tailFormItemLayout} style={{textAlign:'left'}}>
        <Button type="primary"
                className="btn__save"
                block
                htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProfile;
