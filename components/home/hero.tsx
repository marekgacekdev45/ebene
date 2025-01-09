import Link from 'next/link'
import Carousel from '@/components/carousel'
import { Button } from '@/components/ui/button'

import HeroBg from '@/public/ebene-hero-1.webp'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className='relative w-full h-[80vh] sm:h-[90vh]'>
			<div className='hidden sm:flex'>
				<Carousel />
			</div>
			<Image
				src={HeroBg}
				alt='zdjęcie w tle | Ebene - Transport i Spedycja'
				width={648}
				height={500}
				className='w-full h-full object-cover sm:hidden'
				quality={50}
				priority
				sizes='100vw'
			/>

			<div className='bg-black inset-0 absolute z-10 opacity-50 pointer-events-none'></div>

			<div className='absolute inset-0 z-20 px-6 md:px-12 pointer-events-none'>
				<div className=' mx-auto text-left flex justify-center items-start h-full flex-col  text-white   max-w-screen-xl gap-6'>
					<h1 className='heading md:w-1/2 !text-4xl  md:!text-6xl  uppercase'>Eksperci w Transporcie i Spedycji</h1>
					<p className=' md:w-1/2 text md:!text-lg '>
						Firma Ebene od lat dostarcza kompleksowe usługi transportowe, spedycyjne i logistyczne na rynku krajowym i
						międzynarodowym. Dzięki doświadczeniu i zaangażowaniu, zdobyliśmy zaufanie klientów, oferując
						profesjonalizm, terminowość i elastyczność. Wybierając Ebene, masz pewność, że Twoje towary dotrą na czas, a
						proces logistyczny będzie zoptymalizowany.
					</p>
					<Button asChild className='pointer-events-auto'>
						<Link href='/#o-nas'>Dowiedz się więcej</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Hero
