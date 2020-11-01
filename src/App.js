import React, {useState} from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import {Tab} from 'semantic-ui-react'
import Translate from "./components/Translate";

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
const options = [
    {
        label: 'The color black',
        value: 'black'
    },
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: "The color green",
        value: "green"
    },
    {
        label: "The color blue",
        value: "blue"
    },
    {
        label: 'The color orange',
        value: 'orange'
    },
    {
        label: 'The color brown',
        value: 'brown'
    },
    {
        label: 'The color purple',
        value: 'purple'
    }, {
        label: "The color pink",
        value: 'pink'
    },
    {
        label: "The color grey",
        value: 'grey'
    }
]
const text = "Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which\n" +
    "                    would have been pack hunters with complex body language. These sophisticated forms of social\n" +
    "                    cognition and communication may account for their trainability, playfulness, and ability to fit into\n" +
    "                    human households and social situations, and these attributes have given dogs a relationship with\n" +
    "                    humans that has enabled them to become one of the most successful species on the planet today.";
export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    const panes = [
        {
            menuItem: 'Accordion',
            render: () => <Tab.Pane attached={false}><Accordion items={items}/></Tab.Pane>,
        },
        {
            menuItem: 'SearchBar',
            render: () => <Tab.Pane attached={false}><Search/></Tab.Pane>,
        },
        {
            menuItem: 'DropdownBar',
            render: () => <Tab.Pane attached={false}>
                <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
                {
                    showDropdown ?
                        <Dropdown label="Select a color" options={options}
                                  selected={selected}
                                  onSelectedChange={setSelected}
                                  text={text}
                        />
                        : null
                }</Tab.Pane>,
        }, {
            menuItem: 'Translator',
            render: () => <Tab.Pane attached={false}><Translate/></Tab.Pane>
        }

    ]

    return (
        <div>
            <Tab menu={{pointing: true}} panes={panes}/>
        </div>
    );
};
