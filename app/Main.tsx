import Skills from '@/components/Skills'
import siteMetadata from '@/data/siteMetadata'
import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react'
import Projects from './projects/page'
import About from './about/page'
import Contact from '@/components/Contact'
import { BsArrowDown, BsDatabaseFillCheck } from 'react-icons/bs'
import { IoCodeSlashOutline } from 'react-icons/io5'
import { FcProcess } from 'react-icons/fc'
import Document from '@/components/Document'
import Link from 'next/link'

const services = [
  {
    category: 'Front End Development',
    lists: [
      'React/Next',
      'State Management (Redux)',
      'Responsive Design + Tailwind',
      'API Integration',
      'Build Tools (Webpack & Babel)',
    ],
    element: <IoCodeSlashOutline className="m-1 h-8 w-8" />,
  },
  {
    category: 'Back End Development',
    lists: [
      'Node',
      'Express',
      'Database Integration',
      'API Integration',
      'Authentication & Authorization',
    ],
    element: <FcProcess className="m-1 h-8 w-8" />,
  },
  {
    category: 'Database Design & Development',
    lists: [
      'SQL (MySQL, PostgreSQL)',
      'NoSQL (MongoDB & Elasticsearch)',
      'Data Design & Modeling',
      'ORMs (Sequelize)',
      'Configuration & Managment',
    ],
    element: <BsDatabaseFillCheck className="m-1 h-8 w-8" />,
  },
]

export default function Home() {
  return (
    <>
      <div>
        <div className="space-y-2 pb-1.5 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Full Stack Web Developer
          </h1>
          <p className="pb-5 text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}{' '}
          </p>
          <Link
            className="rounded-lg bg-[#000] px-4 py-2.5 text-base font-medium text-white dark:bg-white dark:text-black"
            href="/contact"
          >
            Get in touch
          </Link>
        </div>
        <hr className="mb-5 ml-1 opacity-100 dark:opacity-30" />
        <p className="mb-2.5 flex items-center gap-2 text-2xl font-semibold leading-7 text-gray-700 dark:text-gray-300">
          Areas of Services <BsArrowDown size={32.5} /> <BsArrowDown size={32.5} />{' '}
          <BsArrowDown size={32.5} />
        </p>
        <div className="grid grid-cols-1 gap-3 py-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-3">
          {services.map((service, index) => (
            <Card className="max-w-[400px]" key={index}>
              <CardHeader className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-white dark:bg-dark">{service.element}</div>
                <div className="flex flex-col">
                  <p className="text-md">{service.category}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="ml-6 list-disc">
                  {service.lists.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="w-full">
          <Skills />
        </div>
      </div>
      <div className="relative mt-7 w-full">
        <Document />
      </div>
      <Projects />
      <Contact />
      <About />
    </>
  )
}
