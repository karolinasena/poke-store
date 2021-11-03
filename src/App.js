import React from 'react'
import Routes from "./routes";
import AppProvider from "./contexts/AppProvider";

import "./styles/global.scss";

function App() {
  return (
    <div className="App">
     <AppProvider>
       <Routes/>
     </AppProvider>
    </div>
  );
}

export default App;
