import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import "../styles/LoginDialog.css";

interface LoginDialogProps {
  open: boolean;
    onClose: () => void;
    onSignUp: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose, onSignUp }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Login
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          startIcon={<LoginIcon />}
          className="login-btn"
        >
          Login
        </Button>
      </DialogActions>
      <Typography
        variant="body2"
        align="center"
        sx={{ width: "100%", paddingBottom: "10px" }}
      >
        Don't have an account?{" "}
              <Link component="button" underline="hover" onClick={() => { onClose(); onSignUp(); }}>
          Sign up
        </Link>
      </Typography>
    </Dialog>
  );
};

export default LoginDialog;
