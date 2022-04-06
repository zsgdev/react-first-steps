import React from 'react'

export default props => (
    <div>
        <h6>Car name: {props.name}</h6>
        <h6>Car year: {props.year}</h6>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)

//1.
// function HelloWorld() {
//     return (
//         <h1>This is first component</h1>
//     )
// }
//2.
// const HelloWorld = () => {
//     return (
//         <div>This is my component</div>
//     )
// }
//3.
// const HelloWorld = () => <div>Hello component</div>
//
//
// export default HelloWorld