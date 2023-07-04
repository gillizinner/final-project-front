import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventDetailes(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Show Event Detailes
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Event Detailes"}</DialogTitle>
                {/* <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description"> */}
                <DialogContent>
                    <h4>The professionals of your event are:</h4>
                    <ul>
                        {props?.item.proffesionals.map((proffesional) => (
                            <li key={proffesional._id}>
                                <DialogContentText id="alert-dialog-slide-description">
                                    {proffesional.category} - {proffesional.name?.firstName} {proffesional.name?.lastName}
                                </DialogContentText>
                            </li>
                        ))}
                    </ul>
                </DialogContent>
                {/* </DialogContentText>
                </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
