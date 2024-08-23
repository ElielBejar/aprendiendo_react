import { useEffect } from "react";
import { useState } from "react";

export function useReloadFact(){
    const API_FACTS = 'https://catfact.ninja/fact';

    const [fact, setFact] = useState();

    useEffect(()=>{
        try{
          fetch(API_FACTS)
          .then(data => data.json())
          .then(response => setFact(response.fact));
        }catch(e){
            console.error(e);
        }
    },[]);

    const updateFact = ()=>{
        try{
            fetch(API_FACTS)
            .then(data => data.json())
            .then(response => setFact(response.fact));
          }catch(e){
              console.error(e);
          }
    }

    return {fact, updateFact}
}