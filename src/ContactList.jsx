import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function ContactList() {
        const contacts = useLoaderData();
        console.log(contacts)
        return (
            <ul>
                {contacts?.length
                    ? contacts.map((contact) => {
                        let {
                            id:{value}, 
                            name:{first, last},} = contact;
                        return (<li key={value}>
                            <NavLink to={`/contacts/${value}`}>
                                {`${first} ${last}`}
                            </NavLink>
                        </li>
                        );
                })
            : null}
            </ul>
        );
}

export default ContactList
