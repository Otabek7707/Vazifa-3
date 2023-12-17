/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Loading from "./components/Loading";
import { reducer } from "./reducer";

const AppContext =createContext();

const url = 'https://course-api.com/react-tours-project'

const initialState = {
    loading:false,
    list:[]
}

const AppProvider = ({children}) => {
    
    // eslint-disable-next-line no-unused-vars
    const [state,dispatch] = useReducer(reducer,initialState);

    const load = () =>{
        dispatch({type:"LOADING"})
    }
    const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
        load();
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

const fetchData = async () => {
    dispatch({type:"LOADING"})
    const response = await fetch(url)
    const list = await response.json()
    dispatch({type:'FETCH',payload:list})
}


  useEffect(() => {
      fetchData(),
        fetchTours()
  }, []);

  if (loading) {
    return(
        <>
        <Loading/>
        </>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
    return(
        <AppContext.Provider value={{
            ...state,
            loading,
            setLoading,
            tours,
            setTours,
            removeTour
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext,AppProvider};