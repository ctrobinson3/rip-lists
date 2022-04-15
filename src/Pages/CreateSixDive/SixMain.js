import { useState } from 'react'
import DiveCardSix from './pages/DiveCardSix'
import DiverInfoSix from './pages/DiverInfoSix'
import EnterDivesSix from './pages/EnterDivesSix'
import CheckListSix from './pages/CheckListSix'
import './SixStyle.css'

const SixMain = () => {
    //constructor
    class Dive {
        constructor(direction, rotation, position, difficulty, cat, num) {
            this.direction = direction;
            this.rotation = rotation;
            this.position = position;
            this.difficulty = difficulty;
            this.cat = cat;
            this.num = num;
        }
    }

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
                <DiverInfoSix
                    info={info}
                    onChange={handleInfo}
                    next={next}
                />
            )
        case 2:
            return (
                <EnterDivesSix
                    dive={dive}
                    onChange={handleDive}
                    onSubmit={handleEntry}
                    next={next}
                    back={back}
                />
            )
        case 3:
            return (
                <CheckListSix
                    next={next}
                    back={back}
                    entry={entry}
                />
            )
        case 4:
            return (
                <DiveCardSix
                    back={back}
                />
            )
    }
}

export default SixMain