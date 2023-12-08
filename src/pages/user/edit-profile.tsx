import { Link } from "react-router-dom";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";

  import { Button } from "../../components/ui/button";
  
  const EditProfile = () => {
    return (
      <div className="border-b border-gray-300">
        <div className="flex items-center gap-7 border-b border-gray-300 pl-8">
            <Link to="/">
                <img src="src/assets/icon-7.png" alt="back icon" />
            </Link>
            <p className="text-center py-3 text-base font-medium">
                Jude Bellingham
            </p>
        </div>

        <div className="w-full h-36 bg-slate-500"></div>

        <div className="flex justify-between items-center -mt-16 py-4 px-4">
            <div className="flex items-center">
                <Avatar className="w-28 h-28">
                    <AvatarImage src="#" />
                    <AvatarFallback>JB</AvatarFallback>
                </Avatar>
                <div className="mt-10">
                    <p className="ml-6 whitespace-nowrap text-base font-bold">Jude Bellingham</p>
                    <p className="ml-6 whitespace-nowrap text-xs font-normal">judebellingham@gmail.com</p>
                </div>
            </div>
            <Button className="bg-[#57BAAB] w-20 h-9 rounded-3xl mt-10 text-xs">Edit Profile</Button>
        </div>
      </div>
    )
  }
  
  export default EditProfile;