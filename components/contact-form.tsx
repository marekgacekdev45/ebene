'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: 'Nazwa użytkownika musi mieć co najmniej 3 znaki.',
		})
		.max(55, {
			message: 'Nazwa użytkownika nie może mieć więcej niż 55 znaków.',
		}),
	email: z.string().email({
		message: 'Proszę podać poprawny adres e-mail.',
	}),
	phone: z.string().optional(),
	message: z.string().min(3, {
		message: 'Wiadomość musi mieć co najmniej 3 znaki.',
	}),
})

export function ProfileForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Imię i nazwisko</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Wiadomość</FormLabel>
							<FormControl>
								<Textarea {...field} className='min-h-[150px] max-h-[150px]'/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Wyślij</Button>
			</form>
		</Form>
	)
}
