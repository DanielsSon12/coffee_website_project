import { motion } from 'framer-motion'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CoffeeCard from './CoffeeCard'

const CoffeesCarrousel = ({ coffee }: { coffee: any[] }) => {
	return (
		<div className="relative z-10 -mt-10 bg-orange-100 py-32 max-lg:-mt-20 max-md:-mt-10 max-md:py-20">
			<svg
				className="absolute -top-50 left-0 h-50 w-full max-md:-top-35 max-md:h-35"
				viewBox="300 55 1100 200"
				preserveAspectRatio="none"
			>
				<path
					fill="#451a03"
					d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
				/>
			</svg>

			<svg
				className="absolute -top-35 left-0 h-48 w-full max-md:-top-25 max-md:h-30"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path
					fill="#ffedd5"
					d="M0,160 C240,260 480,260 720,160 C960,60 1200,60 1440,160 L1440,320 L0,320 Z"
				/>
			</svg>

			<div className="m-auto">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="font-dancing text-center text-7xl font-bold text-amber-950 max-md:text-5xl"
				>
					Coffees
				</motion.h1>
			</div>

			<div className="font-nunito relative z-10 m-auto mt-20 flex w-full max-w-7xl items-center overflow-hidden px-4 max-md:mt-12 max-md:px-6">
				<Swiper
					modules={[EffectCoverflow]}
					effect="coverflow"
					pagination={{ clickable: true }}
					navigation
					slidesPerView={1}
					spaceBetween={15}
					grabCursor={true}
					className="w-full"
					coverflowEffect={{
						rotate: 25,
						stretch: 20,
						depth: 350,
						modifier: 1,
						slideShadows: false,
					}}
					breakpoints={{
						751: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1110: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
					}}
				>
					{coffee.map((item: any) => (
						<SwiperSlide key={item.id} className="flex items-center justify-center">
							<CoffeeCard item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default CoffeesCarrousel
