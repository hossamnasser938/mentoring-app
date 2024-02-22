import React, { useState } from 'react';

import { usePostUserMessageMutation } from '../../state/apiSlice';

export default function UserMessagesHomeSection() {
  const [postUserMessage,
    {  isSuccess }] = usePostUserMessageMutation();
  const [formData, setFormData] = useState(
    {
      name: '',
      phoneNumber: "",
      email: "",
      message: "",
    }
  )

  const [attemptedSubmit, setAttemptedSubmit] = useState(false);


  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData(prevValue => ({ ...prevValue, [name]: value }))
  }


  async function handleSubmit(event) {
    event.preventDefault();
    setAttemptedSubmit(true);

    try {
      const isFormValid = formData.name && formData.phoneNumber && formData.email && formData.message;

      if (!isFormValid) {
        return;
      }
      await postUserMessage(formData).unwrap().then(response => {
        // Handle success response
        console.log('Message sent successfully', response);
        setAttemptedSubmit(false);
      })

      setFormData({
        name: '',
        phoneNumber: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  }
  return (
    < div >
      <section className="pb-20 relative block bg-blueGray-800">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Build something</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Put the potentially record low maximum sea ice extent tihs year down to low ice.
                According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Excelent Services</h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Grow your market</h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Launch time</h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        value={formData.name}
                        onChange={handleFormData}
                        name='name'
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                      {attemptedSubmit && !formData.name && (
                        <div className=' bg-red-300 my-2 py-3 text-white font-bold'>
                          this field is required

                        </div>
                      )}
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="phone-Number"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={formData.phoneNumber}
                        onChange={handleFormData}
                        name='phoneNumber'
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone Number"
                      />
                      {attemptedSubmit && !formData.phoneNumber && (
                        <div className=' bg-red-300 my-2 py-3 text-white font-bold'>
                          this field is required

                        </div>
                      )}
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleFormData}
                        name='email'

                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                      {attemptedSubmit && !formData.email && (
                        <div className=' bg-red-300 my-2 py-3 text-white font-bold'>
                          this field is required

                        </div>
                      )}
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        name='message'
                        onChange={handleFormData}
                        value={formData.message}

                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                      {attemptedSubmit && !formData.message && (
                        <div className=' bg-red-300 my-2 py-3 text-white font-bold'>
                          this field is required

                        </div>
                      )}
                    </div>
                  </form>
                  <div className="text-center mt-6">
                    {!attemptedSubmit && isSuccess &&
                      (<div className=' fade-to-white my-2 py-3 text-white font-bold'>
                        your  message has been successfully sent

                      </div>)


                    }



                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"

                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
