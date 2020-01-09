import React from 'react'
import {Route, useRouteMatch} from 'react-router-dom';
import UsersList from './UsersList';

export default function Users() {
    const { url } = useRouteMatch();

    return (
        <div className="list">
            <h2>Users List</h2>
            
                <Route path={`${url}`} render={() => {
                    return <UsersList />
                }} />
                
        </div>
    )
}
