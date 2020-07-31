import React, { useState } from "react";
import firebase from "../base";

const ContactInput = ({ contactName }) => {
  const [name, setName] = useState(contactName.name);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(contactName.id)
      .set({ ...contactName, name });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(contactName.id)
      .delete();
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    
    </>
  );
};

export default ContactInput;
