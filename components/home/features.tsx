import React from 'react'
import FeatureItem from '@/components/feature-item'

interface Feature {
	id: number
	icon: string
	title: string
	description: string
}

const FeaturesList = [
	{
		id: 1,
		icon: 'Star',
		title: 'Profesjonalizm i Doświadczenie',
		description:
			'Dzięki wieloletniemu doświadczeniu w branży, zapewniamy niezawodne i profesjonalne usługi logistyczne, dostosowane do specyficznych potrzeb klientów.',
	},
	{
		id: 2,
		icon: 'Globe',
		title: 'Nowoczesne Technologie',
		description:
			'Korzystamy z najnowszych technologii, aby zagwarantować efektywność i bezpieczeństwo wszystkich naszych usług transportowych i spedycyjnych.',
	},
	{
		id: 3,
		icon: 'Handshake',
		title: 'Elastyczność i Indywidualne Podejście ',
		description:
			'Każde zlecenie traktujemy indywidualnie, dostosowując nasze rozwiązania do unikalnych potrzeb i oczekiwań każdego klienta.',
	},
	{
		id: 4,
		icon: 'Clock',
		title: 'Pełna Dostępność',
		description:
			'Jesteśmy do dyspozycji 24/7, oferując stały kontakt i monitoring statusu transportu, aby zapewnić pełną kontrolę nad Twoimi przesyłkami. ',
	},
]

const Features = () => {
	return (
		<section className=' mt-12 mb-6 lg:mt-24 lg:mb-12 px-6 md:px-12 2xl:px-0 max-w-screen-xl mx-auto space-y-16'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 gap-x-12'>
				<div className='space-y-2'>
					<p className='preheading'>Dlaczego my?</p>
					<h2 className='heading'>Poznaj Mocne Strony Ebene</h2>
				</div>
				<p className='text'>
					W Ebene oferujemy nie tylko kompleksowe usługi transportowe, spedycyjne i logistyczne, ale także gwarantujemy
					najwyższą jakość obsługi i indywidualne podejście do każdego klienta. Nasze wieloletnie doświadczenie,
					zaawansowane technologie oraz zaangażowany zespół sprawiają, że jesteśmy liderem w branży. Przekonaj się,
					dlaczego warto nam zaufać!
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {FeaturesList.map((feature: Feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
				
				
			</div>
		</section>
	)
}

export default Features