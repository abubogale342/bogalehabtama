import Contact from '@/components/Contact'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <>
      <Contact />
    </>
  )
}
