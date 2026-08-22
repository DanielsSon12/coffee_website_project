import { motion } from 'framer-motion'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Benefits = ({ coffee }: { coffee: any[] }) => {
	return (
		<div className="relative mt-32 bg-amber-950 py-30 max-md:mt-20 max-md:py-20">
			<svg
				className="absolute -top-37 left-0 h-48 w-full max-md:-top-25 max-md:h-32"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path
					fill="#451a03"
					d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
				/>
			</svg>

			<div className="font-nunito relative mx-auto mt-20 flex w-full max-w-7xl items-center justify-center gap-20 px-8 max-lg:flex-col max-lg:gap-15 max-md:mt-10 max-md:gap-10 max-md:px-6">
				<motion.div
					className="flex w-1/2 justify-center max-lg:w-full"
					initial={{ opacity: 0 }}
					whileHover={{ scale: 1.1 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 25,
					}}
				>
					<Swiper
						modules={[EffectCards]}
						effect="cards"
						slidesPerView={1}
						spaceBetween={15}
						grabCursor={true}
						className="h-110 w-75 max-lg:h-90 max-lg:w-70 max-md:h-80 max-md:w-60"
						cardsEffect={{
							slideShadows: false,
						}}
					>
						{coffee.map((item: any) => (
							<SwiperSlide key={item.id} className="flex h-auto">
								<motion.div className="h-100 w-75 overflow-hidden rounded-2xl max-lg:h-90 max-lg:w-70 max-md:h-80 max-md:w-60">
									<img
										draggable={false}
										src={item.image}
										alt={item.title}
										className="pointer-events-none h-full w-full rounded-2xl object-cover"
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>

				<div className="flex w-1/2 items-center border-l border-amber-200 pl-12 max-lg:w-full max-lg:border-t-2 max-lg:border-l-0 max-lg:pt-10 max-md:px-2 max-md:pt-8">
					<motion.p
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="font-nanito max-lg:text-md text-2xl leading-relaxed font-bold tracking-wider text-amber-100 text-shadow-gray-950 text-shadow-sm max-lg:font-black max-md:text-base max-md:leading-relaxed"
					>
						Coffee is a beverage that promotes many health benefits, such as preventing premature
						aging, improving physical disposition, preventing depression, and aiding in weight loss.
						These benefits of coffee are possible because this beverage is rich in antioxidant and
						anti-inflammatory bioactive compounds, such as caffeine, chlorogenic acid, caffeic acid,
						and kahweol.
					</motion.p>
				</div>
			</div>
		</div>
	)
}

export default Benefits
