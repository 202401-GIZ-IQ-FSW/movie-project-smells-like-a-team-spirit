import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

// Reusable component for GitHub and LinkedIn links
function SocialLink({ githubUrl, linkedinUrl, name }) {
  return (
    <div className="flex flex-col items-center gap-y-3 justify-center text-center ">
      <div className="flex flex-row gap-1">
        <a className="gap-2 flex items-center" href={githubUrl}>
          <GitHubLogoIcon className="text-primary" />
        </a>
        <div className="sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4"></div>
        <a className="gap-2 flex items-center" href={linkedinUrl}>
          <LinkedInLogoIcon className="text-primary text-xl" />
        </a>
      </div>
      {name}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-back rounded-lg shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:grid sm:grid-cols-1 sm:justify-center">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-2 ">
            {/* Team Members */}
            {[
              {
                name: "Ahmad Sabah",
                githubUrl: "https://github.com/DRACOWRLD999",
                linkedinUrl: "https://www.linkedin.com/in/ahmed-sabah-s",
              },
              {
                name: "Meer Atta",
                githubUrl: "https://github.com/Meerata",
                linkedinUrl: "https://www.linkedin.com/in/meer-atta-b825b4229/",
              },
              {
                name: "Aland Rebwar",
                githubUrl: "https://github.com/Aland-Axelles",
                linkedinUrl: "https://www.linkedin.com/in/aland-r-0182921b3/",
              },
              {
                name: "Zhin Abubakr",
                githubUrl: "https://github.com/ZhinAbubakr",
                linkedinUrl:
                  "https://www.linkedin.com/in/zhin-abubakr-473910181/",
              },
            ].map((member, index) => (
              <SocialLink key={index} {...member} />
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        {/* Footer Information */}
        <div className="flex md:flex-row sm:flex-col justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
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
