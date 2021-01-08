import React, {useState, useEffect }from 'react';
import { Select } from 'react-materialize';
import {fetchCountries} from '../../api';


const Picker =({handleCountryChange}) =>{
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    return( 
            <Select
                id="Select-9"
                multiple={false}
                onChange={(e)=> handleCountryChange(e.target.value)}
                options={{
                    classes: '',
                    dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                    }
                }}
                value=""
                >
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </Select>
    )
}
//onChange={(e)=> handleCountryChange(e.target.value)}
export default Picker;