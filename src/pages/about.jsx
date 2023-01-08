import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,

} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.PNG'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Harvey Essaka</title>
        <meta
          name="description"
          content=" Je m'appelle Harvey Essaka. Je vis à Douala, ville où je fais vivre mon art"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Je m'appelle Harvey Essaka. Je vis à Douala, ville où je fais
              vivre mon art
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Né à Douala en 2001, j'ai grandi dans une famille passionnée
                d'art et de culture. Dès mon plus jeune âge, j'ai été attiré par
                le dessin et la création, et j'ai passé de nombreuses heures à
                m'exprimer sur papier. 
              </p>
              <p>
                Bien que j'ai toujours été intéressé par
                l'art, je n'ai jamais suivi de formation spécifique et je me suis
                formé en autodidacte. Dès l'adolescence, J'ai commencé à
                publier mes oeuvres sur internet d'où instagram, et j'ai su rapidement gagné en
                popularité grâce à mon style original et coloré. Et je me suis
                ensuite professionnalisé et a commencé à travailler pour des
                clients divers, en réalisant des illustrations pour des
                magazines, des livres, des affiches et des portraits. Aujourd'hui, je suis assez
                reconnu comme l'un des illustrateurs les plus talentueux de la
                scène artistique de ma ville. Mon travail est apprécié pour mon
                univers imaginatif, poétique et comptenporrain, qui parle aux enfants comme aux
                adultes.
          
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/hd_illustration_237/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>

              <SocialLink
                href="mailto:harveydjombi16@icloud.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                harveydjombi16@icloud.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
