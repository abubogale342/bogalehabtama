import Skills from '@/components/Skills'
import siteMetadata from '@/data/siteMetadata'
import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react'
import Projects from './projects/page'
import About from './about/page'
import Contact from '@/components/Contact'
import { FaEye } from 'react-icons/fa'
import Document from '@/components/Document'

export default function Home() {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Website Developer
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="py-2">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Front End Developer</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Specialized in</p>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Vanilla JavaScript</li>
              </ul>
            </CardBody>
          </Card>
        </div>
        <div className="w-full">
          <Skills />
        </div>
      </div>
      <div className="relative mt-7 h-40 w-full rounded-md border border-gray-200 dark:border-gray-700">
        <Document />
      </div>
      <Projects />
      <Contact />
      <About />
    </>
  )
}
