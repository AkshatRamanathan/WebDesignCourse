import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";
import myShipment from "./components/my-shipments";
import Dashboard from "./components/Dashboard";
import TrackShipment from "./components/TrackShipment";
import MyProfile from "./components/MyProfile";
import GetQuotationPage from './components/GetQuote';


function App() {
  return (
    // Define the main routing structure using the `Routes` component
    <>
      <Routes>
        <Route path="/" Component={Home}>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/myShipment" Component={myShipment} />
          <Route path="/myProfile" Component={MyProfile} />
          <Route path="/Dashboard" Component={Dashboard} />
          <Route path="/getQuote" Component={GetQuotationPage} />
          <Route path="/track" Component={TrackShipment} />
          <Route path='/' exact={true} Component={Welcome} />
          <Route path='*' exact={true} Component={NotFound} />
        </Route>

      </Routes>
      <footer />
    </>
  );
}

export default App;
