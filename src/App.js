import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/homepage";
import SignIn from "./pages/authentication/signin";
import SignUp from "./pages/authentication/signup";
import DonatorDashboard from "./pages/dashboard/donatorDashboard";
import FundraiserDashboard from "./pages/dashboard/fundraiserDashboard";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/dashboard_donator" element={<DonatorDashboard/>}/>
          <Route path="/dashboard_fundraiser" element={<FundraiserDashboard/>}/>
          {/*                       <Route path="/profile/:userId" element={<ProfilePage/>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
