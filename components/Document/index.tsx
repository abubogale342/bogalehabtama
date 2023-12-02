'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { FaEye } from 'react-icons/fa'

const Document = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <>
      <a
        href={`/document.pdf`}
        target="_blank"
        className="absolute bottom-2.5 right-5 text-xl font-thin outline-none"
      >
        <span className="flex items-center gap-1 text-black">
          View Full Resume <FaEye />
        </span>
      </a>

      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <div className="h-40">
          <Viewer fileUrl="/document.pdf" plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </>
  )
}

export default Document
