import './Gestion.css'
import { FetchAllUsers } from './FetchAllUsers'

export const Gestion = () => {
    return (
            <div className="container-user">
                <h1>Gestion des utilisateurs</h1>
                <div className='user-content'>
                    <FetchAllUsers />
                </div>
            </div>
            
    )
}