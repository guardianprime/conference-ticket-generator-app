import logo from "../assets/images/logo-full.svg"
import UploadIcon  from '../assets/images/icon-upload.svg';
import infoIcon from '../assets/images/icon-info.svg';

function Form({ handleSubmit, handleChange, avatarPreview, handleReset }) {
    return (
        <form onSubmit={handleSubmit} className="bg-multi min-h-screen max-h-max p-4 w-full">
            <div className="flex justify-center items-center w-full h-10">
                <img src={logo} alt="coding conf logo" />
            </div>
            <h1 className="text-white text-extrabold text-2xl text-center"> Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-neutral-100 text-sm text-center">Secure your spot at next year's biggest coding conference.</p>
            <div className="mt-6">
                <label htmlFor="dropzone-file" className="text-white"> Upload Avatar</label>
                <div className="flex items-center justify-center w-full my-2 bg-indigo-950/90 border-2 border-neutral-300 border-dashed rounded-lg">
                    {!avatarPreview && <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-30 cursor-pointer ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <div className="rounded-lg bg-indigo-950/95 h-12 w-12 flex justify-center items-center p-1 border border-neutral-300/50">
                               <img src={UploadIcon} alt="upload icon"/>
                            </div>
                            <p className="mt-2 text-sm text-white "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" name="avatar" accept="image/png, image/jpeg" onChange={handleChange} />
                    </label>}
                    {avatarPreview && <div className="w-full h-full">
                        <div className="w-12 h-12.5 border-1 border-white rounded-lg">
                            <img className="w-full h-full rounded-lg" src={avatarPreview} alt="user image" />
                        </div>
                        <div className="flex justify-between w-full">
                            <button className="p-1 text-white text-xs bg-cyan-200 rounded-lg" onClick={(e) => handleReset(e)}>Remove image</button>
                            <button className="p-1 text-white text-xs bg-cyan-200 rounded-lg" onClick={() => console.log("changing image")}>Change image</button>
                        </div>
                    </div>}
                </div>
                <p className="text-white text-xs">
                    <img alt="info icon" src={infoIcon} className="inline"/> Upload your photo (JPG or PNG, max size: 500KB).</p>
            </div>
            <div className="mt-4">
                <label htmlFor="userName" className="text-white">Full Name</label>
                <input className="border border-neutral-300 p-2 my-2 w-full text-white rounded-lg bg-indigo-950/90" id="userName" name="userName" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="userEmail" className="text-white">Email Address</label>
                <input className="border border-neutral-300 p-2 my-2 w-full text-white rounded-lg bg-indigo-950/90" id="userEmail" name="userEmail" placeholder="example@email.com" type="email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="userGithubName" className="text-white">GitHub Username</label>
                <input className="border border-neutral-300 p-2 my-2 w-full text-white rounded-lg bg-indigo-950/90" id="userGithubName" name="userGithubName" type="text" placeholder="@yourusername" onChange={handleChange} />
            </div>
            <button type="submit" className="bg-[#f57261] text-black font-bold p-4 w-full my-5 rounded-lg">Generate My Ticket</button>
        </form>
    )
}

export default Form;