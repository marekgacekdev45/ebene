import Link from 'next/link'
import Image from 'next/image'

import { Mail, MapPin, Phone } from 'lucide-react'

const Topbar = () => {
	return (
		<div className='bg-primary text-white py-3 text-sm'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<div className='flex flex-wrap items-center justify-center gap-4 lg:gap-7 text-xs font-light'>
					<div className='flex items-center text-center '>
						<MapPin size={16} className='mr-1 text-accent' />
						<span>Aleja Komisji Edukacji Narodowej 47/175, 02-797 Warszawa</span>
					</div>
					<Link href='tel:+48500499600' className='flex items-center group'>
						<Phone size={16} className='mr-1 text-accent' />
						<span className='group-hover:text-accent duration-150'>+48 500 499 600</span>
					</Link>
					<Link href='mailto:ebene@ebene.com.pl' className='flex items-center group'>
						<Mail size={16} className='mr-1 text-accent' />
						<span className='group-hover:text-accent duration-150'>ebene@ebene.com.pl</span>
					</Link>
				</div>
				<div className='hidden lg:flex items-center space-x-4'>
					<Image src='/pl.svg' alt='pl' width={16} height={16} />
					<Image src='/en.svg' alt='pl' width={16} height={16} />
				</div>
			</div>
		</div>
	)
}

export default Topbar
