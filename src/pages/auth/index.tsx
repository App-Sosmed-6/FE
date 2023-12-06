import logo from "../../assets/main-image.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center h-screen font-poppins text-blue1">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center md:ml-32">
          <h1 className="md:text-left text-center font-bold text-[25px] md:text-[36px] w-[440px]">
            See what is happening in the world today
          </h1>
          <p className="md:text-left text-center font-semibold text-xl mt-9 mb-5">
            join us now.
          </p>
          <div className="flex flex-col justify-center">
            <Dialog>
              <DialogTrigger className="bg-green1 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform text-blue1 hover:text-white hover:scale-105">
                Login
              </DialogTrigger>
              <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
                <DialogHeader>
                  <DialogTitle className="mt-6 md:ml-10 font-bold text-center text-blue1 md:text-left text-lg md:text-2x1 lg:text-3xl">
                    Login
                  </DialogTitle>
                  <DialogDescription className="mt-2 md:mt-6 md:ml-10 text-blue1 md:text-left text-center text-sm md:text-base lg:text-lg">
                    Login to your account using email
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-1 p-10">
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Email
                  </p>
                  <Input className="bg-green1" id="email" placeholder="Email" />
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Password
                  </p>
                  <Input
                    className="bg-green1"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <DialogFooter className="sm:justify-center">
                  <Button
                    type="submit"
                    className="bg-green2 text-white w-full md:w-44 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
                  >
                    Login
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="flex py-5 items-center">
              <div className="flex w-36 border-t border-l-gray-900"></div>
              <span className="flex-shrink mx-4 text-blue1">or</span>
              <div className="flex w-36 border-t border-l-gray-900"></div>
            </div>
            <Dialog>
              <DialogTrigger className="bg-green2 font-semibold h-12 w-80 rounded-full text-xl transition duration-300 ease-in-out transform hover:text-white hover:scale-105">
                Register
              </DialogTrigger>
              <DialogContent className="w-full md:w-[80%] lg:w-[60%] md:h-[80%] lg:h-[85%]">
                <DialogHeader>
                  <DialogTitle className="mt-6 md:ml-10 font-bold text-center text-blue1 md:text-left text-md md:text-xl lg:text-2xl">
                    Register
                  </DialogTitle>
                  <DialogDescription className="mt-2 md:mt-6 md:ml-10 md:text-left text-center text-blue1 text-sm md:text-base lg:text-lg">
                    Register your account now to get full access
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-1 p-1">
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Username
                  </p>
                  <Input
                    className="bg-green1"
                    id="username"
                    placeholder="Username"
                  />
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Email
                  </p>
                  <Input className="bg-green1" id="email" placeholder="Email" />
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Date of Birth
                  </p>
                  <div className="flex flex-row">
                    <Input className="bg-green1" id="day" placeholder="Day" />
                    <Input
                      className="bg-green1 mx-2"
                      id="month"
                      placeholder="Month"
                    />
                    <Input className="bg-green1" id="year" placeholder="Year" />
                  </div>
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Gender
                  </p>
                  <Input
                    className="bg-green1"
                    id="gender"
                    placeholder="Choose One"
                  />
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Password
                  </p>
                  <Input
                    className="bg-green1"
                    id="password"
                    placeholder="Minimum 6 characters"
                  />
                  <p className="md:text-left text-center font-semibold text-md text-blue1">
                    Retype Password
                  </p>
                  <Input
                    className="bg-green1"
                    id="retype-password"
                    placeholder="Minimum 6 characters"
                  />
                </div>
                <DialogFooter className="sm:justify-center">
                  <Button
                    type="submit"
                    className="bg-green2 text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
                  >
                    Register
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="bg-green1 min-h-screen flex flex-col items-center justify-end md:rounded-bl-[100px]">
          <img src={logo} className=" hidden md:flex w-780 h-528 mb-20" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
