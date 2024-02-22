import React from 'react'

import Mentors from '../../component/mentors/Mentors'
import Navbar from '../../component/Navbars/AuthNavbar'

export default function MentorPage() {
    return (
        <div>

            <Navbar />

            <Mentors isHomePage={false} />
            </div>
    )
}
