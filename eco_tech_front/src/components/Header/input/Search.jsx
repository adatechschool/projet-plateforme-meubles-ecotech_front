import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Search.css";

export default function Search() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [datas, setDatas] = useState([]);
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    if (inputText === "") {
      setDatas([]);
      return;
    }

    // Fonction qui permet de montrer un preview des résultats par rapport au texte dans la bar de recherche
    const timer = setTimeout(() => {
      //variable qui devient true si l'utilisateur n'a pas ecrit pendant 1 seconde
      setIsStable(true);

      // Fonction qui va chercher dans la base de donnée les résultats
      const loadSearch = async () => {
        try {
          const response = await fetch(`http://localhost:3000/search?q=${inputText}`);
          const data = await response.json();
          setDatas(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };
      loadSearch();
    }, 1000);

    // Dans le cas où la personne écrit ou supprime, on reset le timer et remet la variable isStable a false
    return () => {
      clearTimeout(timer);
      setIsStable(false);
    };
  }, [inputText]);

  // Fonction qui permet de récupérer le texte de la bar de recherche
  const inputHandler = (e) => {
    const newText = e.target.value.toLowerCase();
    setInputText(newText);

    // Si on a un text on renvoie sur l'url de recherche d'objet sinon sur la page de base
    if (newText !== "")
      navigate(`search?q=${newText}`, { replace: true });
    else
      navigate("", { replace: true });
  };

  // Fonction qui permet d'effacer les résultats de recherche et le texte de la bar de recherche
  const handleItemClick = () => {
    setInputText("");
    setDatas([]);
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
        {isStable && datas.length > 0 && (
          <div className="search-results">
            {datas.map((item) => (
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
            ))}
          </div>
        )}
      </div>
    </>
  );
}
