import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';

export default function UsersListItem({users, user, months}) {
    const { url } = useRouteMatch();

 return (
        <li>
            <Link to={`${url}/${user.id}`}>
                {user.firstName} {user.lastName}  
                <span style={{color: 'red'}} >

                {` ${new Date(user.dob).getMonth()} month`}

                </span>
            </Link>
        </li>
    )
}

