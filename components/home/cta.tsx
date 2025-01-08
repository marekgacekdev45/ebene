import Image from 'next/image'
import Link from 'next/link'

import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'

import Background from '@/public/ebene-background-cta.webp'

const CTA = () => {
	return (
		<section className='mt-12 my-6 lg:mt-24 lg:mb-12 py-24  relative'>
			<Image
				src={Background}
				alt='tło statystyki | Ebene Transport i Spedycje'
				width={1920}
				height={320}
				className='absolute inset-0 -z-20 w-full h-full object-cover'
				placeholder='blur'
				quality={60}
			/>

			<div className='bg-black inset-0 absolute -z-10 opacity-60 pointer-events-none'></div>

			<div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-12 xl:gap-6 z-10 px-12 text-white text-center'>
		
				<Heading preheading='Ebene' heading='Skorzystaj z usług Ebene juz dzisiaj' />

				<p className='text'>
					Dołącz do grona zadowolonych klientów Ebene i ciesz się niezawodnością oraz profesjonalizmem naszych usług
					transportowych, spedycyjnych i logistycznych. Nasz doświadczony zespół jest gotowy sprostać nawet najbardziej
					wymagającym zadaniom, zapewniając terminowość i bezpieczeństwo Twoich ładunków.
				</p>
				<p className='text'>
					Skontaktuj się z nami już teraz, aby uzyskać indywidualną wycenę i przekonać się, jak możemy usprawnić procesy
					logistyczne w Twojej firmie.
				</p>

				<Button asChild className='mt-6'>
					<Link href='/#kontakt'>Kontakt</Link>
				</Button>
			</div>
		</section>
	)
}

export default CTA
