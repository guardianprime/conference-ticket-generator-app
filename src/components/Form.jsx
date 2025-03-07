function Form({ formData, handleSubmit, handleChange, avatarPreview }) {
    return (
        <form onSubmit={handleSubmit}>
            <h1> Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p>Secure your spot at next year's biggest coding conference.</p>
            <div>
                <label htmlFor="avatar"> Upload Avatar</label>
                <div>
                    <input id="avatar" name="avatar" type="file" accept="image/png, image/jpeg" placeholder="Drag and drop or click to upload"
                        onChange={handleChange}
                    />
                </div>
                {avatarPreview && <div>
                    <img src={avatarPreview} alt="user image" /></div>}
                <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
            </div>
            <div>
                <label htmlFor="userName">Full Name</label>
                <input id="userName" name="userName" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="userEmail">Email Address</label>
                <input id="userEmail" name="userEmail" placeholder="example@email.com" type="email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="userGithubName">GitHub Username</label>
                <input id="userGithubName" name="userGithubName" type="text" placeholder="@yourusername" onChange={handleChange} />
            </div>
            <button type="submit">Generate My Ticket</button>
        </form>
    )
}

export default Form;