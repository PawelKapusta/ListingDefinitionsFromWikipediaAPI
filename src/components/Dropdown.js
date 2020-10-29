import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);


    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>{option.label}</div>
        );
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Selected a color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <div className="ui container">
                    Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which
                    would have been pack hunters with complex body language. These sophisticated forms of social
                    cognition and communication may account for their trainability, playfulness, and ability to fit into
                    human households and social situations, and these attributes have given dogs a relationship with
                    humans that has enabled them to become one of the most successful species on the planet today.
                </div>
            </div>
        </div>
    );
}

export default Dropdown;