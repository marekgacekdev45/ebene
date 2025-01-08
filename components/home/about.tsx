import { MonitorCog, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
	return (
		<section className='max-w-screen-xl mx-auto py-24 grid grid-cols-2 gap-12'>
			<div className='relative'>
				<Image src='/hero-1.jpeg' alt='about' width={600} height={600} className='aspect-square object-cover' />
				<Image
					src='/hero-1.jpeg'
					alt='about'
					width={350}
					height={350}
					className='aspect-square object-cover absolute -bottom-10 right-0 z-20 border-l-[15px] border-t-[15px] border-white shadow-lg'
				/>
			</div>

			<div className='space-y-6'>
				<p className='font-heading text-accent font-semibold'>O nas</p>
				<h2 className='font-heading font-medium text-5xl'>Twój Niezawodny Partner w Logistyce</h2>
				<p className='font-light'>
					Firma Ebene od wielu lat oferuje kompleksowe usługi w sektorze transportowym, spedycyjnym i logistycznym.
				</p>
				<p className='font-light'>
					Dzięki naszej długiej historii i tradycjom, zyskaliśmy zaufanie klientów przez profesjonalizm, terminowość i
					elastyczne podejście do każdego zlecenia. Nasz zespół ekspertów ciężko pracuje, aby każda współpraca
					przebiegała sprawnie i spełniała oczekiwania klientów.
				</p>
				<p className='font-light'>
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
