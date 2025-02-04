import '../../styles/Card.css';

interface CardProps {
  image: string;
  title: string;
  price: string;
}

export default function Card({ image, title, price }: CardProps) {
  return (
    <div style={{ width: "100%" }} className="w-full">
      <div className=" card shadow-md ">
        <div  className="image_container ">
          <img className='w-52 h-52 mx-auto rounded-md shadow-md '  src={image} alt="" />
        </div>
        <div className="title text-xl">
          <span>{title}</span>
        </div>
        {/* <div className="size ">
          <span>{size}</span>
          <ul className="list-size ">
            <li className="item-list bg-primary"><button className="item-list-button ">37</button></li>
            <li className="item-list bg-primary"><button className="item-list-button">38</button></li>
            <li className="item-list"><button className="item-list-button">39</button></li>
            <li className="item-list"><button className="item-list-button">40</button></li>
            <li className="item-list"><button className="item-list-button">41</button></li>
          </ul>
        </div> */}
        <div className="action">
          <div className="price">
            <span>{price}</span>
          </div>
          <button className="cart-button bg-primary">
            <svg
              className="cart-icon"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>

    </div>
  )
}
