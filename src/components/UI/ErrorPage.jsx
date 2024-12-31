import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()


    return (
        <div>
            <h1>We got error</h1>
            {error && <p>{error.data}</p>}
            <NavLink to='/'>
                <button> Go Back </button>
            </NavLink>
        </div>
    )
}

export default ErrorPage
