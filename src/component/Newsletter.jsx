import FullName from "../img/icons/fullname.png";
import Email from "../img/icons/email.png";
const Newsletter = () => {
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
            ></input>
          </div>
          <div className="input_container">
            <img src={Email}></img>
            <input
              type="email"
              placeholder="Email"
              className="email"
              required="required"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="subscribe"
          onClick={() => window.alert("Thank you for subscribing")}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
