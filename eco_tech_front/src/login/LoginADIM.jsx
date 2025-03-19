import { useState, useEffect } from "react";

function TestAdmin() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const url = formData.get("url");
        const category = formData.get("category");
        const prix = formData.get("prix");
        const titre = formData.get("titre");

        console.log({url, category, prix, titre});
        form.reset();
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input name="url" type="url" id="url" placeholder="url"/>
            <input name="category" type="category" id="category" placeholder="category"/>
            <input name="prix" type="prix" id="prix" placeholder="prix"/>
            <input name="titre" type="titre" id="titre" placeholder="titre"/>
            <button type="submit">Enregistrer</button>
            </form>
        </>
    )
}

export default TestAdmin