import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { Menu } from 'lucide-react'

const NavLinks = () => {
	return (
		<>
			<Link href='/#o-nas' className='text-left hover:text-accent duration-150 font-semibold'>
				O nas
			</Link>
			<Link href='/#uslugi' className='text-left hover:text-accent duration-150 font-semibold'>
				Usługi
			</Link>
			<Link href='/#kontakt' className='text-left hover:text-accent duration-150 font-semibold'>
				Kontakt
			</Link>
		</>
	)
}

const Navbar = () => {
	return (
		<nav className='bg-white py-4  sticky top-0 z-50 '>
			<div className='max-w-screen-xl mx-auto'>

			
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<div className='flex items-center space-x-6'>
					<Link href='/' className='text-xl font-bold'>
						<Image src='/logo.png' alt='Ebene' width={160} height={32} />
					</Link>
				</div>
				<div className='hidden lg:flex items-center space-x-6'>
					<NavLinks />
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant='outline' size='icon' className='lg:hidden'>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<SheetHeader>
							<SheetTitle className='pb-6'>
								<Link href='/' className='text-xl font-bold mb-4'>
									<Image src='/logo.png' alt='Ebene' width={160} height={32} />
								</Link>
							</SheetTitle>
							<NavLinks />
							<div className='flex items-center space-x-4 pt-6'>
								<Image src='/pl.svg' alt='pl' width={16} height={16} />
								<Image src='/en.svg' alt='pl' width={16} height={16} />
							</div>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
			</div>
		</nav>
	)
}

export default Navbar
