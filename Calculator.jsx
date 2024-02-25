Import React, { useState } from ‘react’;
Import ‘./Calculator.css’;
Const Calculator = () => {
Const [display, setDisplay] = useState(‘’);
Const handleClick = (value) => {
If (value === ‘=’) {
Try {
setDisplay(eval(display).toString());
} catch (error) {
setDisplay(‘Error’);
}
} else if (value === ‘AC’) {
setDisplay(‘’);
} else {
setDisplay(display + value);
}
};
Return (
<div className=”calculator”>
<div className=”display”>{display}</div>
<button className = “key key_light”onClick={() =>
handleClick(‘AC’)}>AC</button>
<button className = “key key_light” onClick={() => handleClick(‘+/-
‘)}>+/-</button>
<button className = “key key_light”onClick={() =>
handleClick(‘%’)}>%</button>
<button className = “key”onClick={() =>handleClick(‘/’)}>/</button>
<button onClick={() => handleClick(‘7’)}>7</button>
<button onClick={() => handleClick(‘8’)}>8</button>
<button onClick={() => handleClick(‘9’)}>9</button>
<button className = “key”onClick={() =>handleClick(‘*’)}>*</button>
<button onClick={() =>handleClick(‘4’)}>4</button>
<button onClick={() => handleClick(‘5’)}>5</button>
<button onClick={() => handleClick(‘6’)}>6</button>
<button className = “key”onClick={() => handleClick(‘-‘)}>-</button>
<button onClick={() => handleClick(‘1’)}>1</button>
<button onClick={() => handleClick(‘2’)}>2</button>
<button onClick={() => handleClick(‘3’)}>3</button>
<button className = “key”onClick={() =>
handleClick(‘+’)}>+</button>
<button onClick={() => handleClick(‘0’)}>0</button>
<button onClick={() => handleClick(‘.’)}>.</button>
<button className = “key”onClick ={() =>
handleClick(‘=’)}>=</button>
</div>
);
};
Export default Calculator;