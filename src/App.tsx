import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from "./Pages/Home";
import ErrorPage from "./Pages/Error";

function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<ErrorPage/>}  />
      </Routes>
    </Router>
  );
}

export default App;
