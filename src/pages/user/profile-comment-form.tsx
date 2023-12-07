import { Link } from "react-router-dom";

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
  } from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const ProfileCommentForm = () => {
  return (
    <div>
      <div className="grid grid-cols-6 pb-2">
        <div className="col-start-2 col-span-4 py-5">
          <Link to="/story-details">View more comments</Link>
        </div>
        <div className="col-start-2">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>DN</AvatarFallback>
          </Avatar>
        </div>
          <div className="col-span-4 text-black">

            <div className="flex justify-between items-center mr-12">
              <div>
                <h4 className="text-base font-bold">Darwin Nunez</h4>
                <p className="text-xs">05 Desember 2023 at 20.01</p>
              </div>

              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <img src="src/assets/icon-8.png" alt="dropdown icon" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mr-24 mt-2">
                    <DropdownMenuItem className="gap-3">
                      <img src="src/assets/icon-10.png" alt="delete icon" />
                      <p className="text-base font-medium text-black">Delete</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p className="w-96 text-sm font-light py-2 pr-7">
              Kelas capt manyala ee!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-start-2">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-4 text-black">
            <h4 className="text-base font-bold">Jude Bellinghem</h4>
            <input
              type="text"
              placeholder="Add a comment..."
              className="text-black text-base font-light focus:outline-none focus:border-[desiredColor]"
              />
            </div>
          </div>
      </div>
  )
}

export default ProfileCommentForm;