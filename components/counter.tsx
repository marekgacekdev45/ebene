'use client'

import React, { useState, useEffect, useRef } from 'react'

const Counter = ({
	target,
	suffix,
	prefix,
	text,
	speed = 50,
	step = 1,
}: {
	target: number
	suffix?: string
	prefix?: string
	text: string
	speed?: number
	step?: number
}) => {
	const [count, setCount] = useState(0)
	const [isVisible, setIsVisible] = useState(false)
	const counterRef = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0.5,
			}
		)

		if (counterRef.current) {
			observer.observe(counterRef.current)
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current)
			}
		}
	}, [])

	useEffect(() => {
		let interval: number | undefined

		if (isVisible) {
			interval = window.setInterval(() => {
				setCount(prevCount => (prevCount < target ? prevCount + step : prevCount))
			}, speed)
		} else {
			clearInterval(interval)
		}

		return () => clearInterval(interval)
	}, [isVisible, speed])

	return (
		<div className='flex flex-col justify-start items-center text-center gap-2'>
			<span ref={counterRef} className='font-bold text-accent font-heading text-6xl '>
				{prefix} {count} {suffix}
			</span>
			<p className='text-white font-semibold text-xl'>{text}</p>
		</div>
	)
}

export default Counter
