import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Search.css";

export default function Search() {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");
    const [datas, setDatas] = useState([]);
    const [isStable, setIsStable] = useState(false);
    const [noResults, setNoResults] = useState(false); // Variable pour vérifier si aucun résultat n'est trouvé

    useEffect(() => {
        if (inputText === "") {
            setDatas([]); // Supprime les résultats si la barre de recherche est vide
            setNoResults(false); // Réinitialise la variable noResults
            return;
        }

        // Fonction qui permet de montrer un preview des résultats par rapport au texte dans la bar de recherche
        const timer = setTimeout(() => {
            // Variable qui devient true si l'utilisateur n'a pas écrit pendant 1 seconde
            setIsStable(true);

            // Fonction qui va chercher dans la base de données les résultats
            const loadSearch = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/search?q=${inputText}`);
                    const data = await response.json();

                    // Vérifie si aucun résultat n'a été trouvé
                    if (data.length === 0) {
                        setNoResults(true); // Affiche "No results found"
                        setDatas([]);
                    } else {
                        setNoResults(false); // Cache "No results found"
                        setDatas(data);
                    }
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
            };
            loadSearch();
        }, 1000);

        // Dans le cas où la personne écrit ou supprime, on reset le timer et remet la variable isStable à false
        return () => {
            clearTimeout(timer);
            setIsStable(false);
        };
    }, [inputText]);

    // Fonction qui permet de récupérer le texte de la bar de recherche
    const inputHandler = (e) => {
        const newText = e.target.value.toLowerCase();
        setInputText(newText);

        // Si on a un texte on renvoie sur l'url de recherche d'objet sinon sur la page de base
        if (newText !== "")
            navigate(`search?q=${newText}`, { replace: true });
        else
            navigate("", { replace: true });
    };

    // Fonction qui permet d'effacer les résultats de recherche et le texte de la barre de recherche
    const handleItemClick = () => {
        setInputText(""); // Vide la barre de recherche
        setDatas([]); // Vide les résultats de recherche
        setNoResults(false); // Réinitialise la variable noResults
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Recherche"
                    value={inputText}
                    onChange={inputHandler}
                    className="search-input"
                />
                {isStable && (
                    <div className="search-results">
                        {noResults ? ( 
                            // Carte affichant "No results found" si aucun résultat n'est trouvé
                            <div className="no-results-card">
                                <p>No results found</p>
                            </div>
                        ) : (
                            // Affiche les résultats de recherche si disponibles
                            datas.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/product/${item.id}`}
                                    className="search-result-item"
                                    onClick={handleItemClick}
                                >
                                    <img src={item.img} alt={item.title} className="product-image" />
                                    <div className="product-details">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <span className="price">${item.price}</span>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
