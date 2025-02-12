import React from "react";
import s from './SearchBox.module.css'

const SearchBox = ({value, onChange}) => {
    return (
        <div className={s.wrapper}>
            <label className={s.label}>Find contacts by name
                <input className={s.input}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Search contacts"
                /></label>
        </div>
    );
};


export default SearchBox;