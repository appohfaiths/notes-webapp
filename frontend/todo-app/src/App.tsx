import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import View from "./pages/View";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";

function App() {

  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
        <ToastContainer />
      </Provider>
    </>
  )
}

export default App
