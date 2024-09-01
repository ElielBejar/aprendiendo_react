import { useState, useEffect, useRef } from "react";
import { validate } from "../logics/searchValidations.js";

export function useSearch(){
    let [search, setSearch] = useState('');
    let [error, setError] = useState('');
    let isFirstValue = useRef(true);


    const changeHandler = (event)=>{
       let newSearch = event.target.value;
       setSearch(newSearch);
    }

    useEffect(()=>{

        if(isFirstValue.current){
            isFirstValue.current = search == '';
            return;
        }

        const errorMessage = validate(search);

        setError(errorMessage);

    },[search]);

    return [search, error, changeHandler]
}