import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../index.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'
import { DotLoader } from 'react-spinners'
import { register } from 'swiper/element/bundle'
import { EffectCards, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import coffeeBanner from '../assets/img/coffeeBanner.jpg'

register()

import { useEffect, useState } from 'react'

import withDataFetch from './DataFetchingCoffee'

const CoffeeList = ({ loading, coffee }: any) => {
	const [showLoading, setShowLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	if (loading || showLoading) {
		return (
			<main className="m-auto flex min-h-screen items-center justify-center bg-orange-100">
				<DotLoader color="#5E350E" size={100} />
			</main>
		)
	}

	return (
		<motion.main
			className="relative min-h-screen bg-orange-100"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<Parallax pages={1.7}>
				<ParallaxLayer offset={0} speed={0.2} className="z-0">
					<div className="relative h-150 w-full">
						<motion.div
							className="absolute mt-30 ml-70 overflow-hidden"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{
								duration: 2,
								ease: 'easeInOut',
							}}
						>
							<h1 className="font-dancing w-70 text-8xl font-bold text-orange-200 text-shadow-amber-950 text-shadow-lg">
								COFFEE WEBSITE
							</h1>
						</motion.div>
						<img src={coffeeBanner} alt="Café" className="h-full w-full object-cover" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.65} speed={1} className="z-20">
					<section className="relative z-10 -mt-20 min-h-screen bg-orange-100 pt-52">
						<svg
							className="absolute -top-37 left-0 h-48 w-full"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#ffedd5"
								d="M0,160 C240,260 480,260 720,160 C960,60 1200,60 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>
						<div className="font-nunito relative z-10 m-auto flex w-full max-w-7xl items-center overflow-hidden">
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
									640: {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									1289: {
										slidesPerView: 3,
										spaceBetween: 15,
									},
								}}
							>
								{coffee.map((item: any) => (
									<SwiperSlide key={item.id} className="flex h-auto items-center justify-center">
										<motion.div
											className="flex w-full max-w-md cursor-grab rounded-2xl bg-amber-100 p-0"
											whileTap={{ cursor: 'grabbing' }}
											initial={{ opacity: 0, y: 1200 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.9, ease: 'easeOut' }}
										>
											<div className="w-1/2">
												<img
													draggable={false}
													className="pointer-events-none h-72 w-full rounded-l-2xl object-cover"
													src={item.image}
													alt={item.title}
												/>
											</div>

											<div className="w-1/2">
												<h2 className="mt-4 text-center text-lg font-extrabold text-amber-900">
													{item.title}
												</h2>

												<p className="m-3 text-justify text-xs tracking-wider text-amber-950">
													{item.description}
												</p>

												<div className="m-3">
													<ul className="list-none">
														{item.ingredients.map((ingredient: any) => (
															<li
																key={ingredient}
																className="mt-1 text-xs font-bold tracking-wider text-amber-800"
															>
																➜ {ingredient}
															</li>
														))}
													</ul>
												</div>
											</div>
										</motion.div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</section>
					<section className="relative z-10 min-h-screen bg-amber-950 pt-32">
						<svg
							className="absolute -top-37 left-0 h-48 w-full"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
						>
							<path
								fill="#451a03"
								d="M0,160 C240,60 480,60 720,160 C960,260 1200,260 1440,160 L1440,320 L0,320 Z"
							/>
						</svg>
						<div className="font-nunito relative z-10 m-auto flex min-h-125 w-full max-w-7xl items-center gap-16 overflow-hidden px-8">
							<motion.div
								className="flex w-1/2 justify-center"
								whileHover={{ rotate: -2, skewX: 2, scale: 1.1 }}
								animate={{ rotate: -15, skewX: 8 }}
								transition={{ type: 'spring', stiffness: 200, damping: 20 }}
							>
								<Swiper
									modules={[EffectCards]}
									effect="cards"
									slidesPerView={1}
									spaceBetween={15}
									grabCursor={true}
									className="h-100 w-75"
									cardsEffect={{
										slideShadows: false,
									}}
								>
									{coffee.map((item: any) => (
										<SwiperSlide key={item.id} className="flex h-auto">
											<motion.div className="h-100 w-75 overflow-hidden rounded-2xl">
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
							<motion.div
								initial={{ opacity: 0, y: -2200 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 2, ease: 'easeOut' }}
								className="rounded-base flex w-4xl items-center border-l-2 border-amber-200 pl-15"
							>
								<motion.p
									initial={{ opacity: 0, x: 2200, y: 0 }}
									animate={{ opacity: 1, x: 0, y: 0 }}
									transition={{ duration: 3, ease: 'easeOut' }}
									className="font-nanito text-2xl leading-relaxed font-bold tracking-wider text-amber-100 text-shadow-gray-950 text-shadow-sm"
								>
									"O café é uma bebida que promove muitos benefícios para a saúde, como prevenir o
									envelhecimento precoce, melhorar a disposição física, evitar a depressão e ajudar
									no emagrecimento. Esses benefícios do café são possíveis, porque essa bebida é
									rica em compostos bioativos antioxidantes e anti-inflamatórios, como cafeína,
									ácido clorogênico, ácido cafeico e kahweol."
								</motion.p>
							</motion.div>
						</div>
					</section>
				</ParallaxLayer>
			</Parallax>
		</motion.main>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
