import React, {useState} from 'react'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'

const RoundIndex = ({dive}) => {

    const [formPage, setFormPage] = useState(1)
    const formNext = () => {
        setFormPage(formPage + 1)
    }
    const formBack = () => {
        setFormPage(formPage - 1)
    }

    switch (formPage) {
        case 1:
            return (
                <FirstRound
                    next={formNext}
                    dive={dive}
                />
            )
        case 2:
            return (
                <SecondRound
                    next={formNext}
                    back={formBack}
                    
                />
            )
        default:
            return (
                <ThirdRound
                    back={formBack}
                />
            )
    }
}

export default RoundIndex