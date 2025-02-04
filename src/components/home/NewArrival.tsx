
import CardSlider from "../ui/CardSlider";
import SectionHeader from "../ui/SestionHeader";
import note from '../../assets/new arrival/f9fc7155-1bed-4e40-b988-6d24407ca0e9.jpg';
import book from '../../assets/new arrival/0187201a-6bb4-4a47-8069-a9d1f97dc615.jpg';
import colorPen from '../../assets/new arrival/41915.jpg';
import colorPaper from '../../assets/new arrival/overhead-view-colorful-craftpapers.jpg';
import colorPencils from '../../assets/new arrival/group-colored-pencils-with-heart-shaped.jpg';


export default function NewArrival() {
  const newArrivalItems = [
    {
      id: "1",
      image: note,
      title: "Note book",
      price: "$10",

    },
    {
      id: "2",
      image: book,
      title: "pen",
      price: "$10",

    },
    {
      id: "3",
      image: colorPen,
      title: "Note book",
      price: "$10",

    },
    {
      id: "4",
      image: colorPen,
      title: "Note book",
      price: "$10",

    },
    {
      id: "5",
      image: colorPaper,
      title: "Color paper",
      price: "$5",

    },
    {
      id: "6",
      image: colorPencils,
      title: "Color pencils",
      price: "$60",

    },
  ]

  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }} className="container ">
      <SectionHeader title="New Arrival" />
      <CardSlider items={newArrivalItems} />
      <button className="py-2 px-4 text-white rounded-md mt-5 flex items-center justify-center mx-auto bg-primary">
        view all
      </button>
    </div>
  );
}