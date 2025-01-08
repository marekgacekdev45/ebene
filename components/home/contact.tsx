import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { ProfileForm } from '../contact-form'

const Contact = () => {
	return (
		<section id='kontakt' className='mt-12 my-6 lg:mt-24 lg:mb-12 py-12  relative space-y-24'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-6 max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0'>
				<Link
					href='#'
					className='shadow-lg  flex flex-col justify-center items-center border-b border-accent py-6 group gap-3'>
					<Phone className='text-accent size-10 group-hover:scale-105 duration-150' />
					<div className='text-center'>
						<h3 className='heading !text-2xl'>Telefon</h3>
						<p className='group-hover:text-accent duration-150'>+48 500 499 600</p>
					</div>
				</Link>

				<div className='shadow-lg  flex flex-col justify-center items-center border-b border-accent py-6 group gap-3'>
					<MapPin className='text-accent size-10 group-hover:scale-105 duration-150' />
					<div className='text-center'>
						<h3 className='heading !text-2xl'>Adres</h3>
						<p className='group-hover:text-accent duration-150'>
							Aleja Komisji Edukacji Narodowej 47/175
							<br />
							02-797 Warszawa
						</p>
					</div>
				</div>

				<Link
					href='#'
					className='shadow-lg  flex flex-col justify-center items-center border-b border-accent py-6 group gap-3'>
					<Mail className='text-accent size-10 group-hover:scale-105 duration-150' />
					<div className='text-center'>
						<h3 className='heading !text-2xl'>Mail</h3>
						<p className='group-hover:text-accent duration-150'> ebene@ebene.com.pl </p>
					</div>
				</Link>
			</div>

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

			<div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-12 px-6 md:px-12 2xl:px-0'>
				<div className='space-y-6 xl:mr-32'>
					<p className='preheading'>Kontakt</p>
					<h2 className='heading'>Skontaktuj się z Nami</h2>
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
