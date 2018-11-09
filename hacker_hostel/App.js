import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            dates: [],
            names: []
        }
        
    }
    
    handleClick(dates, names){
        console.log(dates, names)
        this.setState({
            dates,
            names
        })
    }
    
    validate(){
        const { dates } =  this.state
        let start = null, end = null
        for(let i = 0; i < dates.length; i++){
            [start, end] = dates[i].split(' to ')
            if(new Date(end) - new Date(start) < 0){
                dates[i] = null
            }
        }
        return this.setState({
            dates: [...dates]
        })
    }

    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings onClick={this.handleClick}></Bookings>
                <Error></Error>
                <Meals></Meals>
            </div>
        </div>);
    }
}

export default App;