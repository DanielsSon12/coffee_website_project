import { useEffect, useState } from 'react'

import { API_URL_COFFEE } from '@/setting'

const withDataFetch = (WrapperComponent: any) => {
	return () => {
		const [loading, setLoading] = useState(true)
		const [coffee, setCoffee] = useState()

		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${API_URL_COFFEE}`)

				if (!response.ok) {
					throw new Error('Falha na requisição da API!')
				}

				const data = await response.json()
				setCoffee(data)
				console.log(data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		useEffect(() => {
			fetchData()
		}, [])

		return <WrapperComponent loading={loading} coffee={coffee} fetchCoffee={fetchData} />
	}
}

export default withDataFetch
