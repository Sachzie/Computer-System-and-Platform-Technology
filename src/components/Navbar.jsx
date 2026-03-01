import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-bin">BSIT-NS-3A</span>
        </Link>
        
        <div className="navbar-menu">
            <Stack direction="row" spacing={2} alignItems="center">
                <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 500, color: 'var(--text-color)' }}>
                    Home
                </Button>
                <Button component={Link} to="/about" color="inherit" sx={{ fontWeight: 500, color: 'var(--text-color)' }}>
                    About Us
                </Button>
                
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title="More" 
                    variant="secondary" 
                    size="sm"
                >
                    <Dropdown.Item href="#action-1">Resources</Dropdown.Item>
                    <Dropdown.Item href="#action-2">Modules</Dropdown.Item>
                    <Dropdown.Item href="#action-3">Contact</Dropdown.Item>
                </DropdownButton>
            </Stack>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
