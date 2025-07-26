import logo from "../assets/images/logo-mark.svg";
import githubImg from "../assets/images/icon-github.svg";
import cardDesign from "../assets/images/pattern-ticket.svg";

function GenerateTicket({ formData, avatarPreview }) {
  return (
    <div className="bg-multi min-h-screen max-h-max p-4 w-full text-white">
      <div className="flex justify-center items-center w-full h-10">
        <img src={logo} alt="coding conf logo" />
      </div>
      <h1 className="text-4xl mt-4">
        Congrats, <span>{formData.userName}</span> Your ticket is ready.
      </h1>
      <p className="mt-3">
        We've emailed your ticket to <span>{formData.userEmail}</span> and will
        send updates in the run up to the event.
      </p>
      <div className=" w-full h-50 rounded-md mt-6 relative p-3">
        <div className="w-full h-full absolute bottom-0 left-0">
          <img src={cardDesign} alt="card design" />
        </div>
        <div className="content-div w-2/3 h-full">
          <div className="flex justify-between">
            <img src={logo} alt="coding conf logo" />
            <div className="flex flex-col">
              <span>Coding Conf</span>
              <span>Jan 31, 2025 / Austin, TX</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between w-full h-1/2 ">
            <div>
              <img
                src={avatarPreview}
                alt="avatar"
                className="rounded-md w-15 h-15"
              />
            </div>
            <div className="">
              <p className="">{formData.userName}</p>
              <p className="flex justify-between">
                <img src={githubImg} alt="github icon" />
                <span>{formData.userGithubName}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateTicket;
