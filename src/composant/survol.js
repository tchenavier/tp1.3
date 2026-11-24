import React, {useState} from 'react';

const survol = ({couleur}) =>
{
    const [color, setColor] = useState(couleur);
    const changeColor = () => {
        const newColor = color == 'red' ? 'blue' : 'red';
        
        setColor(newColor);
    };

    return (
        <div>

        <div style={{color}}>
            Un composant
        </div>
        <button onClick={changeColor}>Changer quelque chose</button> // mouseover pour le survole onClick quand on click
        </div>
    );
};

export default survol;