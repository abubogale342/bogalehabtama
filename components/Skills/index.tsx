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
      {/* <Accordion variant="splitted" className="w-full">
        {Object.keys(tagData).map((key, index) => {
          return (
            <AccordionItem key={index} aria-label={key} title={key} className="w-full">
              {Object.keys(tagData[key]).map((val, index) => (
                <Progress
                  key={`${val} ${index}`}
                  isStriped
                  color={getColors(tagData[key][val] * 10)}
                  label={val}
                  value={tagData[key][val] * 10}
                  className="my-2 w-full"
                />
              ))}
            </AccordionItem>
          )
        })}
      </Accordion> */}
      <div className="mb-10"></div>
      <Card>
        <CardBody>
          <p>
            <img
              className="w-full"
              src={`https://skillicons.dev/icons?i=${skillIcons}&theme=${theme}&perline=${getPerline()}`}
            />
          </p>
        </CardBody>
      </Card>
    </>
  )
}
