import React, {useState} from 'react';
import Input from "./Input";
import * as axios from 'axios';

const Login = props => {
    const [state, setState] = useState({
        name: '',
        come_from: '',
        come_to: '',
        avia_company: '',
        speed: '',
        registration_info: '',
        flight_distance: ''
    });

    const handleNameChange = event => {
        const currentValue = event.target.value;
        //const emailValid = props.validateValue(currentValue, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        setState(prevState => ({
            ...prevState, name: currentValue
        }));
    };

    const handleComeFromChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        setState(prevState => ({
            ...prevState, come_from: currentValue
        }))
    };

    const handleComeToChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        setState(prevState => ({
            ...prevState, come_to: currentValue
        }))
    };

    const handleAviaCompanyChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        setState(prevState => ({
            ...prevState, avia_company: currentValue
        }))
    };

    const handleSpeedChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        setState(prevState => ({
            ...prevState, speed: currentValue
        }))
    };

    const handleRegistrationInfoChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        setState(prevState => ({
            ...prevState, registration_info: currentValue
        }))
    };

    const handleFlightDistanceChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        setState(prevState => ({
            ...prevState, flight_distance: currentValue
        }))
    };


    const handleSendData = event => {
        event.preventDefault();
        console.log(state);
        axios({ method: 'post',
                url: "https://backend-261116.appspot.com/plane/",
                // withCredentials: true,
            // name: '',
            // come_from: '',
            // come_to: '',
            // avia_company: '',
            // speed: '',
            // registration_info: '',
            // flight_distance: ''
                data: {name: state.name,
                    come_from: state.come_from,
                    come_to: state.come_to,
                    avia_company: state.avia_company,
                    speed: state.speed,
                    registration_info: state.registration_info,
                    flight_distance: state.flight_distance}
        })
            .then(response => console.log(response))
    };

    return (
        <div>
            <h2 className="text-center">Data form</h2>
            <form className="container" onSubmit={handleSendData}>
                <Input
                    className="form-group"
                    value={state.name}
                    placeholder={'Enter name of flight'}
                    handleChange={handleNameChange}
                    />

                <Input
                    className="form-group"
                    value={state.come_from}
                    placeholder={'Come from '}
                    handleChange={handleComeFromChange}
                    />

                <Input
                    className="form-group"
                    value={state.come_to}
                    placeholder={'Come to '}
                    handleChange={handleComeToChange}
                    />

                <Input
                    className="form-group"
                    value={state.avia_company}
                    placeholder={'Avia company'}
                    handleChange={handleAviaCompanyChange}
                />

                <Input
                    className="form-group"
                    value={state.speed}
                    placeholder={'Speed'}
                    handleChange={handleSpeedChange}
                />

                <Input
                    className="form-group"
                    value={state.registration_info}
                    placeholder={'Registration Info'}
                    handleChange={handleRegistrationInfoChange}
                />

                <Input
                    className="form-group"
                    value={state.flight_distance}
                    placeholder={'Flight distance'}
                    handleChange={handleFlightDistanceChange}
                />


                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}


export default Login;
