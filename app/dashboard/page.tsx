import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className=" max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        dashboard
          <br className="hidden sm:inline" />
        </h1>
      </div>
      <div className=" gap-4">

      </div>
    </section>
  )
}
