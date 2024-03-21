import { Github, Linkedin } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-back rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              LateNight Cinema
            </span>
          </a>

          {/* <div className="gap-8 flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-foreground sm:mb-0 "> */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <div className="flex items-center gap-3 justify-between ">
              Ahmad Sabah
              <div className="flex flex-col gap-1">
                <a
                  className="gap-2 flex justify-between items-center"
                  href="https://github.com/DRACOWRLD999"
                >
                  <Github color="white" size={24} />
                </a>

                <a
                  className="gap-2 flex justify-end items-center"
                  href="https://github.com/DRACOWRLD999"
                >
                  <Linkedin color="white" size={24} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-between ">
              Meer Atta
              <div className="flex flex-col gap-1">
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
            </div>

            <div className="flex items-center gap-3 justify-between ">
              Aland Rebwar
              <div className="flex flex-col gap-1">
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
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-foreground sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            LateNight Cinema™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
