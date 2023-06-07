import { useState } from 'react';

const useLocalStorage = () => {
    const [state, setState] = useState(()=> {
        if(localStorage.getItem(key)) {
            setState(JSON.parse(localStorage.getItem(key)));
        }

        localStorage.setItem9key(JSON.stringify(initialValue));
        return initialValue;
    });

} 

export default useLocalStorage;