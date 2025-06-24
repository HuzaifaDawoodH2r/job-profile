import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
    <div className=" bg-black/100 -mb-20 py-6 flex  sm:py-32">
    <div className="relative py-3 ml-11 sm:max-w-xl">
        <div
            className="absolute inset-0 bg-gradient-to-r from-blue-950 to-purple-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="text-white relative px-4 py-10 bg-indigo-950 shadow-lg sm:rounded-3xl sm:p-10">

            <div className="text-center pb-6">
                <h1 className="text-3xl">Contact Us!</h1>

                <p className="text-gray-300">
                    Fill up the form below to send us a message.
                </p>
            </div>

            <form>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Name" name="name"/>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" placeholder="Email" name="email"/>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Subject" name="_subject"/>

                <textarea
                        className="shadow mb-4 min-h-0 appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       placeholder="Type your message here..." name="message" ></textarea>

                <div className="flex justify-between">
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Send ➤"/>
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="reset"/>
                </div>

            </form>
        </div>
    </div>

    <div className="rounded-lg w-[30rem] overflow-hidden ml-24">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" loading="lazy"></iframe>
                </div>
</div>
</section>
  )
}

export default Contact