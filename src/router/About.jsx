import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <Header />
            <h1>Inside About Component</h1>
            {/* <Link to='/students/1' >Student 1</Link> */}
            {/* <Link to='/students/2' >Student 2</Link> */}
            {/* Student 2's data not showing its showing std1 data init
            so solution is use 'Params',useParams in student compo  */}
            <Link to='/students/peter' > Peter</Link>
            <Link to='/students/thor' > Thor</Link>
        </div>
    )
}

export default About
