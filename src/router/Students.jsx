import React from 'react'

import { useParams } from 'react-router-dom'

const Students = () => {
    const params = useParams();
    // const { id } = params;
    const { name } = params;
    return (
        <div>
            {/* <h2>This is student id : {id}</h2> */}
            <h2>Student Name is : {name}</h2>
        </div>
    )
}

export default Students
