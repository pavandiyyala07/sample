import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
    return (
        <header className={classes.header}>
            <div >
                <NavLink to='/' className={classes.logo}>Great Quotes</NavLink>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' activeClassName={classes.active}>
                            Add a Quotes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;