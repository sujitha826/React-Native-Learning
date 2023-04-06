import React from 'react';

export default function ES6Component() {

    // usage of var keyword - function scoped only
    // usage of let - block scoped
    // const - block scoped and doesn't allow reassignment
    function sayHello() {
        for (var i = 0; i< 5; i++) {
            console.log(i)
        }
        for (let i = 0; i< 5; i++) {
            console.log(i)
        }
        const j = 9;
    }


    return (
        <div>
            Sample program to understand ES6 features
        </div>
    );
}
