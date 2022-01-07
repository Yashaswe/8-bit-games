import FullName from "../img/icons/fullname.png";
import Email from "../img/icons/email.png";
import { useState } from "react";
const Newsletter = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  function subscribed() {
    if (email.length === 0 || fullname.length === 0) {
      window.alert("Please fill all the required field");
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      window.alert("Enter correct email");
    } else {
      window.alert("Thank you for subscribing");
    }
  }
  return (
    <div className="newsletter">
      <h2>Subscribe to our newsletter</h2>
      <br></br>
      <p>and receive updates on new game uploads.</p>
      <br></br>
      <form>
        <div className="input_field">
          <div className="input_container">
            <img src={FullName}></img>
            <input
              type="modal-text"
              className="fullName"
              id="fullName"
              placeholder="Full Name"
              required="required"
              onChange={(e) => setFullname(e.target.value)}
            ></input>
          </div>
          <div className="input_container">
            <img src={Email}></img>
            <input
              type="email"
              placeholder="Email"
              className="email"
              required="required"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button type="submit" className="subscribe" onClick={subscribed}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
