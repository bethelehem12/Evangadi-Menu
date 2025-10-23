import React, { Component } from 'react'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Header from './components/Header/Header'
// import MenuOne from './components/MenuOne/MenuOne'
// import MenuTwo from './components/MenuTwo/MenuTwo'
// import MenuThree from './components/MenuThree/MenuThree'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
//       {/* <MenuOne /> */}
//      <MenuThree/>
//     </>
//   )
// }

// export default App

























































// {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}