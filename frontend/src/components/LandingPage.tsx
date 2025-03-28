import { Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "../styles/LandingPage.css";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";

const LandingPage = () => {
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [openSignupDialog, setOpenSignupDialog] = useState(false);
  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };
    
  const handleOpenSignupDialog = () => {
    setOpenSignupDialog(true);
  };

  const handleCloseSignupDialog = () => {
    setOpenSignupDialog(false);
  };

  return (
    <div className="landing-container">
      <div className="heading-container">
        <Typography variant="h1" className="landing-heading">
          <Typewriter
            words={["Welcome!"]}
            loop={1}
            typeSpeed={150}
          />
        </Typography>
      </div>
      <div className="landing-body">
        <Typography variant="body1" className="landing-body">
          Please Login or Sign-up to Continue!
        </Typography>
      </div>
      <div className="landing-btns">
        <Button
          variant="outlined"
          startIcon={<LoginIcon />}
          className="login-btn"
          onClick={handleOpenLoginDialog}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          className="signup-btn"
          onClick={handleOpenSignupDialog}
        >
          Sign Up
        </Button>
      </div>
      <LoginDialog open={openLoginDialog} onClose={handleCloseLoginDialog} onSignUp={handleOpenSignupDialog}/>
      <SignupDialog open={openSignupDialog} onClose={handleCloseSignupDialog} onLogin={handleOpenLoginDialog}/>
    </div>
  );
};

export default LandingPage;
