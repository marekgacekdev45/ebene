import Image from 'next/image'

interface Offer {
  id: number
  image: string
  title: string
  description: string
}

const OfferCard = ({ offer: { image, title, description } }: { offer: Offer }) => {
  return (
    <div className='border-b shadow-md border-b-accent'>
      <Image src={image} alt={title} width={300} height={200} className='w-full object-cover min-h-[275px]' />
      <div className='py-10 px-6 flex flex-col justify-center items-center text-center gap-4 '>
        <h3 className='heading !text-2xl !font-semibold'>{title}</h3>
        <p className='text'>{description}</p>
      </div>
    </div>
  )
}

export default OfferCard
