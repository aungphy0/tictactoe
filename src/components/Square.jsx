import { useState } from 'react';

function Square({value, onSquareHandle}) {
    // const [value, setValue] = useState(null);

    // function handleClick(){
    //     setValue('X');
    // }

    return (
        <button 
            className="square"
            onClick={onSquareHandle}
        >
            {value}
        </button>
    );
}

export default Square;