import { useRouteError } from "react-router-dom";
import Header from "./layouts/header/Header";
import '../css/ErrorPage.scss';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="main">
            <Header />
            <div className="error-content">
                <div className="error-content__status">
                    404
                </div>
                <p className="error-content__desc">Oups! La page que vous demandez n'existe pas.</p>
                <a href="/" className="error-content__redirect">Retourner sur la page d’accueil</a>
            </div>
        </div>
    );
}