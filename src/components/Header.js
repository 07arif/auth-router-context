import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('context', user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.error(error) })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>RFCD</Link>
                </div>
                <div className="flex-none">
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                    {/* <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link> */}
                    <Link className="btn btn-ghost normal-case text-xl" to='/about'>About</Link>
                    {
                        user?.email ?
                            ' '
                            :
                            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    }
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>




                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.email && <span> <img src={user.photoURL} alt='' /></span>}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    {user?.email && <span>{user.displayName
                                    } </span>}
                                </Link>
                            </li>
                            <li>{user?.email && <span>{user.email} </span>}</li>
                            <button onClick={handleSignOut} className="btn btn-primary btn-block">LogOut</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;