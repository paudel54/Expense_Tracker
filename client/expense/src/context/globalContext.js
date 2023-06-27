import React, { useContext, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/';

const GlobalContext = React.createContext()


export const GlobalProvider = ({ children }) => {
    // state variable to control
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null)

    // send item to db
    const addIncome = async (income) => {
        // sending post req to add income, income is payload. 
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    return (
        < GlobalContext.Provider value={{
            addIncome
        }} >
            {children}
        </GlobalContext.Provider >
    )

}


export const useGlobalContext = () => {
    return useContext(GlobalContext);
}