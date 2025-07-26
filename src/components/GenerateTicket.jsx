import logo from "../assets/images/logo-mark.svg";
import githubImg from "../assets/images/icon-github.svg";
import cardDesign from "../assets/images/pattern-ticket.svg";

function GenerateTicket({ formData, avatarPreview }) {
  return (
    <div className="bg-multi min-h-screen max-h-max p-4 w-full text-white">
      <div className="flex justify-between items-center w-2/5 h-10 mx-auto">
        <img src={logo} alt="coding conf logo" />
        <h2 className="text-lg"> Coding Conf</h2>
      </div>
      <h1 className="text-4xl mt-4 text-center">
        Congrats,{" "}
        {formData.userName?.split(" ").length === 2 ? (
          <>
            <span className="bg-gradient-to-r from-[#f57261] to-white bg-clip-text text-transparent">
              {formData.userName.split(" ")[0]}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#f57261] to-white bg-clip-text text-transparent">
              {formData.userName.split(" ")[1]}
            </span>
          </>
        ) : (
          <span className="text-[#f57261]">{formData.userName}</span>
        )}
        ! Your ticket is ready.
      </h1>
      <p className="mt-3 text-center">
        We've emailed your ticket to{" "}
        <span className="text-[#f57261]">{formData.userEmail}</span> and will
        send updates in the run up to the event.
      </p>
      <div className=" w-full h-50 rounded-md mt-8 relative p-3">
        <div className="w-full h-full absolute bottom-0 left-0">
          <img src={cardDesign} alt="card design" />
        </div>
        <div className="content-div w-3/4 h-3/4 flex flex-col justify-between">
          <div className="flex justify-between">
            <img src={logo} alt="coding conf logo" />
            <div className="flex flex-col">
              <span>Coding Conf</span>
              <span>Jan 31, 2025 / Austin, TX</span>
            </div>
          </div>
          <div className="flex justify-between w-full h-2/5 ">
            <div>
              <img
                src={avatarPreview}
                alt="avatar"
                className="rounded-md w-15 h-15"
              />
            </div>
            <div className="w-2/3">
              <p className="">{formData.userName}</p>
              <p className="flex flex-start">
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
