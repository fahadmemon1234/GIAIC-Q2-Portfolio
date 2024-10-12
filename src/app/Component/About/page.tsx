import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="text-gray-700 body-font pt-3 about">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* Card */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 pt-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-12 md:col-span-6 relative w-full">
                    <div className="image-round"></div>
                    <div className="about-image relative p-4 pb-0">
                      <Image
                        style={{ display: "block", margin: "0 auto" }}
                        src="/assets/img/mypic.png"
                        alt="About"
                        width={350}
                        height={384}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="font-bold text-3xl mb-2 text-black">
                      About Me
                    </div>
                    <p className="text-gray-700 text-base">
                      Looking for a Graphic Designer, Web Developer, Software
                      Engineer (FrontEnd and BackEnd Developer) Look no further!
                      I am available 24/7 to meet your design and development
                      needs. Contact me now to elevate your business or project.
                    </p>

                    {/* New row */}
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-12 md:col-span-6 lg:col-span-6 relative w-full pt-3">
                        <h4 className="font-medium text-2xl text-black">
                          Skill
                        </h4>
                        <ul className="pl-2 pt-2">
                          <li className="mb-2">Graphic Design</li>
                          <li className="mb-2">Html</li>
                          <li className="mb-2">Css</li>
                          <li className="mb-2">JavaScript</li>
                          <li className="mb-2">TypeScript</li>
                          <li className="mb-2">Jquery</li>
                          <li className="mb-2">Bootstrap </li>
                          <li className="mb-2">Next.js</li>
                          <li className="mb-2">React.js</li>
                          <li className="mb-2">Firebase</li>
                        </ul>
                      </div>

                      <div className="col-span-12 md:col-span-6 lg:col-span-6 relative w-full pt-3">
                        <h4 className="font-medium text-2xl">Experince</h4>
                        <ul className="pl-2 pt-2">
                          <li className="mb-2 font-medium text-black">
                            AppsXone IT Solutions
                          </li>
                          <li className="mb-2 text-sm text-gray-500 pl-2">
                            Full-time ( 3 yrs 8 month )
                          </li>
                          <li className="mb-2 text-sm text-gray-500 pl-2">
                            On-site
                          </li>

                          <li className="font-medium mb-2 text-lg pl-3 text-black">
                            Front-End Developer
                          </li>
                          <li className="mb-2 text-sm text-gray-500 pl-4">
                            Jan 2023 - Present · 1 yr 8 month
                          </li>
                          <li className="mb-2 text-sm text-gray-500 pl-4">
                            Hyderabad, Sindh, Pakistan
                          </li>

                          <li className="mb-2 text-sm text-gray-500 pl-4">
                            As a Front End Developer at AppsXone IT Solutions, I
                            have honed my skills in React.js, crafting dynamic
                            user interfaces. Proficient in CSS, Bootstrap, and
                            HTML5, I ensure visually appealing designs and
                            seamless interactions. Leveraging JavaScript, I
                            enhance functionality to deliver engaging web
                            experiences.
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default About;
