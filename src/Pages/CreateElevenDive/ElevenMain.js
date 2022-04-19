import  {useState} from 'react'
import { useRecoilValue } from 'recoil'
import '../../Components/Styles/formstyle.css'
import DiverInfoEleven from './pages/DiverInfoEleven'
import EnterElevenDives from './pages/EnterElevenDives'
import CheckListEleven from './pages/CheckListEleven'
import DiveCardEleven from './pages/DiveCardEleven'

import {diveState} from './pages/Recoil/atoms'


const ElevenMain = () => {
    const diveName = useRecoilValue(diveState)

  

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
                    />
                </>
            )
        case 4:
            return (
                <>
                    <h2 className='h2'>Eleven Dives</h2>
                    <DiveCardEleven
                        back={back}
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