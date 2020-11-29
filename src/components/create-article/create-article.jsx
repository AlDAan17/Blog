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

const EditProfile = ({ asyncCreateArticleWithDispatch, resetWithDispatch, user, successCreating, errorCreating }) => {

  useEffect(() => {
    return resetWithDispatch;
  }, [resetWithDispatch]);

  const [form] = Form.useForm();

  const onFinish = ({ title, shortDescription, text, tagList }) => {
    asyncCreateArticleWithDispatch(user.token, title, shortDescription, text, tagList);
  };

  if (!Object.keys(user).length) {
    return <Redirect to="/sign-in"/>;
  }

  if (successCreating) {
    return <Redirect to="/"/>;
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
      {errorCreating && <Alert message={errorCreating} type="warning" showIcon style={{ marginBottom: 30 }}/>}
      <h2>Create new article</h2>
      <Form.Item
        // validateTrigger={['onChange', 'onBlur']}
        name="title"
        label="Title"
        className="form__item"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
            message: 'Please input short description!',
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
            message: 'Please enter your text article',
          },
        ]}
      >
        <Input.TextArea placeholder="Text" className="form__input" style={{ height: 168 }}/>
      </Form.Item>
      <Form.List name="tagList">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              // const test = () =>{
            // }
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please input passenger\'s name or delete this field.',
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="passenger name" style={{ width: '60%' }}/>
                </Form.Item>
                <>
                  <Button
                    className="btn__tag btn__tag-del"
                    type="danger" ghost
                    onClick={() => remove(field.name)}
                  >Delete</Button>
                  <Button
                    className="btn__tag"
                    type="primary" ghost
                    onClick={() => add()}
                  >Add Tag</Button>
                </>
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
              >
                Add tag
              </Button>
              <Form.ErrorList errors={errors}/>
            </Form.Item>
          </>
        )}
      </Form.List>


      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" block htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

// const EditProfile = () => {
//   const onFinish = values => {
//     console.log('Received values of form:', values);
//   };

//   return (
//     <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
//       <Form.List name="names">
//         {(fields, { add, remove }, { errors }) => (
//           <>
//             {fields.map((field, index) => (
//               <Form.Item
//                 {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
//                 label={index === 0 ? 'Passengers' : ''}
//                 required={false}
//                 key={field.key}
//               >
//                 <Form.Item
//                   {...field}
//                   validateTrigger={['onChange', 'onBlur']}
//                   rules={[
//                     {
//                       required: true,
//                       whitespace: true,
//                       message: "Please input passenger's name or delete this field.",
//                     },
//                   ]}
//                   noStyle
//                 >
//                   <Input placeholder="passenger name" style={{ width: '60%' }} />
//                 </Form.Item>
//                   <>
//                   <Button
//                     className="btn__tag btn__tag-del"
//                     type="danger" ghost
//                     onClick={() => remove(field.name)}
//                   >Delete</Button>
//                   <Button
//                     className="btn__tag"
//                     type="primary" ghost
//                     onClick={() => add()}
//                   >Add Tag</Button>
//                   </>
//               </Form.Item>
//             ))}
//             <Form.Item>
//               <Button
//                 type="dashed"
//                 onClick={() => add()}
//                 style={{ width: '60%' }}
//               >
//                 Add tag
//               </Button>
//               <Form.ErrorList errors={errors} />
//             </Form.Item>
//           </>
//         )}
//       </Form.List>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Send
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

export default EditProfile;
