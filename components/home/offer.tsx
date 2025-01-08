import { OfferItem } from '@/app/utils/interface'

import OfferCard from '@/components/offer-card'
import Heading from '@/components/heading'

const offers = [
	{
		id: 1,
		image: '/ebene-oferta-1.webp',
		title: 'Ekspresowe Przesyłki Międzynarodowe',
		description:
			'Błyskawiczne i pewne usługi ekspresowe dla międzynarodowych przesyłek, zapewniające dostawę na czas. ',
	},
	{
		id: 2,
		image: '/ebene-oferta-2.webp',
		title: 'Fresh –Transport w Temperaturze Kontrolowanej',
		description:
			'Zajmujemy się transportem owoców i warzyw w warunkach kontrolowanej temperatury, gwarantując ich świeżość.  ',
	},
	{
		id: 3,
		image: '/ebene-oferta-3.webp',
		title: 'Logistyka Kontraktowa',
		description: ' Pełna obsługa logistyczna, która obejmuje planowanie, magazynowanie oraz dystrybucję towarów.',
	},
	{
		id: 4,
		image: '/ebene-oferta-4.webp',
		title: 'Odprawy Celne',
		description:
			'Transport towarów na obszarze kraju oraz poza jego granicami, dostosowany do indywidualnych wymagań klientów.',
	},
	{
		id: 5,
		image: '/ebene-oferta-5.webp',
		title: 'Spedycja Krajowa i Międzynarodowa',
		description:
			'Transport towarów na obszarze kraju oraz poza jego granicami, dostosowany do indywidualnych wymagań klientów.',
	},
	{
		id: 6,
		image: '/ebene-oferta-6.webp',
		title: 'Transport i Spedycja Ładunków Kontenerowych',
		description: ' Niezawodny i skuteczny przewóz kontenerów zarówno drogą lądową, jak i morską.',
	},
	{
		id: 7,
		image: '/ebene-oferta-7.webp',
		title: 'Transport i Spedycja Całopojazdowa',
		description:
			' Przewóz pełnowymiarowych ładunków na terenie kraju oraz za granicą, gwarantujący najwyższą efektywność. ',
	},
	{
		id: 8,
		image: '/ebene-oferta-8.webp',
		title: ' Transport Mrożonek i Ładunków Schładzanych',
		description:
			'Profesjonalne usługi transportowe dla mrożonek i towarów wymagających chłodzenia, zapewniające odpowiednie warunki przewozu.',
	},
]

const Offer = () => {
	return (
		<section id='oferta' className='section wrapper !max-w-none'>
			<div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center gap-6'>
				<Heading preheading='Oferta' heading='Nasza Oferta Usług Transportowych i Spedycyjnych' />

				<p className='text'>
					Firma Ebene oferuje szeroki zakres usług transportowych, spedycyjnych i logistycznych, dostosowanych do
					indywidualnych potrzeb naszych klientów. Dzięki naszemu doświadczeniu i zaawansowanym rozwiązaniom
					technologicznym, zapewniamy terminowość, bezpieczeństwo ładunku oraz profesjonalną obsługę na każdym etapie
					realizacji zlecenia.
				</p>
				<p className='text !font-semibold mt-4'>
					Wybierając Ebene, możesz liczyć na niezawodne i efektywne wsparcie logistyczne.
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-12 max-w-screen-2xl mx-auto mt-16 2xl:px-6'>
				{offers.map((offer: OfferItem) => (
					<OfferCard key={offer.id} offer={offer} />
				))}
			</div>
		</section>
	)
}

export default Offer
