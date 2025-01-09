import { Feature } from '@/app/utils/interface'
import Image from 'next/image'

import Heading from '@/components/heading'
import FeatureItem from '@/components/feature-item'

import AboutImage from '@/public/ebene-o-nas-1.webp'
import AboutImage2 from '@/public/ebene-o-nas-2.webp'

const FeaturesList = [
	{
		id: 1,
		icon: 'User',
		title: 'Indywidualne Podejście',
		description:
			'Każde zlecenie traktujemy indywidualnie, dostosowując nasze usługi do specyficznych potrzeb klientów.',
	},
	{
		id: 2,
		icon: 'MonitorCog',
		title: 'Innowacyjne Technologie',
		description: 'Korzystamy z nowoczesnych technologii, aby zapewnić efektywność i bezpieczeństwo naszych usług',
	},
]

const About = () => {
	return (
		<section
			id='o-nas'
			// className='max-w-screen-xl mx-auto mt-12 mb-6 lg:mt-24 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 2xl:px-0'>
			className='section wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 lg:gap-12 '>
			<div className='relative max-w-[600px] max-h-[600px] mx-auto'>
				<Image
					src={AboutImage2}
					alt='Flota transportowa Ebene'
					className='w-full h-full object-cover'
					width={600}
					height={600}
					placeholder='blur'
					sizes="(max-width: 768px) 100vw, 600px"
					quality={60}
				/>
				<Image
					src={AboutImage}
					alt='Flota transportowa Ebene'
					className='hidden md:block absolute -bottom-16 right-0 w-[350px] h-[350px] object-cover border-l-[10px] border-t-[10px] border-white  z-20'
					width={350}
					height={350}
					placeholder='blur'
					sizes="(min-width: 768px) 350px"
					quality={60}
				/>
			</div>

			<div className='space-y-6'>
				<Heading preheading='O nas' heading='Twój Niezawodny Partner w Logistyce' />

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

				{FeaturesList.map((feature: Feature) => (
					<FeatureItem key={feature.id} feature={feature} />
				))}
			</div>
		</section>
	)
}

export default About
