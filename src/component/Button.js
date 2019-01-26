import React, { Component } from 'react';


const deleteItem = () => {
// console.log(deleteItem);

};

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={deleteItem}>Delete</button>
            </div>
        )
    }
}


export default Button