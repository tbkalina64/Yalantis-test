import React, {useState, useEffect} from 'react'
import config from './config';
import UsersListItem from './UsersListItem';
import UserData from './UserData';

import './UsersList.css';

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    
    useEffect(() => {
        fetch(config.userUrl)
            .then(res => res.json())
            .then(setUsers)
    }, [])

    return (
        <React.Fragment>
            <UserData  />

            <ul className="list-user">
                {users.map(user => (
                    <UsersListItem 
                        key={user.id} 
                        user={user}
                        months={months}/>    
                ))}
            </ul>     
        </React.Fragment>
    )
}

