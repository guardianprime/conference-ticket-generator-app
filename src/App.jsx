import { useState } from "react";
import Form from "./components/Form";
import GenerateTicket from "./components/GenerateTicket";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userGithubName: "",
    avatar: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null); // State for the preview URL
  function handleImageChange(e) {
    handleChange(e);
    console.log("just clicked");
  }

  const handleChange = (event) => {
    const { name, value, files } = event.target; // get the file array and value.
    if (name === "avatar" && files && files[0]) {
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
        [name]: value, // Update the value for text inputs
      });
    }
  };

  function handleReset(e) {
    e.preventDefault(); // Prevent default form submission
    setFormData({ ...formData, avatar: null });
    setAvatarPreview(null); // Clear the avatar preview
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.userName === "" ||
      formData.userEmail === "" ||
      formData.userGithubName === "" ||
      formData.avatar === null
    )
      return;
    setFormSubmitted(true);
    console.log(formData);
  }

  return (
    <>
      {formSubmitted ? (
        <GenerateTicket formData={formData} />
      ) : (
        <Form
          handleReset={handleReset}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          avatarPreview={avatarPreview}
          handleImageChange={handleImageChange}
        />
      )}
    </>
  );
}

export default App;
