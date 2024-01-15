import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import LoginPage from "./components/Login/Login_Page";
import ResetPassword from './components/ResetPassword/Reset_Password'
import OTPVerification from "./components/OTPVerification/Otp_verfications";
function App() {
  return (
    <div className="App">
        <Router>
        <LoginPage/>
        <br></br>
      {/*     <ResetPassword/> */}
          <br></br>
          {/* <OTPVerification/> */}
          <Routes>
            {/* <Route path="/reset-password" element={ <ResetPassword/>}/>
            <Route path="/otp-verification" element={ <OTPVerification/>}/> */}
          </Routes>
        </Router>

    </div>
        
  );
}

export default App;
