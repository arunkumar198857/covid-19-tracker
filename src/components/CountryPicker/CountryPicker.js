import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'
import './CountryPicker.css'

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    return(
        <FormControl className="formcontrol-container">
            <NativeSelect default="" id="select-menu"onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, idx) => <option key={idx}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;