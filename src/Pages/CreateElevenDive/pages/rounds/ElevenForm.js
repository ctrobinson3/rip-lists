import React from 'react'
import { useRecoilState } from 'recoil'
import { diveState } from '../Recoil/atoms'

export const FirstRoundInput = () => {
    const [diveName, setDiveName] = useRecoilState(diveState)

    const handleChange = (e) => {
        setDiveName(e.target.value)
    }

  return (
    <div className='eleven-info-div'>
        <input
            value={diveName}
            onChange={handleChange}
        />
    </div>
  )
}

export const SecondRoundInput = ({ dive, onChange, onSubmit, changeOpt }) => {
    return (
        <div className='eleven-info-div'>
            second
        </div>
    )
}

export const ThirdRoundInput = ({ dive, onChange, onSubmit, changeOpt }) => {
    return (
        <div className='eleven-info-div'>
            third
        </div>
    )
}

