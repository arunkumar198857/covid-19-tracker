import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api'
import headerImage from './images/image.png'

import './styles/App.css'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render(){
        const {data, country} = this.state;

        return (
            <div className="main-container">
                <img src={headerImage} alt="corona" className="header-image"/>
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;