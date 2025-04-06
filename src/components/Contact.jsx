import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h1ypbgd", "template_5qvx3gq", form.current, {
        publicKey: "XnLTFneXRVkwkphGD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="antialiased bg-gray-100 pt-10">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-6xl p-8 md:rounded-xl shadow-lg bg-cyan-700 text-white">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h1 className="font-bold text-5xl tracking-wide text-center">
              Get in touch with Monicah
            </h1>
            <p className="pt-2 text-cyan-100 text-md">
              Are you ready to take control of your health and well-being?
              Monicah is here to help! Whether you are looking for personalized
              advice, tips on improving your wellness, or simply want to learn
              more about how to achieve your health goals, Monicah is just a
              message away. Reach out today and take the first step toward a
              healthier, happier you!
            </p>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <BsTelephoneFill className="text-teal-300 text-xl" />
                <span>(262) 613-0175</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <MdEmail className="text-teal-300 text-xl" />
                <span>monicahcloud@gmail.com</span>
              </div>
              {/* <div className="inline-flex space-x-2 items-center">
                <FaLocationDot className="text-teal-300 text-xl" />
                <span>Atlanta, GA USA</span>
              </div> */}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <button className="inline-block self-end bg-cyan-700 font-bold text-white rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
