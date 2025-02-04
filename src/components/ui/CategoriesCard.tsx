

type TCategoriesCard = {
    image: string
    title: string
}

export default function CategoriesCard({image, title}:TCategoriesCard) {
  return (
    <div className="my-12">
       <div>
        <img className='w-24 h-24 mx-auto' src={image} alt="" />
        <h3 className="text-center">{title}</h3>
        </div> 
    </div>
  )
}
