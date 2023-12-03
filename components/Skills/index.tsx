'use client'

import { Accordion, AccordionItem, Progress, Card, CardBody } from '@nextui-org/react'
import { skillIcons } from 'app/skills'
import tagData from 'app/tag-data.json'
import useWindowSize from 'hooks/use-windows-size'
import { useTheme } from 'next-themes'

export default function Skills() {
  const { theme } = useTheme()
  const { sm, md, lg, xl } = useWindowSize()

  const getColors = (value: number) => {
    if (value >= 82.5) {
      return 'success'
    } else if (value >= 75) {
      return 'secondary'
    } else if (value >= 68) {
      return 'warning'
    } else {
      return 'danger'
    }
  }

  const getPerline = () => {
    if (sm) return 5
    if (md) return 6
    if (lg) return 10
    if (xl) return 15
  }

  return (
    <>
      <div className="mb-10"></div>
      <Card>
        <CardBody>
          <p>
            <img
              alt=""
              className="w-full"
              src={`https://skillicons.dev/icons?i=${skillIcons}&theme=${theme}&perline=${getPerline()}`}
            />
          </p>
        </CardBody>
      </Card>
    </>
  )
}
