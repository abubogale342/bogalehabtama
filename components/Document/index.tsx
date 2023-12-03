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
        className="absolute bottom-0 right-0 z-10 flex items-center gap-1 rounded-lg bg-[#000] px-2.5 py-1.5 text-base font-medium text-white"
        href={`/document.pdf`}
        target="_blank"
      >
        View Resume <FaEye />
      </Link>
      <div className="hidden h-4 rounded-md border border-gray-200 dark:border-gray-700 lg:block lg:h-40">
        <Worker workerUrl="/pdf.worker.js">
          <Viewer fileUrl="/document.pdf" plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </>
  )
}

export default Document
