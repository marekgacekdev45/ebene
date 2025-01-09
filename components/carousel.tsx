'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = ['/ebene-hero-1.webp', '/ebene-hero-2.webp', '/ebene-hero-3.webp']

const Carousel = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[EffectFade, Autoplay]}
				className='relative  flex justify-center items-center w-full h-[90vh] -z-20'>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<Image
							src={image}
							alt='zdjęcie w tle | Ebene - Transport i Spedycja'
							width={1920}
							height={1040}
							className='w-full h-full object-cover'
							quality={50}
							priority
							sizes="100vw"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Carousel
