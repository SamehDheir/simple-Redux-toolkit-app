import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="main">
          <Sidebar />
          <Form />
        </div>
      </div>
    </Provider>
  );
}

export default App;
