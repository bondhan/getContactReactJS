import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const [isloaded, setLoaded] = useState(false);
    const addContactHandler = (c) => {
        setContacts([...contacts, c]);
    }

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) setContacts(retrieveContacts);
        setLoaded(true)
    }, []);

    useEffect(() => {
        if (isloaded) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
        }
    }, [contacts]);

    return (
        <div className="ui container">
            <Header/>
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts}/>
        </div>
    );
}

export default App;
