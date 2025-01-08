'use client'

import { ArrowUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	const checkScrollPosition = () => {
		if (window.scrollY > 1000) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', checkScrollPosition)
		return () => {
			window.removeEventListener('scroll', checkScrollPosition)
		}
	}, [])

	return (
		isVisible && (
			<button
				className='fixed bottom-3 right-3 z-50  overflow-hidden bg-primary rounded-full p-1.5'
				onClick={scrollToTop}>
				<ArrowUp className='size-7  text-accent ' />
			</button>
		)
	)
}

export default ScrollToTop
