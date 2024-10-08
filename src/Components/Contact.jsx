import React from "react";

function Contact(){
    return<React.Fragment>
        <div className="mt-[2rem] h-auto flex justify-center items-center overflow-hidden ">
            <div className="w-[50vw] quries_img">
                <img className="object-cover w-[50vw] h-[30rem] quries_img " src="Hero_Images/contact_.avif" alt="" />
            </div>
            <div className="flex justify-center items-center w-[50vw] overflow-hidden bg-gray-100 quries_form">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full ">
                    <h2 className="text-3xl font-bold mb-8 text-center overflow-hidden text-[#2F2BF6]">Submit your response?</h2>

                <form className="space-y-6">
                {/* First Row: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                    type="text"
                    placeholder="Name"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                    <input
                    type="email"
                    placeholder="E-mail address"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                </div>

                {/* Second Row: Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                    type="text"
                    placeholder="Phone"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                    <select className="p-4 border border-gray-300 rounded-lg w-full">
                    <option value="" disabled selected>
                        Subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    </select>
                </div>

                {/* Third Row: Message */}
                <div>
                    <textarea
                    placeholder="Message"
                    rows="4"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-[#2F2BF6] text-white font-semibold py-2 px-5 rounded-lg w-full md:w-auto send_message"
                    >
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </React.Fragment>
}
export default Contact;