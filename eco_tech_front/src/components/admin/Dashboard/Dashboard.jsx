import "./Dashboard.css";
import { ListAllCategory } from "../ListAllCategory";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="container-dashboard">
      <div className="menu-dashboard">
        <h1>Tableau de bord</h1>
        <h3>Administrateur</h3>
        <Outlet />
        <h3>
          <Link to="user-management">Gestion des utilisateurs</Link>
        </h3>
        <h3>
          <Link to="product-list">Liste des produits</Link>
        </h3>
      </div>
      <div className="container">
        <div className="container-add">
          <form action="" className="form-content">
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="">-- Sélectionnez une catégorie --</option>
              <ListAllCategory />
            </select>
            <label htmlFor="nom">Nom :</label>
            <input type="text" />
            <label htmlFor="url">Lien de l'image :</label>
            <input type="text" />
            <label htmlFor="description">Description :</label>
            <input type="text" />
            <label htmlFor="price">Prix :</label>
            <input type="text" />

            <button>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
};
