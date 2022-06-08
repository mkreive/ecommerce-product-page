import { NavLink } from 'react-router-dom';
import '../index.scss';
import React from 'react';

const Navigation = function () {
    return (
        <nav className='navigation'>
            <ul className='navigation__links'>
                <li>
                    <NavLink className='navigation__links-link' to='/collections'>
                        Collections
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? 'navigation__links-link active' : 'navigation__links-link '
                        }
                        to='/men'
                    >
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? 'navigation__links-link active' : 'navigation__links-link '
                        }
                        to='/women'
                    >
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? 'navigation__links-link active' : 'navigation__links-link '
                        }
                        to='/about'
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? 'navigation__links-link active' : 'navigation__links-link '
                        }
                        to='/contact'
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
