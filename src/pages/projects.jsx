import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'

import logo from '@/images/logos/logo.svg'
import image1 from '@/images/photos/1.JPG'
import image2 from '@/images/photos/4.PNG'
import image3 from '@/images/photos/6.jpg'
import image4 from '@/images/photos/7.jpg'
import image5 from '@/images/photos/12.jpg'
import image6 from '@/images/photos/8.jpg'
import image7 from '@/images/photos/2.png'
import image8 from '@/images/photos/3.png'
import image9 from '@/images/photos/5.jpg'
import image10 from '@/images/photos/9.jpg'
import image11 from '@/images/photos/10.png'
import image12 from '@/images/photos/11.png'
import image13 from '@/images/photos/13.jpg'
import image14 from '@/images/photos/14.jpg'
import image15 from '@/images/photos/15.jpg'
import image16 from '@/images/photos/16.jpg'
import image17 from '@/images/photos/17.jpg'
import image18 from '@/images/photos/18.jpg'
import image19 from '@/images/photos/19.jpg'
import image20 from '@/images/photos/20.jpg'
import image21 from '@/images/photos/21.jpg'
import image22 from '@/images/photos/22.jpg'
import image23 from '@/images/photos/23.jpg'
import image24 from '@/images/photos/24.jpg'
import image25 from '@/images/photos/25.png'
import image26 from '@/images/photos/26.png'
import image27 from '@/images/photos/27.jpg'
import image28 from '@/images/photos/28.png'
import image29 from '@/images/photos/29.jpg'
import image30 from '@/images/photos/30.jpg'



const projects = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: {
      href: 'https://www.instagram.com/p/CljZQW7uYkD/',
      label: 'Chirugien_237',
    },
    logo: logo,
    image: image1,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: 'https://www.instagram.com/p/Ci21DGmu2ss/', label: '' },
    logo: logo,
    image: image2,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: 'https://www.instagram.com/p/B7L2SNrl3Vd/', label: '' },
    logo: logo,
    image: image3,
  },
  {
    name: 'cosmOS',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image4,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image5,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image6,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image7,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image8,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image9,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image10,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image11,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image12,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image13,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image14,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image15,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image16,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image17,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image18,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image19,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image20,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image21,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image22,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image23,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image24,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image25,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image26,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image27,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image28,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image29,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.instagram.com/hd_illustration_237/', label: '' },
    logo: logo,
    image: image30,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Harvey Essaka</title>
        <meta
          name="description"
          content="Un ensemble de tout mes projets réalisés"
        />
      </Head>
      <SimpleLayout
        title="Un ensemble de tout mes projets réalisés"
        intro="Pour moi l'art est un moyen à moi de m'exprimer et également un moyen de vous exprimer"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}></Card.Link>
              </h2>
              <Image src={project.image} className="w-30 h-5/6" />
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"></p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
