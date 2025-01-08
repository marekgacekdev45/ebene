import { OfferItem } from '@/app/utils/interface'

import Image from 'next/image'

const OfferCard = ({ offer: { image, title, description } }: { offer: OfferItem }) => {
	return (
		<div className='border-b shadow-md border-b-accent'>
			<Image
				src={image}
				alt={title}
				width={340}
				height={275}
				className='w-full object-cover min-h-[275px]'
				quality={60}
			/>
			<div className='py-10 px-6 flex flex-col justify-center items-center text-center gap-4 '>
				<h3 className='heading !text-2xl !font-semibold'>{title}</h3>
				<p className='text'>{description}</p>
			</div>
		</div>
	)
}

export default OfferCard
