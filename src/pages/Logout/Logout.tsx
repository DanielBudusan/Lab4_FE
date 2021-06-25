import React, { useEffect } from 'react'

const Logout: React.FC = () => {

    useEffect(() => {
		localStorage.clear()
        window.location.replace("/")
	}, [])

	return <div></div>
    
}

export default Logout

