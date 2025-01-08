import { MonitorCog, Star, Globe, Handshake, Clock } from 'lucide-react'
import React from 'react'

interface Feature {
	id: number
	icon: string
	title: string
	description: string
}

const iconMapping: Record<string, React.ElementType> = {
	Star: Star,
	Globe: Globe,
	Handshake: Handshake,
	Clock: Clock,
	MonitorCog: MonitorCog,
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
