import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {
  pages: string[];
};

const NavLinkDropdown = ({ pages }: Props) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-0 p-0">
        {pages.map((pg, i) => (
          <DropdownMenuItem
            key={i}
            className="lg:text-xl bg-secondary text-secondary-foreground"
            onClick={() => {
              router.push(`/${pg}`);
            }}
          >
            {pg}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavLinkDropdown;
