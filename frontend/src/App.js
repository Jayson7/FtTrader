import "./App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.email);
  const isSuperuser = useSelector(
    (state) => state.userPositionReducer.isSuperuser
  );
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
          {isAuthenticated ? (
            <div>
              <Link
                className="btn btn-info px-5 mx-2 text-decoration-none text-light px-5"
                to={"dashboard"}
              >
                Dashboard
              </Link>

              {isSuperuser ? (
                <Link
                  className="btn btn-success px-5  text-decoration-none text-light px-5 mx-2"
                  to={"register"}
                >
                  Add trader
                </Link>
              ) : (
                <Link
                  className="btn btn-success px-5 text-decoration-none text-light px-5 mx-2"
                  to={"trade"}
                >
                  Start Trading
                </Link>
              )}
            </div>
          ) : (
            <Link
              className="btn btn-info px-5 text-decoration-none text-light px-5"
              to={"login"}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
