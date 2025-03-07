function Form() {
    return (
        <form>
            <h1> Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p>Secure your spot at next year's biggest coding conference.</p>
            <div>
                <label> Upload Avatar</label>
                <div> Drag and drop or click to upload
                    Upload your photo (JPG or PNG, max size: 500KB).
                </div>
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