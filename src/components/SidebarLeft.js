import React from 'react';
import './SidebarLeft.css';
import {Link} from 'react-router-dom'

const SidebarLeft = ({countryData}) => (

        <nav>
            <ul>
                {countryData.map((data,i)=>
                     <li key={i}>
                        <Link to={`/${data.cca3}`}>
                            {data.countryName}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )

export default SidebarLeft;