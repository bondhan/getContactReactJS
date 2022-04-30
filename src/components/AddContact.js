import React, {useState} from "react";

const AddContact = (props) => {
    const [contactName, setName] = useState("")
    const [contactEmail, setEmail] = useState("")

    const add = (e) => {
        e.preventDefault();
        if (contactName === "" || contactEmail === "") {
            alert("all fields mandatory");
            return;
        }

        props.addContactHandler({name: contactName, email: contactEmail});
        setEmail("")
        setName("")
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"
                           value={contactName}
                           onChange={(e) => {
                               setName(e.target.value)
                           }}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                           value={contactEmail}
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}
                    />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact;
