import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex flex-col justify-center items-center h-24">
      <div className="flex flex-row">
        <Link href="https://github.com/stevebutler11" target="_blank">
          <GitHubLogoIcon className="h-12 w-12 m-1" />
        </Link>

        <Link href="https://www.linkedin.com/in/steven-butler-3749a6a4/" target="_blank">
          <LinkedInLogoIcon className="h-12 w-12 m-1" />
        </Link>
      </div>
    </footer>
  );
}
