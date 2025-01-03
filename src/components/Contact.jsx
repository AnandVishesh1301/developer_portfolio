import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { MotionConfig } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { useCallback } from "react";
import { Button, Form, Input, Radio, Space, notification, ConfigProvider } from "antd";


// template_jhl8hr7
// Outlook Service ID: service_9v4or09
// wAyEHrR3kWoLrKKj2

// const Contact = () => {
//   const formRef = useRef();
//   const recaptcha = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value })
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const recaptchaValue = recaptcha.current.getValue();
//     if (!recaptchaValue) {
//       alert('Please verify the reCAPTCHA!');
//       return;
//     }
//     setLoading(true);
//     emailjs.send("service_9v4or09",
//       "template_jhl8hr7",
//       {
//         from_name: form.name,
//         to_name: "Vishesh",
//         from_email: form.email,
//         to_email: 'anandvh@mail.uc.edu',
//         message: form.message,
//       },
//       "wAyEHrR3kWoLrKKj2"
//     )
//       .then(() => {
//         setLoading(false);
//         alert("Thanks for Reaching out, I will get back to you ASAP!");

//         setForm({
//           name: "",
//           email: "",
//           message: "",
//         })
//         recaptcha.current.reset();
//       }, (error) => {
//         setLoading(false);
//         console.log(error);
//         alert('Something went wrong')

//       })

//   }
//   return (
//     <div
//       className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
//     >
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-xl"
//       >
//         <p
//           className={styles.sectionSubText}
//         > Get in Touch</p>
//         <h3 className={styles.sectionHeadText}>Contact .</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label
//             className='flex flex-col'
//           >
//             <span className='text-white font-medium mb-4'> Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's Your Name"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary
//               text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label
//             className='flex flex-col'
//           >
//             <span className='text-white font-medium mb-4'> Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's Your Email"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary
//               text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label
//             className='flex flex-col'
//           >
//             <span className='text-white font-medium mb-4'> Your Message</span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What do you want to say?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary
//               text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <ReCAPTCHA ref = {recaptcha} sitekey={import.meta.env.VITE_REACT_APP_SITE_KEY} />
//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
//             shadow-md shadow-primary rounded-xl'
//           >
//             {loading ? 'Sending ...' : 'Send'}

//           </button>

//         </form>
//       </motion.div>
//       <motion.div
//         variants={slideIn('right', 'tween', 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />

//       </motion.div>
//     </div>
//   )
// }
///////////////////////// NEw GOOGLE CONTACT FORM/////////////////////////////

const Contact = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = useCallback(
    async ({ name, email, message }) => {
      try {
        const formData = new URLSearchParams({
          "entry.1262466261": name,
          "entry.2480071": email ?? "",
          "entry.1134665939": message,
        });
        await fetch(
          // "https://docs.google.com/forms/d/e/1FAIpQLSeGldmHcT9KmAcFc-61yhrvF8kqtqEHxsLQ7FDk3dIf7Iu2Bg/formResponse" +
          // new URLSearchParams({
          //   "entry.1262466261": name,
          //   "entry.2480071": email ?? "",
          //   "entry.1134665939": message,
          // }),
          "https://docs.google.com/forms/d/e/1FAIpQLSeGldmHcT9KmAcFc-61yhrvF8kqtqEHxsLQ7FDk3dIf7Iu2Bg/formResponse",

          {
            method: 'POST',
            body: formData,
            mode: "no-cors",
          }
        );
        api.success({
          message: "Submitted successfully",

        });
        console.log('Form Data:', { name, email, message }); //This prints the responses
        form.resetFields();
      } catch (e) {
        api.error({
          message: e.message,
        });
      }
    },
    [api, form]
  );
  const inputStyle = {
    width: '300px', // Set your desired width here
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const formStyle = {
    flex: 1,
  };

  const canvasStyle = {
    flex: 1,
    height: '100%',
  };

  return (
    <div>
      {contextHolder}
      <div style={containerStyle} >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-xl"
        >
          <p
            className={styles.sectionSubText}
          > Get in Touch</p>
          <h3 className={styles.sectionHeadText} >Contact .</h3>

          <Form
            form={form}
            layout="vertical"
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label={<span style={{ color: 'white' }}>Name</span>}
              rules={[{ required: true, message: "Name is required" }]}
              className='white-label font-medium mb-4'

            >
              <Input placeholder="What's Your Name" className='bg-tertiary py-4 px-6 placeholder:text-secondary
               text-black rounded-lg outline-none border-none font-medium' />
            </Form.Item>
            <Form.Item
              name="email"
              label={<span style={{ color: 'white' }}>Email </span>}
              rules={[{ required: true, message: "Email address is required" }]}
            >
              <Input placeholder="What's Your Email" className='bg-tertiary py-4 px-6 placeholder:text-secondary
               text-black rounded-lg outline-none border-none font-medium' />
            </Form.Item>
            <Form.Item
              name="message"
              label={<span style={{ color: 'white' }}>Message</span>}
              rules={[{ required: true, message: "Message is required" }]}
            >
              <Input placeholder="What's Your Message" className='bg-tertiary py-10 px-6 placeholder:text-secondary
               text-black rounded-lg outline-none border-none font-medium'  />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[950px] h-[750px]'
        >
          <EarthCanvas style={canvasStyle} />
        </motion.div>
      </div>
    </div>
  );
};

//export default SectionWrapper(CustomGoogleForms, 'CustomGoogleForms');
export default SectionWrapper(Contact, 'contact')