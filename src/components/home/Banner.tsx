import BannerRight from "../ui/BannerRight";
import BannerSlider from "../ui/BannerSlider";



export default function Banner() {
  return (
    <div className="container flex flex-col gap-4 mb-10  md:flex-row  pt-4">
      <div className="h-[160px] md:h-80 lg:h-[450px] lg:w-8/12 w-full bg-gray-300 rounded-md overflow-hidden shadow-lg">
        <BannerSlider />
      </div>
      <div className="hidden lg:block h-80 lg:h-[450px] md:w-4/12 w-full bg-gray-300 rounded-md overflow-hidden shadow-lg">
        <BannerRight />
      </div>
    </div>
  )
}
