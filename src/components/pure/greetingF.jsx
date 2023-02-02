//componente de clase
//import React, {userState} from 'react';
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    
    //breve introducción a useState
    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizamos el state
        setage(age + 1)
    }
    
    
    return (
        <div>
            <h1>
                    Hola { props.name } desde componente funcional !
                </h1>
                <h2>
                    tu edad es de: { age }
                </h2>

                <div>
                    <button onClick={ birthday }>
                        cumplir años
                    </button>
                </div>

        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
