import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";

const StoryDetails = () => {
  return (
    <div className="w-full h-96 bg-white font-poppins items-center justify-center rounded-xl overflow-y-auto">
      <div className="flex mx-auto items-center h-14 bg-[#FAFAFA]">
        <p className="mx-auto text-base font-semibold text-black">Jude's Post</p>
      </div>

      <div className="grid grid-cols-6 pt-7">
        <div className="flex justify-end pr-3">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-5 text-black">
          <h4 className="text-base font-bold">Jude Bellingham</h4>
          <p className="text-xs">05 Desember 2023 at 19.21</p>
          <p className="w-full text-base font-light py-2">
            Hola Madridistas! It is the proudest day of my life to join the greatest club in the history of the game. I will give absolutely everything I have to help this team win. Thank you for the amazing welcome. HALA MADRID!!!
          </p>
          <img src="/src/assets/post-image.png" alt="post-image" className="pb-5 w-[475px] h-[338px]"/>
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className="col-start-2">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>DN</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-4 text-black">
          <h4 className="text-base font-bold">Darwin Nunez</h4>
          <p className="text-xs">05 Desember 2023 at 20.01</p>
          <p className="w-full text-base font-light py-2 pr-7">
            Kelas capt, manyala ee!
          </p>
        </div>
      </div>

        <div className="grid grid-cols-6 pb-5">
          <div className="col-start-2">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-4 text-black">
            <h4 className="text-base font-bold">Jude Bellingham</h4>
            <input
              type="text"
              placeholder="Add a comment..."
              className="text-black text-base font-light focus:outline-none focus:border-[desiredColor]"
              />
            </div>
          </div>
        <div className="flex mx-auto items-center justify-between h-14 bg-[#FAFAFA]">
        </div>
    </div>
  )
}

export default StoryDetails;