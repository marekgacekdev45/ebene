import { Inter, Fjalla_One } from 'next/font/google'

export const font_heading_init = Fjalla_One({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
	weight: ['400'],
})

export const font_text_init = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-text',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const font_heading = font_heading_init.variable
export const font_text = font_text_init.variable
