import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App container py-5">
      <div className="card py-5 d-flex justify-content-center align-items-center mt-5">
        <h1 className="text-center display-4 font-weight-bold">
          Welcome to FtTrader
        </h1>
        <p className="text-center px-5 my-4">
          FtTrader is a cutting-edge mobile application designed to empower
          individuals and professionals alike in the world of financial trading.
          Whether you're an experienced trader or just getting started, FtTrader
          provides a comprehensive platform for trading stocks, forex,
          cryptocurrencies, commodities, and more.
        </p>
        <div className="mt-5">
          <button className="btn btn-info px-5 ">
            <Link className="text-decoration-none text-light px-5" to={"login"}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
