import Navbar from "./navbar";
import Footer from "./footer";

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const Layout = () => {
  return (
    <div className="w-full h-screen bg-white font-poppins">
      <Navbar />

      <div>
        <p className="text-center py-3 text-base font-medium border-b border-gray-300">
          For you
        </p>
      </div>

      {/* post-form */}
      <div className="mx-auto flex container p-5 w-full border-b border-gray-300">
        <div className="w-full">
          <div className="flex pb-3">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <input
              type="text"
              placeholder="What is happening..."
              className="ml-6 text text-xl font-light border-transparent focus:outline-none focus:border-[desiredColor]"
            />
          </div>

          <div className="py-2">
            <Separator />
          </div>

          <div className="flex justify-between items-center py-4">
            <div className="flex">
              <img src="src/assets/icon-footer-4.png" alt="icon select image" className="w-6 h-6"/>
              <p className="ml-6 whitespace-nowrap">Select image...</p>
            </div>
            <Button className="bg-[#57BAAB] w-20 h-9 rounded-3xl">Post</Button>
          </div>
        </div>
      </div>

      {/* form story */}
      <div className="grid grid-cols-6 pt-7">
        <div className="flex justify-end pr-3">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-5 text-black">
          <h4 className="text-base font-bold">Jude Bellinghem</h4>
          <p className="text-xs">05 Desember 2023 at 19.21</p>
          <p className="w-80 text-base font-light py-2">
            Hola Madridistas! It is the proudest day of my life to join the greatest club in the history of the game. I will give absolutely everything I have to help this team win. Thank you for the amazing welcome. HALA MADRID!!!
          </p>
          <img src="/src/assets/post-image.png" alt="post-image" className="pb-5"/>
        </div>
      </div>

      {/* form comment */}
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4">
          <p className="py-5">View more comments</p>
        </div>
        <div className="col-start-2">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>DN</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-4 text-black">
          <h4 className="text-base font-bold">Darwin Nunez</h4>
          <p className="text-xs">05 Desember 2023 at 20.01</p>
          <p className="w-64 text-base font-light py-2">
            Hola Madridistas! It is the proudest day of my life to join the greatest club in the history of the game.
          </p>
        </div>
      </div>

      {/* form comment input */}
      <div className="grid grid-cols-6 pb-60">
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
          <div className="pt-5">
            <Separator className="w-80"/>
          </div>
        </div>
      </div>

      {/* Lift Sidebar */}
      <div className="w-285 h-1194 flex-shrink-0 border-r-1 border-solid border-[#D9D9D9] bg-[#FAFAFA]">
        <div className="p-4">
          {/* Fitur Profile */}
          <div className="mb-4">
            <p>Profile</p>
          </div>

          {/* Fitur Home */}
          <div className="mb-4">
            <p>Home</p>
          </div>

          {/* Button Post */}
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
