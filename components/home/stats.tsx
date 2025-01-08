import Image from 'next/image'

import Counter from '@/components/counter'

import Background from '@/public/ebene-background-statystyki.webp'

const Stats = () => {
	return (
		// <section className='mt-12 my-6 lg:mt-24 lg:mb-12 py-24  relative'>
		<section className='section relative py-32 '>
			<Image
				src={Background}
				alt='tło statystyki | Ebene Transport i Spedycje'
				width={1920}
				height={320}
				className='absolute inset-0 -z-20 w-full h-full object-cover'
				placeholder='blur'
				quality={60}
			/>

			<div className='bg-black inset-0 absolute -z-10 opacity-50 pointer-events-none'></div>

			<div className='wrapper mx-auto flex flex-col xl:flex-row justify-center items-center gap-12 xl:gap-0  '>
				<div className='xl:w-[30%]'>
					<h2 className='heading text-white text-center xl:text-left '>Nasza firma w liczbach</h2>
				</div>

				<div className='xl:w-[70%]  grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-0'>
					<Counter target={50000} prefix='+' text='Ukończonych przewozów' speed={10} step={100} />
					<Counter target={19} prefix='+' text='Obsługiwanych krajów' speed={100} />
					<Counter target={100} suffix='%' text='Zadowolonych klientów' />
				</div>
			</div>
		</section>
	)
}

export default Stats
