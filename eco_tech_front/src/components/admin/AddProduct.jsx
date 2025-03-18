import { ListAllCategory } from "./ListAllCategory";

export const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();


        const form = e.target;
        const formData = new FormData(form);

        const category = formData.get("category");
        const name = formData.get('nom');
        const url = formData.get('url');
        const description = formData.get('description');
        const price = formData.get('price');

        console.log({category, name, url, description, price});

        form.reset();

        const postProduct = async () => {
            try {
                const response = await fetch('http://localhost:3000/add', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        category: category,
                        name: name,
                        url: url,
                        description: description,
                        price: price
                    })
                });

                const data = await response.json();
                console.log(data)
            } catch (e){
                console.error('Impossible d\'ajouter un nouveau produit dans la db', e.message);
            }
        }
        postProduct();

    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form-content'>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category">
                                <option value="">-- Sélectionnez une catégorie --</option>
                                <ListAllCategory />
                            </select>
                            <label htmlFor="nom">Nom :</label>
                            <input name='nom' type="text" />
                            <label htmlFor="url">Lien de l'image :</label>
                            <input name='url' type="text" />
                            <label htmlFor="description">Description :</label>
                            <input name='description' type="text" />
                            <label htmlFor="price">Prix :</label>
                            <input name='price' type="text" />

                            <button>Ajouter</button>
                        
                    </form>
        </>
    )
};

