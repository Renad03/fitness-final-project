import React from 'react'
import OurServices from '../../Components/ServicesSection/OurServices'
import OurPlans from "../../Components/PlanSection/OurPlans"
import Heading from '../../Components/Heading/Heading'
import Coach from './CoachScreen/Coach'


const Home = () => {
    return (
        <div>
            {/* <p>Navbar</p>
            <OurPlans /> */}
            <Heading />
            <OurServices />
            <OurPlans />
            <Coach />
        </div>
    )
}

export default Home