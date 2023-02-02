//import react from 'react';
import React, { useDebugValue, useState } from 'react';
import PropTypes from 'prop-types';
//import { Contacto } from '../../models/contacto.js'
import { contacto } from '../../models/contacto.class';
//import { ON } from '../../models/levelsOn'




const ContactoComp = ({ contacto }) => {

    
    return (
        <div>
        <h1> 
            hola: {contacto.Nombre+ ' ' + contacto.Apellido }
        </h1>

        <h1> 
            su correo es: {contacto.Email}
        </h1>

        
        
        <h1> 
            su usuario esta: {contacto.Conectado ? 'EN Linea':'NO DISPONIBLE'}
        </h1>
        </div>
        
    )
}

/*handleClick() {
    this.setState({ showCart: true}) 
    console.log("button clicked")
}*/



ContactoComp.propTypes = {
    Contacto: PropTypes.instanceOf(contacto)
}

export default ContactoComp