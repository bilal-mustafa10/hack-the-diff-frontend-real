import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/homepage";
import SignIn from "./pages/authentication/signin";
import SignUp from "./pages/authentication/signup";
import DonatorDashboard from "./pages/dashboard/donatorDashboard";
import FundraiserDashboard from "./pages/dashboard/fundraiserDashboard";
import DonationPage from "./pages/home/donationpage";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/donation" element={<DonationPage/>}/>
          <Route path="/dashboard/donater" element={<DonatorDashboard/>}/>
          <Route path="/dashboard/fundraiser" element={<FundraiserDashboard/>}/>
          {/*                       <Route path="/profile/:userId" element={<ProfilePage/>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
