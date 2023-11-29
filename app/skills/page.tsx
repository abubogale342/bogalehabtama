import Skills from '@/components/Skills'
import { Accordion, AccordionItem, Progress } from '@nextui-org/react'
import { genPageMetadata } from 'app/seo'
import tagData from 'app/tag-data.json'

export const metadata = genPageMetadata({
  title: 'Skills',
  description: 'Tech stacks I am familiar with',
})

export default async function Page() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Skills
          </h1>
        </div>
        <div className="w-full">
          <Skills />
        </div>
      </div>
    </>
  )
}
