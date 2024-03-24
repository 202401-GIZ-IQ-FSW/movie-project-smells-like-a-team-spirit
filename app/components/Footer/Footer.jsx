import { Github, Linkedin } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-back rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          ></a>

          {/* <div className="gap-8 flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-foreground sm:mb-0 "> */}
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-2 sm:pr-14">
            <div className="flex flex-col items-center gap-3 justify-between ">
              <div className="flex flex-row gap-1">
                <a
                  className="gap-2 flex justify-between items-center"
                  href="https://github.com/DRACOWRLD999"
                >
                  <Github color="white" size={24} />
                </a>

                <a
                  className="gap-2 flex justify-end items-center"
                  href="https://www.linkedin.com/in/ahmed-sabah-s"
                >
                  <Linkedin color="white" size={24} />
                </a>
              </div>
              Ahmad Sabah
            </div>

            <div className="flex flex-col items-center gap-3 justify-between ">
              <div className="flex flex-row gap-1">
                <a
                  className="gap-2 flex justify-between items-center"
                  href="https://github.com/Meerata"
                >
                  <Github color="white" size={24} />
                </a>

                <a
                  className="gap-2 flex justify-end items-center"
                  href="https://www.linkedin.com/in/meer-atta-b825b4229/"
                >
                  <Linkedin color="white" size={24} />
                </a>
              </div>
              Meer Atta
            </div>

            <div className="flex flex-col items-center gap-3 justify-between ">
              <div className="flex flex-row gap-1">
                <a
                  className="gap-2 flex justify-between items-center"
                  href="https://github.com/Aland-Axelles"
                >
                  <Github color="white" size={24} />
                </a>

                <a
                  className="gap-2 flex justify-end items-center"
                  href="https://www.linkedin.com/in/aland-r-0182921b3/"
                >
                  <Linkedin color="white" size={24} />
                </a>
              </div>
              Aland Rebwar
            </div>
            <div className="flex flex-col items-center gap-3 justify-between ">
              <div className="flex flex-row gap-1">
                <a
                  className="gap-2 flex justify-between items-center"
                  href="https://github.com/ZhinAbubakr"
                >
                  <Github color="white" size={24} />
                </a>

                <a
                  className="gap-2 flex justify-end items-center"
                  href="https://www.linkedin.com/in/zhin-abubakr-473910181/"
                >
                  <Linkedin color="white" size={24} />
                </a>
              </div>
              Zhin Abu
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex md:flex-row sm:flex-col justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            LateNight Cinema
          </span>
          <span className="block text-sm text-foreground sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              LateNight Cinema™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
