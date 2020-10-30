import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label,options, selected, onSelectedChange,text}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const [activeColor, setActiveColor] = useState('black');
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

    function changeOptions (option, value){
        onSelectedChange(option);
        setActiveColor(value);
    }
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key={option.value} className="item" onClick={() => changeOptions(option, option.value)}>{option.label}</div>
        );
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <div className={`ui ${activeColor} header container`}>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;