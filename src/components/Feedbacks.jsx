import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
<<<<<<< HEAD

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// templete id - template_z9918pp
// gamil sercide id - service_aef0zdb
// public key - qavNn36pkk3901_9c

const Feedbacks = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
=======
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Feedback = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    feedback: "",
>>>>>>> origin/master
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
<<<<<<< HEAD
        //mine thing pasted
        'service_aef0zdb',
        'template_z9918pp',
        {
          from_name: form.name,
          to_name: "Rishav Gupta",
          from_email: form.email,
          to_email: "rishavgupta933@gmail.com",
          message: form.message,
        },
        //mine thing
        'qavNn36pkk3901_9c'
=======
        'YOUR_EMAILJS_SERVICE_ID',
        'YOUR_EMAILJS_TEMPLATE_ID',
        {
          from_name: form.username,
          to_name: "Your Name", // Replace with the recipient's name or email
          message: form.feedback,
        },
        'YOUR_EMAILJS_USER_ID'
>>>>>>> origin/master
      )
      .then(
        () => {
          setLoading(false);
<<<<<<< HEAD
          alert("Thank you. I will definetly consider your valuble Feedback..!");

          setForm({
            name: "",
            email: "",
            message: "",
=======
          alert("Thank you for your feedback!");

          setForm({
            username: "",
            feedback: "",
>>>>>>> origin/master
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

<<<<<<< HEAD
          alert("Ahh, something went wrong. Please try again.");
=======
          alert("Oops, something went wrong. Please try again.");
>>>>>>> origin/master
        }
      );
  };

  return (
<<<<<<< HEAD
    <div
      className={`xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden`}
      id="contact"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Give your insights</p>
        <h3 className={styles.sectionHeadText}>Feedback.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12  flex flex-col gap-8'
        >
          <div className="flex flex-row gap-40">
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your E-mail?"
              className='bg-tertiary py-4 px-12 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Feedback</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What are your insights and suggetions?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

=======
    <div className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-6 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Leave Feedback</p>
        <h3 className={styles.sectionHeadText}>Feedback.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Username</span>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              placeholder='Enter your username'
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Feedback</span>
            <textarea
              rows={4} // Adjust the number of rows here to make it smaller
              name='feedback'
              value={form.feedback}
              onChange={handleChange}
              placeholder='Enter your feedback here'
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

>>>>>>> origin/master
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
<<<<<<< HEAD
            {loading ? "Sending..." : "Send"}
=======
            {loading ? "Sending..." : "Send Feedback"}
>>>>>>> origin/master
          </button>
        </form>
      </motion.div>

<<<<<<< HEAD
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedbacks");
=======
      {/* ... (right-side content, e.g., EarthCanvas) */}
    </div>
  );
};

export default Feedback;
>>>>>>> origin/master
