import { IoHomeOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="text-gray-700 body-font pt-3 about">
        <div className="container mx-auto flex px-5 py-24 flex-col items-center">
          <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-left">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-5 lg:col-span-5">
                <h3 className="text-3xl font-bold mb-3 text-black">
                  Lets Connect
                </h3>
                <p className="text-gray-500 mb-3 font-medium">
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <hr className="mb-4" />
                <h4 className="text-1xl font-bold mb-3 text-black">
                  Address :
                </h4>
                <span className="flex items-center mb-9">
                  {" "}
                  <IoHomeOutline className="icon text-xl" />
                  <p className="pl-3">Hyderabad, Qasimabad, Memon Society</p>
                </span>

                <h4 className="text-1xl font-bold mb-3 text-black">Phone :</h4>
                <span className="flex items-center mb-9">
                  {" "}
                  <LuPhone className="icon text-xl" />
                  <p className="pl-3">+92 315-3268177</p>
                </span>

                <h4 className="text-1xl font-bold mb-3 text-black">Email :</h4>
                <span className="flex items-center mb-9">
                  {" "}
                  <MdOutlineMail className="icon text-xl" />
                  <p className="pl-3">fahadgraphicx11@gmail.com</p>
                </span>
              </div>

              <div className="col-span-12 md:col-span-7 lg:col-span-7">
                <div className="rounded overflow-hidden shadow-lg bg-white custom-form">
                  <div className="px-6 pt-4">
                    <form>
                      <h6 className="font-bold text-lg text-gray-500">
                        Lets talk
                      </h6>
                      <h3 className="text-3xl font-bold mb-3 text-black">
                        Enter your project details
                      </h3>
                      <p className="text-gray-500 text-sm mb-5">
                        Content here, content here, making it look like readable
                        English. Many desktop publishing packages.
                      </p>

                      <div className="grid grid-cols-12 gap-4 items-center mb-4">
                        <div className="col-span-12 md:col-span-6 lg:col-span-6">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Name"
                            type="text"
                            placeholder="Name"
                          ></input>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Email"
                            type="text"
                            placeholder="Email"
                          ></input>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-4 items-center mb-4">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Subject"
                            type="text"
                            placeholder="Subject"
                          ></input>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-4 items-center mb-4">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12">
                          <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Subject"
                            rows={4}
                            placeholder="Subject"
                          ></textarea>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-4 items-center mb-4">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12 text-end">
                          <a
                            href="#"
                            className="contactbtn inline-flex font-medium text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
                          >
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
