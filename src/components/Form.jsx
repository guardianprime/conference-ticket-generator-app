import logo from "../assets/images/logo-full.svg"

function Form({ handleSubmit, handleChange, avatarPreview }) {
    return (
        <form onSubmit={handleSubmit} className="bg-indigo-950 h-screen p-4 w-full">
            <div className="flex justify-center items-center w-full h-10">
                <img src={logo} alt="coding conf logo" />
            </div>
            <h1 className="text-white text-bold text-xl"> Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-neutral-100 text-sm text-center">Secure your spot at next year's biggest coding conference.</p>
            <div>
                <label htmlFor="avatar" className="text-white"> Upload Avatar</label>
                <div>
                    <input className="border-white" id="avatar" name="avatar" type="file" accept="image/png, image/jpeg" placeholder="Drag and drop or click to upload"
                        onChange={handleChange}
                    />
                </div>
                {avatarPreview && <div>
                    <img src={avatarPreview} alt="user image" /></div>}
                <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
            </div>
            <div>
                <label htmlFor="userName" className="text-white">Full Name</label>
                <input className="border border-white p-2 my-2 w-full text-white rounded-sm" id="userName" name="userName" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="userEmail" className="text-white">Email Address</label>
                <input className="border border-white p-2 my-2 w-full text-white rounded-sm" id="userEmail" name="userEmail" placeholder="example@email.com" type="email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="userGithubName" className="text-white">GitHub Username</label>
                <input className="border border-white p-2 my-2 w-full text-white rounded-sm" id="userGithubName" name="userGithubName" type="text" placeholder="@yourusername" onChange={handleChange} />
            </div>
            <button type="submit" className="bg-orange-500 text-black font-semibold p-4 w-full my-5 rounded-sm">Generate My Ticket</button>
        </form>
    )
}

export default Form;