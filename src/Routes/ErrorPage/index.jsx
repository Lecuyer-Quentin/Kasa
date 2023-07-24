import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
            <div className="error-page">
                <h1>404</h1>
                <p>Oups! La page que <br/> vous demandez n'existe pas.</p>
                <NavLink to="/">Retourner sur la page d'accueil</NavLink>
            </div>
    )
}