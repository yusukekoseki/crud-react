/* import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
    } from "@material-ui/core";
import FlightList from './FlightList'
import Profile from "./Profile";
const DialogPage=()=>{
    return(
        <Dialog
            open={status.open}
            aria-labelledby="draggable-dialog-title"
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle id="draggable-dialog-title">Detail</DialogTitle>
            <DialogContent>
            <DialogContentText>
                <br />
                <Profile />
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button
                onClick={() => setStatus({ open: false })}
                color="primary"
            >
                OK
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogPage; */