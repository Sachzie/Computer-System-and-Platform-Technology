import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import global CSS for glassmorphism
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    mode: 'light', // Back to light mode
    primary: {
      main: '#d76f30', // New Orange
    },
    secondary: {
      main: '#6bb77b', // New Light Green
    },
    background: {
      default: 'transparent', // Let CSS background show through
      paper: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white for cards
    },
    text: {
      primary: '#172d13', // New Dark Green Text
      secondary: 'rgba(23, 45, 19, 0.6)',
    },
    custom: {
      beige: '#F5F7F5',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'transparent', // Ensure body is transparent for gradient
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          boxShadow: '0 8px 32px 0 rgba(23, 45, 19, 0.05)',
          color: '#172d13',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(215, 111, 48, 0.3)',
        }
      }
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
