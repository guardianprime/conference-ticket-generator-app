import logo from "../assets/images/logo-full.svg"

function GenerateTicket({ formData }) {
    return (
        <div className="bg-multi min-h-screen max-h-max p-4 w-full text-white">
            <div className="flex justify-center items-center w-full h-10">
                <img src={logo} alt="coding conf logo" />
            </div>
            <h1 className="text-4xl mt-4"> Congrats, <span>{formData.userName}</span> Your ticket is ready.</h1>

            <p className="mt-3"> We've emailed your ticket to <span>{formData.userEmail}</span> and will send updates in the run up to the event.</p>
            <div className="mt-8">
            Coding Conf
            Jan 31, 2025 / Austin, TX
            </div>
        </div>
    )
}

export default GenerateTicket;