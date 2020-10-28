import React from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        description: 'React is the most popular front-end JavaScript library in the field of web development.'
    },
    {
        title: 'Why React?',
        description: 'React’s popularity today has eclipsed that of all other front-end development frameworks.'
    },
    {
        title: 'Virtual DOM',
        description: 'React keeps a lightweight representation of the “real” DOM in the memory, and that is known as the “virtual” DOM (VDOM).'
    }
];


export default () => {
    return (
        <div>
            <Search/>
        </div>
    );
};
