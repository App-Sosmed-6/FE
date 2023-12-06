import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
  } from "@/components/ui/avatar";

const StoryForm = () => {
  return (
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
      <p className="w-full text-base font-light py-2">
        Hola Madridistas! It is the proudest day of my life to join the greatest club in the history of the game. I will give absolutely everything I have to help this team win. Thank you for the amazing welcome. HALA MADRID!!!
      </p>
      <img src="/src/assets/post-image.png" alt="post-image" className="pb-5 w-[475px] h-[338px]"/>
    </div>
  </div>
  )
}

export default StoryForm;