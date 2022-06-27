import axios from 'axios';
import { useEffect, useState } from 'react';
import Context from './Context';

function ContextProvider({ children }) {
    const [customerInfo, setCustomerInfo] = useState({ loading: true });
    const [transactionSummary, setTransactionSummary] = useState({ loading: true });
    const [transactionByMonth, setTransactionByMonth] = useState({ loading: true });

    useEffect(() => {
        axios.create({
            baseURL: window.PUBLIC_APP_SETTING_BACKEND_API,
            withCredentials: false,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .get("/customer/information-fake")
        .then(response => {
            setCustomerInfo(response.data);
        });
    }, []);

    useEffect(() => {
        axios.create({
            baseURL: window.PUBLIC_APP_SETTING_BACKEND_API,
            withCredentials: false,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .get("/transaction/summary-fake")
        .then(response => {
            setTransactionSummary(response.data);
        });
    }, []);

    useEffect(() => {
        axios.create({
            baseURL: window.PUBLIC_APP_SETTING_BACKEND_API,
            withCredentials: false,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .get("/transaction/by-month-fake")
        .then(response => {
            setTransactionByMonth(response.data);
        });
    }, []);
    
    return (
        <Context.Provider value={{ customerInfo, transactionSummary, transactionByMonth }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;