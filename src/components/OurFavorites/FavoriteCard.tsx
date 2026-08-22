import { motion } from 'framer-motion'

const FavoriteCard = ({ item, index }: { item: any; index: number }) => {
	return (
		<motion.div
			key={item.id}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.7,
				delay: index * 0.15,
			}}
			viewport={{ once: true }}
			whileHover={{
				y: -15,
				scale: 1.03,
			}}
			className="overflow-hidden rounded-2xl bg-amber-950 shadow-xl"
		>
			<img src={item.image} alt={item.title} className="h-64 w-full object-cover max-md:h-52" />

			<div className="p-6 max-md:p-4">
				<h2 className="font-dancing text-4xl font-bold text-amber-100 max-md:text-3xl">
					{item.title}
				</h2>

				<p className="font-nunito mt-3 text-sm leading-relaxed text-orange-100 max-md:text-sm">
					{item.description}
				</p>
			</div>
		</motion.div>
	)
}

export default FavoriteCard
