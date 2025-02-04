


export default function Footer() {
  return (
    <footer className="bg-[#001529] text-white py-8 px-6 md:px-40">
    <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-4">About Us</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
        Welcome to  Note Box BD! Your hub for books, arts & crafts, stationery, and classroom essentials. We provide premium tools to spark creativity and boost productivity—perfect for students, teachers, and artists. Let’s make brilliance happen! ✏️📚✨
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            Pen
          </li>
          <li>
           Color Paper
          </li>
          <li>
            Books
          </li>
          <li>
            Color Pencils
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 text-sm">
            <span className="font-semibold">Email:</span>{" "}
            noteboxbd@gmail.com
          </li>
          <li className="text-gray-300 text-sm">
            <span className="font-semibold">Phone:</span> +880 123456789
          </li>
          <li className="text-gray-300 text-sm">
            <span className="font-semibold">Address:</span> 123/A, Dhaka, Bangladesh
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Note Box BD. All rights
        reserved.
      </p>
    </div>
  </footer>
  )
}
