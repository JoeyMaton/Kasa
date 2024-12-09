import React from "react";


function ErrorPage() {
    return (
        <div className="errorContainer">
            <p className="errorContainer__Number">404</p>
            <p className="errorContainer__Text">
             Oups! La page que vous demandez n'existe pas.
            </p>
        </div>
    );
}

export default ErrorPage