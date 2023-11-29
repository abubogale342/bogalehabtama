'use client'

import { Accordion, AccordionItem, Progress } from '@nextui-org/react'
import tagData from 'app/tag-data.json'

export default function Skills() {
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

  return (
    <Accordion variant="splitted" className="w-full">
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
    </Accordion>
  )
}
