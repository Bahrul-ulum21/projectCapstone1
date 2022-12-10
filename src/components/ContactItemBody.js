import React from 'react';

function ContactItemBody({ name, tag }) {
 return (
   <div className="contact-item__body">
    <p className="contact-item__username">@{tag}</p>
    <p className="contact-item__title">{name}</p>
   </div>
 );
}

export default ContactItemBody;