import React, { useState, useEffect } from "react";
import firebase from "../base";
import ContactInput from "./ContactInput";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState();
  const [searchName, setSearchName] = useState();

  useEffect(() => {
    const unsubscribe = getContacts();
  
    return unsubscribe;
  }, []);

  const getContacts = () => {
    const db = firebase.firestore();
    db.collection("users").onSnapshot((snapshot) => {
      const contactsData = [];
      snapshot.forEach((doc) =>
        contactsData.push({ ...doc.data(), id: doc.id })
      );
      setContacts(contactsData);
    });
  };

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("users").add({ name: newContact });
    setNewContact('');
  };

  const onSearch = () => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection("users")
        .orderBy("name")
        .startAt(searchName)
        .endAt(searchName + "\uf8ff")
        .get();

        setContacts(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
      setSearchName('');
    };
    fetchData();

    // const name = contacts.filter(item => item.name === searchName);
    // setContacts(name);
    // setSearchName('');
  };

  console.log(contacts);

  return (
    <div>
      <h1>Contacts</h1>
      <div>
        <input
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <button onClick={onSearch}>Search</button>
        <button onClick={getContacts}>Show All</button>
      </div>
      <div>
        <input
          value={newContact}
          onChange={(e) => {
            setNewContact(e.target.value);
          }}
        />
        <button onClick={onCreate}>Create</button>
      </div>
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            {item.name}
            <ContactInput contactName={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
