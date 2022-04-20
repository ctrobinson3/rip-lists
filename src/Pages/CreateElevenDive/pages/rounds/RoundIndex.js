import React, {useState} from 'react'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'

const RoundIndex = ({dives, onChange, onClick, opt}) => {

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
                    dives={dives}
                    onChange={onChange}
                    onClick={onClick}
                    opt={opt}
                />
            )
        case 2:
            return (
                <SecondRound
                    next={formNext}
                    back={formBack}
                    dives={dives}
                    onChange={onChange}
                    onClick={onClick}
                    opt={opt}
                />
            )
        default:
            return (
                <ThirdRound
                    back={formBack}
                    dives={dives}
                    onChange={onChange}
                    onClick={onClick}
                    opt={opt}
                />
            )
    }
}

export default RoundIndex