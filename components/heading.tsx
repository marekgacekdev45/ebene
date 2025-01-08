const Heading = ({ preheading, heading }: { preheading: string; heading: string }) => {
	return (
		<div className='space-y-1'>
			<p className='preheading'>{preheading}</p>
			<h2 className='heading'>{heading}</h2>
		</div>
	)
}

export default Heading
