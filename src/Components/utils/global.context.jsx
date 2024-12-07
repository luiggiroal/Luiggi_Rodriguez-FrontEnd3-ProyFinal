import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import {reducer} from "../../reducers/reducer.js";

export const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs')) || []

export const initialState = {
  dentists: [],
  favs: lsFavs,
  theme: "light"
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type: "GET_DENTISTS", payload: res.data})
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal) 
