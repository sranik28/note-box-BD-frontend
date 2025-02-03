import Card from "../ui/Card";
import SectionHeader from "../ui/SestionHeader";
import test from '../../assets/banner/pen-notebook-near-stationery.jpg';


export default function NewArrival() {
  return (
    <div style={{ marginTop: "50px" , marginBottom: "50px" }} className="container ">
      <SectionHeader title="New Arrival" />
      <div>
       <Card image={test} title="Note book" price="$10" size="Size "/> 
      </div>
    </div>
  )
}
