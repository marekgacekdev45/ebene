import { MonitorCog, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
	return (
		<section id='o-nas' className='max-w-screen-xl mx-auto mt-12 mb-6 lg:mt-24 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 2xl:px-0'>
			<div className="relative max-w-[600px] max-h-[600px] mx-auto">
  <Image
    src="/hero-1.jpeg"
    alt="about"
    className="w-full h-full object-cover"
    width={600}
    height={600}
  />
  <Image
    src="/hero-1.jpeg"
    alt="about"
    className="hidden md:block absolute -bottom-10 right-0 w-[350px] h-[350px] object-cover border-l-[15px] border-t-[15px] border-white  z-20"
    width={350}
    height={350}
  />
</div>


			<div className='space-y-6'>
				<p className='preheading'>O nas</p>
				<h2 className='heading'>Twój Niezawodny Partner w Logistyce</h2>
				<p className='text'>
					Firma Ebene od wielu lat oferuje kompleksowe usługi w sektorze transportowym, spedycyjnym i logistycznym.
				</p>
				<p className='text'>
					Dzięki naszej długiej historii i tradycjom, zyskaliśmy zaufanie klientów przez profesjonalizm, terminowość i
					elastyczne podejście do każdego zlecenia. Nasz zespół ekspertów ciężko pracuje, aby każda współpraca
					przebiegała sprawnie i spełniała oczekiwania klientów.
				</p>
				<p className='text'>
					Jesteśmy dumni z naszej bogatej historii oraz zdolności do ustanawiania rynkowych standardów, dostarczając
					usługi o najwyższej jakości.
				</p>
				<div className='space-y-4 pt-4'>
					<div className='flex justify-start items-center gap-3'>
						<User className='text-accent size-10' />
						<h3 className='text-2xl font-semibold'>Indywidualne Podejście</h3>
					</div>
					<p className='font-light'>Każde zlecenie traktujemy indywidualnie, dostosowując nasze usługi do specyficznych potrzeb klientów.</p>
				</div>
				<div className='space-y-4 pt-4'>
					<div className='flex justify-start items-center gap-3'>
						<MonitorCog className='text-accent size-10' />
						<h3 className='text-2xl font-semibold'>Innowacyjne Technologie</h3>
					</div>
					<p className='font-light'>Korzystamy z nowoczesnych technologii, aby zapewnić efektywność i bezpieczeństwo naszych usług</p>
				</div>
			</div>
		</section>
	)
}

export default About
