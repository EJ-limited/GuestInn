import React from 'react'

function Contactpage() {
  return (
    <div className="container my-24 p-3 px-6 bg-black mx-auto">

   
    <section className="mb-32 p-2 text-white-800">
      <div className="flex flex-wrap">
        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <h2 className="text-3xl text-white font-bold mb-6">Contact us</h2>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
          </p>
          <p className="text-white mb-2">New York, 94126, United States</p>
          <p className="text-white mb-2">+ 01 234 567 89</p>
          <p className="text-white mb-2">info@gmail.com</p>
        </div>
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <form>
            <div className="form-group mb-6">
              <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-black
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput7"
                placeholder="Name"/>
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-black
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-black focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput8"
                placeholder="Email address"/>
            </div>
            <div className="form-group mb-6">
              <textarea className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none
              " id="exampleFormControlTextarea13"  placeholder="Message"></textarea>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm first-letter: 
                 bg-white checked:bg-yellow-600 checked:border-yelllow-600 focus:outline-none transition duration-200
                  mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87" checked/>
              <label className="form-check-label inline-block text-yellow-800" htmlFor="exampleCheck87">Send me a copy of this
                message</label>
            </div>
            <button type="submit" className="
              w-full
              px-6
              py-2.5
              bg-yellow-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-yellow-700 hover:shadow-lg
              focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-yellow-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">Send</button>
          </form>
        </div>
      </div>
    </section>
   
  
  </div>
  )
}

export default Contactpage
