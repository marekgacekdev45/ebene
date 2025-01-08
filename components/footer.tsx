import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FooterYear from './footer-year'

const Footer = () => {
    const currentYear = new Date().getFullYear()
	return (
		<footer className='bg-primary py-12 text-white'>
			<div className=' justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto gap-12 lg:gap-6 px-6 md:px-12 2xl:px-0'>
				<div className='sm:col-span-2 flex justify-center items-center sm:justify-start sm:justify-start'>
					<Link href='/' className='text-xl font-bold'>
						<Image src='/logo-light.png' alt='Ebene' width={160} height={32} />
					</Link>
				</div>

				<div className='space-y-4'>
					<p className='heading !text-xl text-center sm:text-left'>Kontakt</p>
					<ul className='space-y-4'>
						<li>
							<div className='flex flex-col sm:flex-row text-center sm:text-left justify-start items-center gap-2 text-sm'>
								<MapPin className='size-5 text-accent' />
								<span>
									Aleja Komisji <br />
									Edukacji Narodowej 47/175,
									<br /> 02-797 Warszawa
								</span>
							</div>
						</li>
						<li>
							<Link href='#' className='flex flex-col sm:flex-row text-center sm:text-left justify-start items-center gap-2 text-sm'>
								<Phone className='size-5 text-accent' />
								<span className='group-hover:text-accent duration-150'>+48 500 499 600</span>
							</Link>
						</li>
						<li>
							<Link href='#' className='flex flex-col sm:flex-row text-center sm:text-left justify-start items-center gap-2 text-sm'>
								<Mail className='size-5 text-accent' />
								<span className='group-hover:text-accent duration-150'>ebene@ebene.com.pl</span>
							</Link>
						</li>
					</ul>
				</div>

				<div className='space-y-4'>
					<p className='heading !text-xl text-center sm:text-left'>Menu</p>
					<nav>
						<ul className='space-y-4 flex flex-col justify-center items-center sm:flex-start sm:items-start'>
							<li>
								<Link
									href='#o-nas'
									className='flex justify-start items-center gap-2 text-sm hover:text-accent duration-150'>
									O nas
								</Link>
							</li>
							<li>
								<Link
									href='#oferta'
									className='flex justify-start items-center gap-2 text-sm hover:text-accent duration-150'>
									Oferta
								</Link>
							</li>
							<li>
								<Link
									href='#kontakt'
									className='flex justify-start items-center gap-2 text-sm hover:text-accent duration-150'>
									Kontakt
								</Link>
							</li>
							<li>
								<Link
									href='/polityka-prywatnosci'
									className='flex justify-start items-center gap-2 text-sm hover:text-accent duration-150'>
									Polityka prywatności
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className='border-t max-w-screen-xl mx-auto border-t-gray-500 mt-12 pt-12 flex justify-between items-center px-6 md:px-12 2xl:px-0'>
            <span className='text text-sm'>© {currentYear} Ebene</span>
				<Link href='#' className='text-sm'>
					<Image src='/marketingmix.png' alt='marketingmix' width={125} height={50} />
				</Link>
			</div>
		</footer>
	)
}

export default Footer
