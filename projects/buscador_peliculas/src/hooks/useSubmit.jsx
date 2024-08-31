import { useState } from "react";


export function useSubmit() {

    let [name, setName] = useState('flash');

    function submitHandler(event) {
        event.preventDefault();
        const form = new window.FormData(event.target);

        setName(form.get('movie_input'));
    }

    return [name, submitHandler];
}