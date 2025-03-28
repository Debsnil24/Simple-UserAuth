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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "../styles/LoginDialog.css";
import React from "react"; // Added import for React

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const SignupDialog: React.FC<LoginDialogProps> = ({
  open,
  onClose,
  onLogin,
}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordRules, setPasswordRules] = React.useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    noSpaces: false,
  });

  const validatePassword = (password: string) => {
    const rules = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      noSpaces: !/\s/.test(password),
    };
    setPasswordRules(rules);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Sign Up
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPasswordRules({
                length: false,
                uppercase: false,
                lowercase: false,
                number: false,
                specialChar: false,
                noSpaces: false,
            });
        }}
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
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
        <TextField
          margin="dense"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="outlined"
          value={confirmPassword}
          error={confirmPassword !== "" && confirmPassword !== password}
          helperText={
            confirmPassword !== "" && confirmPassword !== password
              ? "Passwords do not match"
              : ""
          }
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Typography
          variant="body2"
          sx={{ marginTop: 1, fontSize: "0.85rem", color: "gray" }}
        >
          Password must contain:
        </Typography>
        {[
          { label: "At least 8 characters", met: passwordRules.length },
          {
            label: "At least one uppercase letter",
            met: passwordRules.uppercase,
          },
          {
            label: "At least one lowercase letter",
            met: passwordRules.lowercase,
          },
          { label: "At least one number", met: passwordRules.number },
          {
            label: "At least one special character",
            met: passwordRules.specialChar,
          },
          { label: "No spaces", met: passwordRules.noSpaces },
        ].map(({ label, met }) => (
          <Typography
            key={label}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.8rem",
              color: met ? "green" : "gray",
            }}
          >
            {met ? "✅" : "❌"} {label}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          className="signup-btn"
          disabled={
            !Object.values(passwordRules).every(Boolean) ||
            password !== confirmPassword
          }
          onClick={() => {
              onClose();
              setName("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              setPasswordRules({
                  length: false,
                  uppercase: false,
                  lowercase: false,
                  number: false,
                  specialChar: false,
                  noSpaces: false,
              });
          }}
        >
          Sign Up
        </Button>
      </DialogActions>
      <Typography
        variant="body2"
        align="center"
        sx={{ width: "100%", paddingBottom: "10px" }}
      >
        Already have an account!{" "}
        <Link
          component="button"
          underline="hover"
          onClick={() => {
            onClose();
            onLogin();
          }}
        >
          Login
        </Link>
      </Typography>
    </Dialog>
  );
};

export default SignupDialog;
