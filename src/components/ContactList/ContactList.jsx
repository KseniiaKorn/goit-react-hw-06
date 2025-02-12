import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css'


const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <div >
            <ul className={s.contactList}>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li className={s.contactItem} key={id}>
                <Contact
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ContactList;