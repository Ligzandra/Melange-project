import React from 'react'
import Banner from './components/banner'
import Core from './components/core'
import Nav from './components/nav'
import Testimonials from './components/testimonials'

function Home() {
	return <>
		<Nav/>
		<Banner/>
		<Core/>
		<Testimonials/>
	</>
}

export default Home
