import './App.css';
import {Component} from "react";
import React from 'react'
import HelloWorld from "./components/FirstComponent";

class App extends Component {

    state = {
        cars: [
            {name: 'Audi', year: 2014},
            {name: 'Mers', year: 2018},
            {name: 'Shkoda', year: 2022}
        ],
        pageTitle: 'React Components',
        showCars: false,
    }

    changeTitleHandler = (newTitle) => {
        console.info('render')
        this.setState({
            pageTitle: newTitle
        })
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    // handleInput = (event) => {
    //     console.info('Changed', event.target.value)
    //     this.setState({
    //         pageTitle: event.target.value
    //     })
    // }

    render() {
        const divStyle = {
            textAlign: 'center',
        }

        let cars = null

        // 2, способ отрисовки по условию
        if(this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <HelloWorld
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                    />
                )
            })
        }


        return (
            <div className="App" style={divStyle}>
                <h1 style={{color: 'blue', fontSize: '20px'}}>{this.state.pageTitle}</h1>
                {/*<input type="text" onChange={this.handleInput} />*/}
                <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
                <button onClick={this.toggleCarsHandler} style={{marginLeft: '10em'}}>Toogle cars</button>
                { cars }
                {/*1 способ отрисовки по условию */}
                {/*{   this.state.showCars*/}
                {/*    ? this.state.cars.map((car, index) => {*/}
                {/*        return (*/}
                {/*            <HelloWorld*/}
                {/*                key={index}*/}
                {/*                name={car.name}*/}
                {/*                year={car.year}*/}
                {/*                onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })*/}
                {/*    : null*/}
                {/*}*/}
            </div>
        )
    }
}

export default App;

//1.
// return React.createElement(
//     'div',
//     {
//         className: 'App'
//     },
//     React.createElement(
//       'h1',
//       null,
//         'Hello World!'
//     ),
// )
//  2.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Hello React
//         </p>
//       </header>
//     </div>
//   );
// }