import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/homepage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/login" element={<HomePage/>}/>
          <Route path="/register" element={<HomePage/>}/>
          {/*                       <Route path="/profile/:userId" element={<ProfilePage/>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
