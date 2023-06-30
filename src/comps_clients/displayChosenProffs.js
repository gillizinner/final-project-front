import React, { useContext } from 'react'
import { AppContext } from '../appContext';
import CreateEvent from './createEvent';
export default function DisplayChosenProffs() {
    //להוציא מהקונטקסט את הרשימה של האנשי צוות שנבחרו
    const { selectedProffs, removeOfSelectedProffs } = useContext(AppContext);

    const onDelClick = (proff) => {
        removeOfSelectedProffs(proff);
    }
    return (
        <div>
            <h3>Selected Proffesionals:</h3>
            <ol>
                {selectedProffs.map((item, index) => (
                    <li key={index} className='row'>
                        <div className='col-7'>
                            <h4>{item.proff.name.firstName} {item.proff.name.lastName}:</h4>
                            <p>Selected Date: {item.date.toLocaleDateString()}</p>
                        </div>
                        <button onClick={() => onDelClick(item.proff)} className='bg-danger btn col-2 d-flex justify-content-center align-items-center' style={{ height: 30 }}>Delete</button>
                    </li>
                ))}
            </ol>
            {selectedProffs.length > 0 && <div className='d-flex justify-content-center align-items-center'><CreateEvent /></div>}
        </div>
    )
}
