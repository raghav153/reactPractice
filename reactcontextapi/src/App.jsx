import Login from "./Components/Login";
import Profile from "./Components/Profile";
import "./App.css";
import UserContextProvider from "./Context/userContextProvider";
import UserContext from "./Context/UserContext";


function App() {
  return (
    <UserContextProvider>
      <h1>Hello Raghav</h1>
      <Login />
      <Profile/>
      {/* <UserContext.Consumer>{(context) => <Login />}</UserContext.Consumer>
      <UserContext.Consumer>{(context) => <Profile />}</UserContext.Consumer> */}
    </UserContextProvider>
  );
}

export default App;
