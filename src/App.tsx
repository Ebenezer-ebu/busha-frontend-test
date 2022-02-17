import Accounts from "./components/Accounts";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className="side_content">
        <SideBar />
        {/* <Wallets /> */}
        <Accounts />
      </div>
    </div>
  );
}

export default App;
