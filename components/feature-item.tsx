import { Feature } from '@/app/utils/interface'

import { MonitorCog, Star, Globe, Handshake, Clock, User } from 'lucide-react'

const iconMapping: Record<string, React.ElementType> = {
	Star: Star,
	Globe: Globe,
	Handshake: Handshake,
	Clock: Clock,
	MonitorCog: MonitorCog,
	User: User,
}

const FeatureItem = ({ feature: { icon, title, description } }: { feature: Feature }) => {
	const Icon = iconMapping[icon] || null

	return (
		<div className='space-y-4 pt-4'>
			<div className='flex justify-start items-center gap-3'>
				{Icon && <Icon className='text-accent size-10' />}
				<h3 className='text-2xl font-semibold'>{title}</h3>
			</div>
			<p className='font-light'>{description}</p>
		</div>
	)
}

export default FeatureItem
