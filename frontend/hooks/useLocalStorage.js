import { useState } from 'react';

const useLocalStorage = () => {
    const [state, setState] = useState(()=> {
        if(localStorage.getItem(key)) {
            setState(JSON.parse(localStorage.getItem(key)));
        }

        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    const setStoredState = () => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return([state, setStoredState]);
} 

export default useLocalStorage;