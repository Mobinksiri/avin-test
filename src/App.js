import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData, getData } from "./store/dataReducer";

function App() {
   const dispatch = useDispatch();
   const data = useSelector((state) => state.data.posts);

   useEffect(() => {
      dispatch(fetchData());
      console.log(data);
   }, []);

   return <div className='App'></div>;
}

export default App;
