function Form({ avatar, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <h1> Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p>Secure your spot at next year's biggest coding conference.</p>
            <div>
                <label> Upload Avatar</label>
                <div>
                    <input type="file" accept="image/png, image/jpeg" placeholder="Drag and drop or click to upload" />
                </div>
                {avatar && <div>
                    <img src={URL.createObjectURL(avatar)} alt="user image" /></div>}
                <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
            </div>
            <div>
                <label>Full Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Email Address</label>
                <input placeholder="example@email.com" type="email" />
            </div>
            <div>
                <label>GitHub Username</label>
                <input type="text" placeholder="@yourusername" />
            </div>
            <button>Generate My Ticket</button>
        </form>
    )
}

export default Form;