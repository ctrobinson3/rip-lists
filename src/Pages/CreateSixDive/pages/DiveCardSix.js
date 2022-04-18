import { useState } from 'react';
import jsPDF from 'jspdf';
import DiveCardLandscape from './img/DiveCardLandscape.png'




const DiveCardSix = ({back, dive, info}) => {
    //Set Data
    const name = info.name
    const team = info.team
    const coach = info.coach
    const meet = info.meet
    const date = info.date

    //Dives
    const d1 = dive[0]
    const d2 = dive[1]
    const d3 = dive[2]
    const d4 = dive[3]
    const d5 = dive[4]
    const d6 = dive[5]
    const printInfo = (d) => {
        if (d === 'invalid dive')
            return <div className="invalid-text"> (empty) </div>
        else
            return <div> {d.direction} {d.rotation} {d.position} DD: {d.difficulty}</div>
    }

    //Position    
    const pos = [d1, d2, d3, d4, d5, d6]
    const divePos = pos.map(d => {
        if (d.position === 'Straight')
            return ('a')
        else if (d.position === 'Pike')
            return ('b')
        else if (d.position === 'Tuck')
            return ('c')
        else if (d.position === 'Free')
            return ('d')
        else
            return ('')
    })
    const position = pos.map(d => {
        if (d.position === 'Straight')
            return ('Str.')
        else if (d.position === 'Pike')
            return ('Pike')
        else if (d.position === 'Tuck')
            return ('Tuck')
        else if (d.position === 'Free')
            return ('Free')
        else
            return ('')
    })

    //DDs
    const optdifficulty = (parseFloat(d2.difficulty) + parseFloat(d3.difficulty) + parseFloat(d4.difficulty) + parseFloat(d5.difficulty) + parseFloat(d6.difficulty))
    function financial(x) {
        return x.toFixed(1)
    }
    const finalDD = financial(optdifficulty)
    var volDifficulty = ''
    const dv = parseFloat(d1.difficulty)
    if (dv > 1.8)
        volDifficulty = 1.8
    else
        volDifficulty = d1.difficulty




    //Download PDF
    const [docName, setDocName] = useState('')

    const onChange = (e) => {
        const newValue = e.target.value
        setDocName(newValue)
    }

    function printDocument() {
        var doc = new jsPDF('l', 'mm', [297, 210])
        var imgData = DiveCardLandscape

        doc.addImage(imgData, 'PNG', 0, 0, 297, 210)
        //(width, height, text)
        //info
        doc.setFont('Courier')
        doc.setFontSize(10)
        doc.text(name, 29, 16)
        doc.text(team, 33, 20.5)
        doc.text(coach, 30.6, 24.8)
        doc.text(meet, 163, 16)
        doc.text(date, 163, 20.5)
        doc.text('1-Meter, 6 Dive', 165.5, 25)
        //dives
        //dive one
        doc.text(d1.num + divePos[0], 26, 67)
        doc.text(d1.direction + " " + d1.rotation, 41, 67,)
        doc.text(position[0], 99, 67)
        doc.text('' + volDifficulty, 115, 67)
        //dive two
        doc.text(d2.num + divePos[1], 26, 77)
        doc.text(d2.direction + " " + d2.rotation, 41, 77,)
        doc.text(position[1], 99, 77)
        doc.text(d2.difficulty, 115, 77)
        //dive three
        doc.text(d3.num + divePos[2], 26, 86.5)
        doc.text(d3.direction + " " + d3.rotation, 41, 86.5,)
        doc.text(position[2], 99, 86.5)
        doc.text(d3.difficulty, 115, 86.5)
        //dive four
        doc.text(d4.num + divePos[3], 26, 96)
        doc.text(d4.direction + " " + d4.rotation, 41, 96,)
        doc.text(position[3], 99, 96)
        doc.text(d4.difficulty, 115, 96)
        //dive five
        doc.text(d5.num + divePos[4], 26, 106)
        doc.text(d5.direction + " " + d5.rotation, 41, 106,)
        doc.text(position[4], 99, 106)
        doc.text(d5.difficulty, 115, 106)
        //dive six
        doc.text(d6.num + divePos[5], 26, 116)
        doc.text(d6.direction + " " + d6.rotation, 41, 116,)
        doc.text(position[5], 99, 116)
        doc.text(d6.difficulty, 115, 116)
        //Vol dd
        doc.text("" + volDifficulty, 87, 132.7)
        //Opt dd
        doc.text("" + finalDD, 109, 132.7)


        doc.save(docName)
    }


    return (<>
        <div className="six-container">            
                <h1>Download Dive Card</h1>
                <h3>Name PDF:</h3>
                <input className="form-input" onChange={onChange}></input>
            
            <button
                type="button"
                className="form-button next"
                onClick={printDocument}>
                Download
            </button>
            <button
                type="button"
                className="form-button back"
                onClick={back}>
                Back
            </button>
            </div>
    </>
    )
}

export default DiveCardSix