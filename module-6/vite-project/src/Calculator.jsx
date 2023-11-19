import React, { useState } from 'react';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('');
    
    const handleAppendToDisplay = (value) => {
        setDisplayValue(displayValue + value);
    };
    
    const handleClearDisplay = () => {
        setDisplayValue('');
    };
    
    const handleCalculate = () => {
        try {
            const value = displayValue;
            
            if (value.includes("+")) {
                const [num1, num2] = value.split("+");
                const endpoint = `/calculator/add/?num1=${num1}&num2=${num2}`;
                
                fetch(endpoint)
                    .then(res => res.json())
                    .then(json => {
                        const result = json.result;
                        setDisplayValue(result);
                    })
                    .catch(e => console.log(e));
            }
            
            if (value.includes("-")) {
                const [num1, num2] = value.split("-");
                const endpoint = `/calculator/subtract/?num1=${num1}&num2=${num2}`;
                
                fetch(endpoint)
                    .then(res => res.json())
                    .then(json => {
                        const result = json.result;
                        setDisplayValue(result);
                    })
                    .catch(e => console.log(e));
            }
            
            if (value.includes("/")) {
                const [num1, num2] = value.split("/");
                const endpoint = `/calculator/divide/?num1=${num1}&num2=${num2}`;
                
                fetch(endpoint)
                    .then(res => res.json())
                    .then(json => {
                        const result = json.result;
                        setDisplayValue(result);
                    })
                    .catch(e => console.log(e));
            }
            
            if (value.includes("*")) {
                const [num1, num2] = value.split("*");
                const endpoint = `/calculator/multiply/?num1=${num1}&num2=${num2}`;
                
                fetch(endpoint)
                    .then(res => res.json())
                    .then(json => {
                        const result = json.result;
                        setDisplayValue(result);
                    })
                    .catch(e => console.log(e));
            }
        } catch (error) {
            console.log(error);
            setDisplayValue("Error");
        }
    };
    
    return (
        <div className="calculator">
            <input type="text" id="display" value={displayValue} readOnly />
            <div className="buttons">
                <button onClick={() => handleAppendToDisplay('7')}>7</button>
                <button onClick={() => handleAppendToDisplay('8')}>8</button>
                <button onClick={() => handleAppendToDisplay('9')}>9</button>
                <button className="button-orange" onClick={() => handleAppendToDisplay('/')}>/</button>
                <button onClick={() => handleAppendToDisplay('4')}>4</button>
                <button onClick={() => handleAppendToDisplay('5')}>5</button>
                <button onClick={() => handleAppendToDisplay('6')}>6</button>
                <button className="button-orange" onClick={() => handleAppendToDisplay('*')}>/</button>
                <button onClick={() => handleAppendToDisplay('1')}>1</button>
                <button onClick={() => handleAppendToDisplay('2')}>2</button>
                <button onClick={() => handleAppendToDisplay('3')}>3</button>
                <button className="button-orange" onClick={() => handleAppendToDisplay('+')}>/</button>
                <button onClick={() => handleAppendToDisplay('0')}>0</button>
                <button className="button-orange" onClick={() => handleAppendToDisplay('C')}>/</button>
                {/* ... other buttons ... */}
                <button onClick={() => handleCalculate()}>=</button>
                <button onClick={() => handleAppendToDisplay('.')}>.</button>
            </div>
        </div>
    );
}

export default Calculator;

