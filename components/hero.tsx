import Link from 'next/link'
import Carousel from './carousel'
import { Button } from './ui/button'

const Hero = () => {
	return (
		<div className='relative w-full h-[90vh]'>
			{/* Tło z opacity */}
			<div className='absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none'></div>

			{/* Swiper */}
			<Carousel />

			{/* Tekst na wierzchu */}
			<div className='absolute inset-0 z-20 px-6 md:px-12 pointer-events-none'>
				<div className=' mx-auto text-left flex justify-center items-start h-full flex-col  text-white   max-w-screen-2xl gap-6'>
					<h1 className=' font-heading md:w-1/2 text-4xl md:text-6xl leading-[1.5]'>
						Eksperci w 
						Transporcie i Spedycji
					</h1>
					<p className=' md:w-1/2 font-light md:text-lg'>
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
