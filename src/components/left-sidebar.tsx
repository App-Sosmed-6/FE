import { Link } from "react-router-dom";
import PostDetails from "@/pages/posting/post-details";

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage
  } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog";

import { Button } from "./ui/button";

const LeftSidebar = () => {
  return (
    <div className="container pt-9 col-start-1 col-end-4 bg-[#FAFAFA] border-r border-[#D9D9D9] flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <Link to="/">
          <img src="src/assets/logo.png" alt="logo" className="w-12"/>
        </Link>
        
        <Link to="/">
          <div className="flex items-center gap-7">
            <img src="src/assets/icon-footer-2.png" alt="home icon" className="w-10"/>
            <p className="text-2xl font-medium">Home</p>
          </div>
        </Link>

        <Link to="/profile" >
          <div className="flex items-center gap-8">
            <img src="src/assets/icon-footer-5.png" alt="profile icon" className="w-8 ml-1"/>
            <p className="text-2xl font-medium">Profile</p>
          </div>
        </Link>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-[#57BAAB] w-56 h-14 rounded-3xl">
              <p className="text-white text-2xl font-semibold">
                Post
              </p>
            </Button>
          </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <PostDetails/>
                </DialogDescription>
              </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center pb-8">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>
              JB
            </AvatarFallback>
          </Avatar>
          <p className="text-base font-bold ml-2">Jude Beliingham</p>
          </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-9">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default LeftSidebar;