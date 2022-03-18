import {render} from '@testing-library/react'
import Courses from './Courses'


describe('Snapshot testing for the Courses Component', () => {
    test("Courses Component renders properly", () => {
        const {asFragment} = render(<Courses />)
    })
})