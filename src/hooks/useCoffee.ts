import { useEffect, useState } from 'react'

import { getCoffees } from '@/service/coffeeService'
import type { Coffee } from '@/types/coffee'

export function useCoffee() {
	const [coffee, setCoffee] = useState<Coffee[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchCoffee() {
			try {
				const data = await getCoffees()

				setCoffee(data)
			} catch (error) {
				console.error(error)

				setError('Não foi possível carregar os cafés.')
			} finally {
				setLoading(false)
			}
		}

		fetchCoffee()
	}, [])

	return {
		coffee,
		loading,
		error,
	}
}
