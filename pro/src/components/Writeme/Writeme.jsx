import React from "react";
import Swal from "sweetalert2";

const Writeme = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c8ea0a4e-1e99-404a-9dda-8eeb7b0af7f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "THANKS FOR YOUR MESSAGE !",
        icon: "success",
      });
    }
  };
  return (
    <>
      <section
        className="  bg-[url('https://images.unsplash.com/photo-1729194515785-fcd7d4f292d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat w-full h-[100vh] px-8 py-24 flex items-center justify-center  "
        id="write"
      >
        <form
          onSubmit={onSubmit}
          autocomplete="off"
          className=" bg-white/10 backdrop-blur-3xl border border-white/60 rounded-md  shadow-2xl w-[450px] md:w-[600px] lg:w-[800px] lg:h-[90vh] flex flex-col space-y-6  py-5 px-7"
        >
          <h2 className="text-3xl font-poppins font-semibold tracking-wide text-white ">
            Write A Message
          </h2>
          <div className="flex gap-4 items-center">
            <label className=" flex items-center gap-2 text-white text-[15px] md:text-xl  md:font-semibold font-poppins tracking-wide ">
              Your <span> Name:- </span>
            </label>
            <input
              className=" text-lime-100 w-[250px]  md:w-[500px] py-1 px-2 outline-none bg-white/10 backdrop-blur-3xl border border-white/60  focus:bg-white/20 "
              type="text"
              name="name"
              placeholder="Enter Your Name"
              autocomplate="off"
              required
            />
          </div>

          <div className="flex gap-5 items-center">
            <label className=" flex items-center gap-2 text-white text-[15px] md:text-xl  md:font-semibold font-poppins tracking-wide ">
              Your <span> Email:- </span>
            </label>
            <input
              className=" text-lime-100  w-[250px]  md:w-[500px] py-1 px-2 outline-none bg-white/10 backdrop-blur-3xl border border-white/60  focus:bg-white/20 "
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="pt-12 flex flex-col items-start justify-start gap-4">
            <label className="text-xl font-semibold font-poppins tracking-wide text-white ">
              Write Your Message Here !{" "}
            </label>
            <textarea
              className="text-lime-100 w-[250px] md:w-[500px] h-[150px] resize-x outline-none py-1 px-2 bg-white/10 backdrop-blur-3xl border border-white/60  focus:bg-white/20 "
              name="message"
              id=""
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <div className="flex items-start justify-start">
            <button
              className=" py-1 px-4 text-white font-poppins tracking-wide  bg-white/10 backdrop-blur-3xl border border-white/60  hover:bg-white/20 "
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Writeme;
