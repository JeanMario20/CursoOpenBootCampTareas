//creacion de componentes
//elemento html que se puede renderizar dentro del proyecto
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    //props = propiedades del html.
    constructor(props){
        super(props);
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name }
                </h1>
                <h2>
                    tu edad es de: { this.state.age }
                </h2>

                <div>
                    <button onClick={ this.birthday }>
                        cumplir años
                    </button>
                </div>  
            </div>
        );
    }

    

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }

}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;

