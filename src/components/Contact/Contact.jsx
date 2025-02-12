import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import s from './Contact.module.css'

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <>
            <div className={s.contact}>
                <p className={s.info}><BsFillPersonFill />{name} </p>
                <p className={s.info}><BsFillTelephoneFill /> {number}</p>
                
            </div>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </>
    );
};

export default Contact;