'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import { FaEye } from 'react-icons/fa'
import Link from 'next/link'

const Document = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <>
      <Link
        className="absolute -bottom-4 z-10 flex w-full items-center justify-center gap-2.5 rounded-md bg-gray-900 py-1.5 text-base font-medium text-white lg:rounded-none"
        href={`/document.pdf`}
        target="_blank"
      >
        View Resume <FaEye size={22} />
      </Link>
      <div className="hidden h-4 rounded-md shadow-md drop-shadow-md lg:block lg:h-44">
        <Worker workerUrl="/pdf.worker.js">
          <Viewer fileUrl="/document.pdf" plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
      <div className="mb-5"></div>
    </>
  )
}

export default Document
