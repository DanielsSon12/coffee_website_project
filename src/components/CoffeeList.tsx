import 'swiper/css/bundle'

import { motion } from 'framer-motion'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import withDataFetch from './DataFetching'

const CoffeeList = ({ loading, coffee }: any) => {
	if (loading) {
		return <h1>Carregando...</h1>
	}

	return (
		<main className="min-h-screen bg-orange-50">
			<div className="m-auto p-8 text-center">
				<h1>Coffee Website</h1>
			</div>

			<motion.div className="m-auto flex w-full max-w-7xl items-center overflow-hidden">
				<Swiper
					modules={[EffectCoverflow]}
					effect="coverflow"
					slidesPerView={3}
					spaceBetween={10}
					grabCursor={true}
					className="w-full"
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
					}}
				>
					{coffee.map((item: any) => (
						<SwiperSlide key={item.id} className="flex h-auto items-center justify-center">
							<motion.div
								className="flex w-full max-w-md cursor-grab rounded-2xl bg-amber-100 p-0"
								whileTap={{ cursor: 'grabbing' }}
								initial={{ y: 500 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.8 }}
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
									<h2 className="mt-4 text-center text-lg font-bold text-amber-900">
										{item.title}
									</h2>

									<p className="m-3 text-justify text-xs tracking-wider text-gray-800">
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
			</motion.div>
		</main>
	)
}

const CoffeeListWithData = withDataFetch(CoffeeList)

export default CoffeeListWithData
