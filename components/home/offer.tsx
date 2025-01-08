import OfferCard from '@/components/offer-card'

interface Offer {
	id: number
	image: string
	title: string
	description: string
}

const offers = [
	{
		id: 1,
		image: '/hero-1.jpeg',
		title: 'Ekspresowe Przesyłki Międzynarodowe',
		description:
			'Błyskawiczne i pewne usługi ekspresowe dla międzynarodowych przesyłek, zapewniające dostawę na czas. ',
	},
	{
		id: 2,
		image: '/hero-2.jpeg',
		title: 'Fresh –Transport w Temperaturze Kontrolowanej',
		description:
			'Zajmujemy się transportem owoców i warzyw w warunkach kontrolowanej temperatury, gwarantując ich świeżość.  ',
	},
	{
		id: 3,
		image: '/hero-1.jpeg',
		title: 'Logistyka Kontraktowa',
		description: ' Pełna obsługa logistyczna, która obejmuje planowanie, magazynowanie oraz dystrybucję towarów.',
	},
	{
		id: 4,
		image: '/hero-1.jpeg',
		title: 'Odprawy Celne',
		description: 'Transport towarów na obszarze kraju oraz poza jego granicami, dostosowany do indywidualnych wymagań klientów.',
	},
	{
		id: 5,
		image: '/hero-1.jpeg',
		title: 'Spedycja Krajowa i Międzynarodowa',
		description: 'Transport towarów na obszarze kraju oraz poza jego granicami, dostosowany do indywidualnych wymagań klientów.',
	},
	{
		id: 6,
		image: '/hero-1.jpeg',
		title: 'Transport i Spedycja Ładunków Kontenerowych',
		description: ' Niezawodny i skuteczny przewóz kontenerów zarówno drogą lądową, jak i morską.',
	},
	{
		id: 7,
		image: '/hero-1.jpeg',
		title: 'Transport i Spedycja Całopojazdowa',
		description: ' Przewóz pełnowymiarowych ładunków na terenie kraju oraz za granicą, gwarantujący najwyższą efektywność. ',
	},
	{
		id: 8,
		image: '/hero-1.jpeg',
		title: ' Transport Mrożonek i Ładunków Schładzanych',
		description: 'Profesjonalne usługi transportowe dla mrożonek i towarów wymagających chłodzenia, zapewniające odpowiednie warunki przewozu.',
	},
]

const Offer = () => {
	return (
		<section id='oferta' className=' mt-12 mb-6 lg:mt-24 lg:mb-12 px-6 md:px-12 2xl:px-0'>
			<div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center gap-6'>
				<p className='preheading'>Oferta</p>
				<h2 className='heading'>Nasza Oferta Usług Transportowych i Spedycyjnych</h2>
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

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl mx-auto mt-16 2xl:px-6'>
				{offers.map((offer: Offer) => (
					<OfferCard key={offer.id} offer={offer} />
				))}
			</div>
		</section>
	)
}

export default Offer
