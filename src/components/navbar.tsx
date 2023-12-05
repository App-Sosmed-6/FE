import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
        <header className="w-full sticky top-0 h-16 z-50 bg-[#FAFAFA]">
          <nav className="mx-auto flex container items-center justify-between py-4">
            <img src="src/assets/logo.png" alt="logo app" className="w-8" />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="#" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-9">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
      </header>
  )
}

export default Navbar;