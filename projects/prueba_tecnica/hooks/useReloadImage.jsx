import { useEffect } from "react";
import { useState } from "react";

import { getFirstWord } from "../logics/utils.js";

const API_IMAGES = 'https://cataas.com/cat/says/';

export function useReloadImage({fact}){

    const [imageUrl, setImageUrl] = useState();
    

    useEffect(()=>{

      const firstWord = getFirstWord(fact);
    
      setImageUrl(`${API_IMAGES}${firstWord}`);
    }, [fact]);

    return {imageUrl}
}