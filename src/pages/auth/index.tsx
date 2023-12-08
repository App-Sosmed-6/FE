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
import { Form, FormField } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import {
  LoginSchema,
  RegisterSchema,
  loginSchema,
  registerSchema,
} from "@/utils/apis/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLogin, postRegister } from "@/utils/apis/auth/api";
import CustomFormField from "@/components/ui/custom-field";

const HeroSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const formRegist = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nama: "",
      username: "",
      password: "",
      email: "",
      gender: "",
      retypePassword: "",
    },
  });

  const handleLogin = async (data: LoginSchema) => {
    try {
      const result = await postLogin(data);
      console.log(result.data.token);
      const token = result.data.token;
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegist = async (data: RegisterSchema) => {
    try {
      const result = await postRegister(data);
      console.log(result.message);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen font-poppins text-blue1">
      <div className="hidden md:flex flex-row items-center justify-center">
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleLogin)}>
                    <div className="flex flex-col gap-1 p-10">
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Email
                      </p>
                      <CustomFormField control={form.control} name="email">
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="email"
                            placeholder="Email"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Password
                      </p>
                      <CustomFormField control={form.control} name="password">
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="password"
                            placeholder="Password"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                    </div>
                    <DialogFooter className="sm:justify-center">
                      <Button
                        type="submit"
                        className="bg-green2 text-white w-full md:w-44 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                      >
                        Login
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
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
                <Form {...formRegist}>
                  <form onSubmit={formRegist.handleSubmit(handleRegist)}>
                    <div className="flex flex-col gap-1 py-1 px-10">
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Username
                      </p>
                      <CustomFormField
                        control={formRegist.control}
                        name="username"
                      >
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="username"
                            placeholder="Username"
                            disabled={formRegist.formState.isSubmitting}
                            aria-disabled={formRegist.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Email
                      </p>
                      <CustomFormField
                        control={formRegist.control}
                        name="email"
                      >
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="email"
                            placeholder="Email"
                            disabled={formRegist.formState.isSubmitting}
                            aria-disabled={formRegist.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Date of Birth
                      </p>
                      <CustomFormField
                        control={formRegist.control}
                        name="dateOfBirth"
                      >
                        {(field) => (
                          <div className="flex flex-row">
                            <Input
                              className="bg-green1"
                              id="day"
                              placeholder="Day"
                            />
                            <Input
                              className="bg-green1 mx-2"
                              id="month"
                              placeholder="Month"
                            />

                            <Input
                              className="bg-green1"
                              id="year"
                              placeholder="Year"
                            />
                          </div>
                        )}
                      </CustomFormField>
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Gender
                      </p>
                      <CustomFormField
                        control={formRegist.control}
                        name="gender"
                      >
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="gender"
                            placeholder="Gender"
                            disabled={formRegist.formState.isSubmitting}
                            aria-disabled={formRegist.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Password
                      </p>
                      <CustomFormField
                        control={formRegist.control}
                        name="password"
                      >
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="password"
                            placeholder="Password"
                            disabled={formRegist.formState.isSubmitting}
                            aria-disabled={formRegist.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                      <p className="md:text-left text-center font-semibold text-md text-blue1">
                        Retype Password
                      </p>
                      <CustomFormField
                        control={formRegist.control}
                        name="retypePassword"
                      >
                        {(field) => (
                          <Input
                            {...field}
                            className="bg-green1"
                            id="retype password"
                            placeholder="Retype Password"
                            disabled={formRegist.formState.isSubmitting}
                            aria-disabled={formRegist.formState.isSubmitting}
                          />
                        )}
                      </CustomFormField>
                    </div>
                    <DialogFooter className="sm:justify-center">
                      <Button
                        type="submit"
                        className="bg-green2 text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
                      >
                        Register
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="bg-green1 min-h-screen flex flex-col items-center justify-end md:rounded-bl-[100px]">
          <img src={logo} className=" hidden md:flex w-780 h-528 mb-20" />
        </div>
      </div>
      <div className="flex md:hidden flex-col">
        <div>post</div>
      </div>
    </div>
  );
};

export default HeroSection;
