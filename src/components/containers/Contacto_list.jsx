import { useState } from "react";
//import React from 'react';
//import { Contacto } from '../../models/contacto.js';
import { contacto } from '../../models/contacto.class';
import { ON } from '../../models/levelsOn'
//import { Task } from '../../models/task.class';
import ContactoComponet from '../pure/ComponenteB'




const ContactoListComponent = () => {

    const [Conect, setConnect] = useState(true);
    const defaultContact = new contacto('jean','hernandez','Correo@gmail',Conect)
    
    
    return (
        <div>
            <div>
                tu contacto
            </div>
            <ContactoComponet contacto={defaultContact}></ContactoComponet>
            <div>
            <div>presione el boton para cambiar a ON/OFF</div>
            <button
        type="button"
        onClick={() => setConnect(!Conect)}
        >ON/OFF</button>
    </div>
    <div>
    
    </div>
        </div>
    );
};

export default ContactoListComponent;
