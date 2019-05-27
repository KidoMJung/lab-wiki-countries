import React from 'react';
import './Content.css';
import countries from '../countries.json'
import { Link } from "react-router-dom";

const Content = (props) => {

    if(props.match.params.id){
        var countryData = countries.filter((country) => {
            return country.cca3 === props.match.params.id
        })[0];

        return (
        
            <article>
                <h1>{countryData.name.common}</h1> 
                <h1>{countryData.flag}</h1>
                <hr />
                <h2>Capital: {countryData.capital.join(",")}</h2>
                <hr />
                <h1>Area: {countryData.area} Km/2</h1>
                <hr />
                <h2>Borders:</h2>
                {(countryData.borders.length >= 1) ? countryData.borders.map((border, i) => {
    
                    let borderName = countries.filter((country) => {
                        return country.cca3 === border
                    })[0].name.common
    
                    return <li key={i}><Link to={`/${border}`}>{borderName}</Link></li>
                }) : "No Borders sorry ! Probably I'm an Island"}
    
            </article>
        );

    }else{
        return (
        
            <article>

                <h1>Click on a country to get Informations</h1> 
                
            </article>
        );
    }
    
    

    
}

export default Content;