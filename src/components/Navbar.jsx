import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/#home" className="navbar-logo">
          <span className="logo-bin">BSIT-NS-3A</span>
        </Link>
        
        <div className="navbar-menu">
            <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                useFlexGap
                flexWrap="wrap"
                justifyContent="center"
            >
                <Button component={Link} to="/#home" color="inherit" sx={{ fontWeight: 500, color: 'var(--text-color)' }}>
                    Home
                </Button>
                <Button component={Link} to="/#about" color="inherit" sx={{ fontWeight: 500, color: 'var(--text-color)' }}>
                    About Us
                </Button>
                <Button component={Link} to="/topics" color="inherit" sx={{ fontWeight: 500, color: 'var(--text-color)' }}>
                    Key Topics
                </Button>
            </Stack>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
