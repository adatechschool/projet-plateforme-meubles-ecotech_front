import './Dashboard.css'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AddProduct } from '../AddProduct/AddProduct';

export const Dashboard = () => {
    const location = useLocation();

    const hideAddProductRoutes = ['/admin/gestion', '/admin/product-list']

    return (
        <div className="container-dashboard">
            <div className='menu-dashboard'>
                <h1>Tableau de bord</h1>
                <h3>Administrateur</h3>
                <h3><Link to="gestion">Gestion des utilisateurs</Link></h3>
                <h3><Link to="product-list">Liste des produits</Link></h3>
            </div>
            <div className='container'>
            <Outlet />
            {!hideAddProductRoutes.includes(location.pathname) && (
                    <div className="container-add">
                        <AddProduct />
                    </div>
                )}
            </div>
        </div>
    )
}