import { useEffect, useState } from 'react'

import { API_URL_RANDOM_COFFEE } from '@/setting'

const withDataFetchRandomCoffee = (WrapperComponent: any) => {
	return () => {
		const [loading, setLoading] = useState(true)
		const [imageCoffee, setImageCoffee] = useState<string | null>(null)

		const fetchDataRandomCoffee = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${API_URL_RANDOM_COFFEE}`)

				if (!response.ok) {
					throw new Error('Falha na requisição da API!')
				}

				const data = await response.json()
				setImageCoffee(data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		useEffect(() => {
			fetchDataRandomCoffee()
		}, [])

		return (
			<WrapperComponent
				loading={loading}
				coffeeImage={imageCoffee}
				fetchImageCoffee={fetchDataRandomCoffee}
			/>
		)
	}
}

export default withDataFetchRandomCoffee
