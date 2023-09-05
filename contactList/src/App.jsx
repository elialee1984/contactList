import { useState, useEffect } from "react";
import "./App.css";

// ./ means you wrote the code
// no ./ means you did not write it
import ContactList from "./components/ContactList";

function App() {
  // first step- get the data from https://jsonplaceholder.typicode.com/users onto here
  // second step- save the data in a variable. what kind of variable should we save this data in?

  const [contacts, setContacts] = useState([]);

  // we dont have a selected contact
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // once we get our data lets save it inside our state
      const data = await response.json();
      setContacts(data);
    };

    getData();
  }, []);

  // in react you can conditionally render components
  // something ? 'hello' : 'bye'

  return (
    <>
      {selectedContact ? (
        <div>
          <h1>{selectedContact.name}</h1>
        </div>
      ) : null}
      <ContactList
        contacts={contacts}
        setSelectedContact={setSelectedContact}
      />
    </>
  );
}

export default App;