import { useState, useEffect } from 'react';

export const useCountDown = (targetDate: number) => {

	const countDownDate = new Date(targetDate).getTime()

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	)

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime())
		}, 1000)
		return () => clearInterval(interval);	
	}, [countDownDate])
	return getReturnValues(countDown)
}

const getReturnValues = (countDown: number) => {

	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((countDown % (1000 * 60 )) / (1000))
	
	return [minutes <= 0 ? 0 : minutes, seconds <= 0 ? 0 : seconds]
}





