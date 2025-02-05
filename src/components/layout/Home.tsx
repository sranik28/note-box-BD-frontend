import Banner from "../home/Banner";
import Categories from "../home/Categories";
import NewArrival from "../home/NewArrival";
import Product from "../home/Product";
import Reviews from "../home/Reviews";
import Services from "../home/Service";



export default function Home() {


  return (
    <>
      <Banner />
      <NewArrival />
      <Categories />
      <Product/>
      <Reviews />
      <Services />
    </>
  )
}
