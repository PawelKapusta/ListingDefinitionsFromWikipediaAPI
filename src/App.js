import React, {useState} from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { Tab } from 'semantic-ui-react'

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
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    const panes = [
        {
            menuItem: 'Acceleration',
            render: () => <Tab.Pane attached={false}><Accordion items={items}/></Tab.Pane>,
        },
        {
            menuItem: 'SearchBar',
            render: () => <Tab.Pane attached={false}><Search/></Tab.Pane>,
        },
        {
            menuItem: 'DropdownBar',
            render: () => <Tab.Pane attached={false}><button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
                {
                    showDropdown ?
                        <Dropdown options={options}
                                  selected={selected}
                                  onSelectedChange={setSelected}
                        />
                        : null
                }</Tab.Pane>,
        },{
        menuItem: 'Translator',
            render: () => <Tab.Pane attached={false}></Tab.Pane>
        }

    ]

    return (
        <div>
            <Tab menu={{ pointing: true }} panes={panes} />
        </div>
    );
};
