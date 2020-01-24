import React from 'react';


class FetchData extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            flights: [],
            previous : []
        }
    }

    componentDidMount(){
        this.getData();
    }

    // http://127.0.0.1:8000/api/v1/flights

    getData() {
        fetch('https://backend-261116.appspot.com/plane/')
            .then(results => results.json())
            .then((responceJson) => this.setState({flights: responceJson.planes}))
            .then(res => console.log(this.state.flights))
            .catch(error => console.log(error))
    }

    render(){
        console.log(this.state.flights);
        return (
            <>
            <h2 className="text-center p-4">List of flights</h2>
            <div className="container">
                <ul>
                    {
                        this.state.flights.length > 0
                            ? this.state.flights.map(item => {
                                return(
                                    <div key={item.id}>
                                        <li className="list-group">
                                            <ul className="p-3">
                                                <li className="list-group-item"><h2>Name of flight - {item.name}</h2></li>
                                                <li className="list-group-item"><h4>Come from : {item.come_from}</h4></li>
                                                <li className="list-group-item"><h4>Come to : {item.come_to}</h4></li>
                                                <li className="list-group-item"><h4>Registration info : {item.registration_info}</h4></li>
                                                <li className="list-group-item"><p>Avia company is -  {item.avia_company}</p></li>
                                                <li className="list-group-item"><p>Speed - {item.speed}</p></li>
                                                <li className="list-group-item"><p>Flight distance - {item.flight_distance}</p></li>
                                            </ul>
                                        </li>
                                    </div>
                                )
                            })
                            : <p>No data</p>
                    }
                </ul>
            </div>
            </>
        );
    }
}

export default FetchData;