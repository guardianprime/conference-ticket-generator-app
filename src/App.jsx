import { useState } from "react";
import Form from "./components/Form";
import GenerateTicket from "./components/GenerateTicket";


function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGithubName, setUserGithubName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setFormSubmitted(true);
    /*  setUserName(e.target.value)
     setUserEmail(e.target.value)
     setUserGithubName(e.target.value)
     setAvatar(e.target.files[0]) */
  }

  return (
    <>

      {formSubmitted ? <GenerateTicket /> :
        <Form
          avatar={avatar}
          handleSubmit={handleSubmit}
        />}
    </>
  )
}

export default App
