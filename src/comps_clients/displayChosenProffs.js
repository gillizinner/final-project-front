import React, { useContext } from 'react'
import { AppContext } from '../appContext';
import CreateEvent from './createEvent';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DisplayChosenProffs() {
    //להוציא מהקונטקסט את הרשימה של האנשי צוות שנבחרו
    const { selectedProffs, removeOfSelectedProffs } = useContext(AppContext);

    const onDelClick = (proff) => {
        removeOfSelectedProffs(proff);
    }
    return (
        <div>
            <h3 style={{ fontSize: "xxx-large", fontFamily: 'Stint Ultra Condensed', color: "rgb(235 188 127)" }}>Selected Proffesionals:</h3>
            <h4 className='text-secondary' style={{ fontFamily: 'Stint Ultra Condensed' }}>No Proffesionals were selected</h4>
            <ol className='mt-4'>
                {selectedProffs.map((item, index) => (
                    <li key={index} className='row'>
                        <div className='col-7'>
                            <h4>{item.proff.name.firstName} {item.proff.name.lastName}:</h4>
                            <p>Selected Date: {item.date.toLocaleDateString()}</p>
                        </div>
                        <button onClick={() => onDelClick(item.proff)} className='bg-danger btn col-2 d-flex justify-content-center align-items-center' style={{ height: 30 }}>        <DeleteIcon />
                        </button>
                    </li>
                ))}
            </ol>
            {selectedProffs.length > 0 && <div className='d-flex justify-content-center align-items-center'><CreateEvent /></div>}
        </div>
    )
}
