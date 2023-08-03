import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className=" max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Home
          <br className="hidden sm:inline" />
        </h1>
      </div>
      <div className=" gap-4">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.twitter className="h-5 w-5" />
            <span className="sr-only">twitter</span>
          </div>
        </Link>
      </div>
    </section>
  )
}
