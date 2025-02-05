import CardSlider from "../ui/CardSlider";
import note from '../../assets/new arrival/f9fc7155-1bed-4e40-b988-6d24407ca0e9.jpg';
import book from '../../assets/new arrival/0187201a-6bb4-4a47-8069-a9d1f97dc615.jpg';
import colorPen from '../../assets/new arrival/41915.jpg';
import colorPaper from '../../assets/new arrival/overhead-view-colorful-craftpapers.jpg';
import colorPencils from '../../assets/new arrival/group-colored-pencils-with-heart-shaped.jpg';
import SectionHeader from "../ui/SestionHeader";
import { Link } from "react-router-dom";

export default function Product() {

    const productItems = [
        {
            id: "1",
            image: note,
            title: "Note book",
            price: "$10",
            discount: "5%",
        },
        {
            id: "2",
            image: book,
            title: "pen",
            price: "$10",
            discount: "5%",
        },
        {
            id: "3",
            image: colorPen,
            title: "Note book",
            price: "$10",
            discount: "5%",
        },
        {
            id: "4",
            image: colorPen,
            title: "Note book",
            price: "$10",
            discount: "5%",
        },
        {
            id: "5",
            image: colorPaper,
            title: "Color paper",
            price: "$5",
            discount: "5%",
        },
        {
            id: "6",
            image: colorPencils,
            title: "Color pencils",
            price: "$60",
            discount: "5%",
        },
    ]




    return (
        <div className="mt-20">
            <SectionHeader title="Product" />
            <div >
                <CardSlider items={productItems} />
                <Link to="/all-product">
                    <button className="py-2 px-4 text-white rounded-md mt-10 flex items-center justify-center mx-auto bg-primary">
                        view all
                    </button>
                </Link>
            </div>
        </div>
    )
}
