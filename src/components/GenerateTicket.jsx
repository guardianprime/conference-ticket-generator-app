function GenerateTicket({ formData }) {
    return (
        <div>

            <h1> Congrats,  {formData.userName}   Your ticket is ready.</h1>

            <p> We've emailed your ticket to {formData.userEmail} and will send updates in the run up to the event.</p>

            Coding Conf
            Jan 31, 2025 / Austin, TX

        </div>
    )
}

export default GenerateTicket;