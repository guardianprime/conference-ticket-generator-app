import logo from "../assets/images/logo-full.svg"

function Form({ handleSubmit, handleChange, avatarPreview }) {
    return (
        <form onSubmit={handleSubmit} className="bg-indigo-950 min-h-screen max-h-max p-4 w-full">
            <div className="flex justify-center items-center w-full h-10">
                <img src={logo} alt="coding conf logo" />
            </div>
            <h1 className="text-white text-extrabold text-2xl text-center"> Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-neutral-100 text-sm text-center">Secure your spot at next year's biggest coding conference.</p>
            <div>
                <label className="text-white"> Upload Avatar</label>
                <div class="flex items-center justify-center w-full my-2">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-30 border-2 border-white border-dashed rounded-lg cursor-pointer bg-indigo-950">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <div className="rounded-lg bg-indigo-900 h-12 w-12 flex justify-center items-center p-1">
                                <svg class="w-8 h-8 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                            </div>
                            <p class="mt-2 text-sm text-white "><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
                {avatarPreview && <div>
                    <img src={avatarPreview} alt="user image" /></div>}
                <p className="text-white text-xs">Upload your photo (JPG or PNG, max size: 500KB).</p>
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