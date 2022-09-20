import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getData, getLoading, getSuccess } from "./store/dataReducer";
import Header from "./components/Header/Header";

function App() {
   useEffect(() => {}, []);

   const data = useSelector(getData);
   const success = useSelector(getSuccess);

   return <div className='App'>{success ? <Header data={data} /> : null}</div>;
}

export default App;
