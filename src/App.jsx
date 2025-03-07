import { useState } from "react";
import Form from "./components/Form";
import GenerateTicket from "./components/GenerateTicket";


function App() {
  const [formData, setFormData] = useState({ userName: "", userEmail: "", userGithubName: "", avatar: null });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null); // State for the preview URL


  const handleChange = (event) => {
    const { name, files } = event.target; // get the file array.
    if (name === 'avatar' && files && files[0]) {
      const file = files[0];
      setFormData({
        ...formData,
        avatar: file, // Store the File object directly
      });
      // Create a temporary URL for preview
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: files
      });
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  }

  return (
    <>

      {formSubmitted ? <GenerateTicket /> :
        <Form
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          avatarPreview={avatarPreview}
        />}
    </>
  )
}

export default App
