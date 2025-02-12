import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css'

const ContactForm = ({onAddContact}) => {

    const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters'),
    number: Yup.string()
      .required('Number is required')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format: XXX-XX-XX'),
    });
    

    return (
        <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onAddContact(newContact); 
        resetForm(); 
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <div>
            <label className={s.label} htmlFor="name">Name</label>
            <Field className={s.field} type="text" name="name" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label className={s.label} htmlFor="number">Number</label>
            <Field className={s.field} type="text" name="number" />
            <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>

    );
};

export default ContactForm;