import React, {useState} from 'react'; // useState : import 구문을 통해 불러옴

const Counter = () => {
    const [value, setValue] = useState(0); // useState의 사용

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    );
};

export default Counter;