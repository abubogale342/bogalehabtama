'use client'

import axios from 'axios'
import { FormEvent, useState } from 'react'
import { Card, Spinner } from '@nextui-org/react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState({
    touched: false,
    state: false,
    loading: false,
  })

  const sendEmailHn = (event: FormEvent) => {
    event.preventDefault()
    setSuccess({ touched: true, state: false, loading: true })

    axios
      .post('api/email', { name, email, message })
      .then(() => {
        setSuccess({ touched: true, state: true, loading: false })
        setTimeout(() => {
          setSuccess({ touched: false, state: false, loading: false })
        }, 20_000)
      })
      .catch(() => {
        setSuccess({ touched: true, state: false, loading: false })
        setTimeout(() => {
          setSuccess({ touched: false, state: false, loading: false })
        }, 20_000)
      })
  }

  return (
    <>
      <div className="mb-1 space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
        <hr className="mb-2 opacity-20" />
      </div>

      <Card className="rounded-b-none">
        <div className="-mx-4 flex flex-wrap">
          <div
            className="wow fadeInUp w-full rounded-md px-8 pt-11 sm:p-[55px] lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <p className="mb-10 text-lg leading-7 text-gray-700 dark:text-gray-300">
              I will get back to you ASAP via email.
            </p>
            <form onSubmit={sendEmailHn}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="border-blue-100 w-full rounded-md border border-transparent border-t-gray-200 px-6 py-3 text-base text-body-color placeholder-body-color shadow-one drop-shadow-sm focus-visible:shadow-none dark:border-t-transparent dark:bg-gray-950 dark:shadow-signUp"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="border-blue-100 w-full rounded-md border border-transparent border-t-gray-200 px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none drop-shadow-sm focus:border-none focus-visible:shadow-none dark:border-t-transparent dark:bg-gray-950 dark:shadow-signUp"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Enter your message"
                      className="border-blue-100 w-full resize-none rounded-md border border-transparent border-t-gray-200 px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none drop-shadow-sm focus-visible:shadow-none dark:border-t-transparent dark:bg-gray-950 dark:shadow-signUp"
                    ></textarea>
                  </div>
                </div>

                {!success.state && success.touched && !success.loading && (
                  <div className="relative h-0.5 w-full">
                    <p className="text-centre absolute bottom-2 left-5 right-10 w-full text-base font-medium text-danger-400">
                      Your email is not sent, try again.
                    </p>
                  </div>
                )}

                {success.state && success.touched && !success.loading && (
                  <div className="relative h-0.5 w-full">
                    <p className="text-centre absolute bottom-2 left-5 right-10 w-full text-base font-medium text-success-500">
                      Your email is sent successfully.
                    </p>
                  </div>
                )}

                <div className="w-full px-4">
                  <button
                    disabled={success.loading}
                    type="submit"
                    className="border-blue-100 relative rounded-md border bg-[#000] px-10 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp dark:bg-white dark:text-[#000]"
                  >
                    Send message
                    {success.loading && (
                      <Spinner size="sm" color="success" className="absolute bottom-1/3 right-3" />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </>
  )
}
