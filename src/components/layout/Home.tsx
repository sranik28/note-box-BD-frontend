import Banner from "../home/Banner";
import Categories from "../home/Categories";
import NewArrival from "../home/NewArrival";
import CardSlider from "../ui/CardSlider";


export default function Home() {
  return (
    <>
      <Banner />
      <NewArrival/>
      <CardSlider />
      <Categories/>
    </>
  )
}
