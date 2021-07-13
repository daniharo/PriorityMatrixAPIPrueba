import {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
  Button,
  Typography
} from "@material-ui/core";
import CircularProgressCenter from "../../UI/CircularProgressCenter";

export default function ProjectDialog({ open, project, items, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      //scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{project.name}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          {project.notes === "" ? "Empty description" : project.notes}
        </DialogContentText>
        {!items && <CircularProgressCenter />}
        {items && (
          <Typography
            variant="body2"
            component="p"
          >
            There are {items.meta.total_count} items in this project.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
