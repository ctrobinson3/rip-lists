import { useState } from 'react'
import DiveCardSix from './pages/DiveCardSix'
import DiverInfoSix from './pages/DiverInfoSix'
import EnterDivesSix from './pages/EnterDivesSix'
import CheckListSix from './pages/CheckListSix'
import './SixStyle.css'

const SixMain = () => {
    //useState
    //Diver Info
    const [info, setInfo] = useState({
        name: '',
        team: '',
        coach: '',
        meet: '',
        date: '',
        event: '1-meter, 6 dives'
    })
    //Dives
    const [dive, setDive] = useState({
        d1: '',
        d2: '',
        d3: '',
        d4: '',
        d5: '',
        d6: ''
    })
    //Entries
    const [entry, setEntry] = useState([])

    //onChange
    //set info
    const handleInfo = (e) => {
        setInfo({
            ...info,
            [e.target.id]: e.target.value
        })
    }
    //set dives
    const handleDive = (e) => {
        setDive({
            ...dive,
            [e.target.id]: e.target.value
        })
    }
    //set entry
    const handleEntry = (e) => {
        setEntry(e)
    }


    //pages
    const [curStep, setStep] = useState(1)
    const next = () => {
        setStep(curStep + 1)
    }
    const back = () => {
        setStep(curStep - 1)
    }

    //page layout
    switch (curStep) {
        case 1:
            return (
            <>
                <h2 className='h2'>Six Dives</h2>
                <DiverInfoSix
                    info={info}
                    onChange={handleInfo}
                    next={next}
                />
            </>
            )
        case 2:
            return (
                <>
                <h2 className='h2'>Six Dives</h2>
                <EnterDivesSix
                    dive={dive}
                    onChange={handleDive}
                    onSubmit={handleEntry}
                    next={next}
                    back={back}
                />
                </>
            )
        case 3:
            return (
                <>
                <h2 className='h2'>Six Dives</h2>
                <CheckListSix
                    next={next}
                    back={back}
                    entry={entry}
                />
                </>
            )
        case 4:
            return (
                <>
                <h2 className='h2'>Six Dives</h2>
                <DiveCardSix
                    back={back}
                    dive={entry}
                    info={info}
                />
                </>
            )
    }
}

export default SixMain