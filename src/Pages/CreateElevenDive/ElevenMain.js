import  {useState} from 'react'
import './ElevenStyle.css'
import DiverInfoEleven from './pages/DiverInfoEleven'
import EnterElevenDives from './pages/EnterElevenDives'
import CheckListEleven from './pages/CheckListEleven'
import DiveCardEleven from './pages/DiveCardEleven'
import ElevenForm, { FirstRoundInput, SecondRoundInput, ThirdRoundInput } from './pages/rounds/ElevenForm'

const ElevenMain = () => {
  //Diver info
  const [info, setInfo] = useState({
      name: '',
      team: '',
      coach:'',
      meet: '',
      date: '',
  })
  //Entered data
  const [dive, setDive] = useState({
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    d5: '',

    d6: '',
    d7: '',
    d8: '',

    d9: '',
    d10: '',
    d11: ''
  })
  //Optionals
  const [opt, setOpt] = useState({
      o1: false,
      o2: true,
      o3: false,
      o4: true,
      o5: true,

      o6: false,
      o7: true,
      o8: false,

      o9: true,
      o10: false,
      o11: true,
  })
  //Dives
  const [entry, setEntry] = useState([])

  //onChange
  //diver info
  const handleInfo = (e) => {
      setInfo({
          ...info,
          [e.target.id]: e.target.value
      })
  }
  //dives
  const handleDive = (e) => {
    setDive({
        ...dive,
        [e.target.id]: e.target.value
        })
    }
    //optinals
    const handleOpt = (e) => {
        setOpt({
            ...opt,
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
    switch(curStep){
        case 1:
            return (
                <>
                <h2 className='h2'>Eleven Dives</h2>
                    <DiverInfoEleven
                        info={info}
                        onChange={handleInfo}
                        next={next}
                    />
                </>
            )
        case 2:
            return(
                <>
                <h2 className='h2'>Eleven Dives</h2>
                    <EnterElevenDives                        
                        next={next}
                        back={back}
                        dive={dive}
                    />
                </>
            )
        case 3:
            return(
                <>
                <h2 className='h2'>Eleven Dives</h2>
                    <CheckListEleven
                        next={next}
                        back={back}
                        entry={entry}
                    />
                </>
            )
        case 4:
            return (
                <>
                    <h2 className='h2'>Eleven Dives</h2>
                    <DiveCardEleven
                        back={back}
                        dive={entry}
                        info={info}
                        opt={opt}
                    />
                </>
            )        
        // default:
        //     return (<>
        //         <FirstRoundInput
        //             dive={dive}
        //             onChange={handleDive}
        //             onSubmit={handleEntry}
        //             changeOpt={handleOpt}
        //         />
        //         <SecondRoundInput
        //             dive={dive}
        //             onChange={handleDive}
        //             onSubmit={handleEntry}
        //             changeOpt={handleOpt}
        //         />
        //         <ThirdRoundInput
        //             dive={dive}
        //             onChange={handleDive}
        //             onSubmit={handleEntry}
        //             changeOpt={handleOpt}
        //         />
        //         </>
        //     )
    }


}

export default ElevenMain