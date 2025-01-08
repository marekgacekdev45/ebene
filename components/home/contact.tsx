import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { ProfileForm } from '@/components/contact-form'
import Heading from '@/components/heading'

const Contact = () => {
	return (
		<section id='kontakt' className='section !pb-6  relative space-y-20'>
			{/* contact cards */}
			<div className='wrapper grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-6 '>
				<Link href='#' className='contact-card group'>
					<Phone className='contact-card__icon' />
					<div className='text-center'>
						<h3 className='heading !text-2xl'>Telefon</h3>
						<p className='contact-card__text'>+48 500 499 600</p>
					</div>
				</Link>

				<div className='contact-card group'>
					<MapPin className='contact-card__icon' />
					<div className='text-center'>
						<h3 className='heading !text-2xl'>Adres</h3>
						<p className='contact-card__text'>
							Aleja Komisji Edukacji Narodowej 47/175
							<br />
							02-797 Warszawa
						</p>
					</div>
				</div>

				<Link href='#' className='contact-card group'>
					<Mail className='contact-card__icon' />
					<div className='text-center'>
						<h3 className='heading !text-2xl'>Mail</h3>
						<p className='contact-card__text'> ebene@ebene.com.pl </p>
					</div>
				</Link>
			</div>

			{/* map */}
			<div className='max-w-screen-2xl mx-auto'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d313413.6733831957!2d21.05274!3d52.14261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192d78c85f3281%3A0x8d0776e2b31c06ea!2sAleja%20Komisji%20Edukacji%20Narodowej%2047%2F175%2C%2002-797%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sus!4v1736326593090!5m2!1sen!2sus'
					width='600'
					height='450'
					style={{ border: '0' }}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					title='Google Map'
					className='w-full'></iframe>
			</div>

			{/* form */}
			<div className='grid grid-cols-1 md:grid-cols-2 wrapper gap-12 !max-w-screen-lg'>
				<div className='space-y-6 xl:mr-16'>
					<Heading preheading='Kontakt' heading='Skontaktuj się z Nami' />

					<p className='text'>
						Zachęcamy do kontaktu z naszym zespołem, aby omówić Twoje potrzeby transportowe, spedycyjne i logistyczne.
					</p>
					<p className='text'>
						Niezależnie od tego, czy potrzebujesz wyceny, informacji o naszych usługach, czy wsparcia w realizacji
						zleceń, jesteśmy do Twojej dyspozycji.
					</p>
				</div>
				<ProfileForm />
			</div>
		</section>
	)
}

export default Contact
