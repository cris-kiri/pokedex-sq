import { useEffect, useState } from 'react'

export default function useFetch(
  url: string,
  options: RequestInit | undefined
) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
        setIsLoading(false)
      } catch (error: unknown) {
        if (error instanceof Error) console.log(error.message)
        setError(error.message)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { response, error, isLoading }
}
