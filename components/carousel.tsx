'use client'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

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
				className='w-full h-[90vh] relative flex justify-center items-center'>
				<SwiperSlide>
					<Image src='/hero-1.jpeg' alt="daas" width={1920} height={720} className='w-full h-full object-cover' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/hero-2.jpeg' alt="daas" width={1920} height={720} className='w-full h-full object-cover' />
				</SwiperSlide>

				
				
				
			</Swiper>
		</>
	)
}


export default Carousel