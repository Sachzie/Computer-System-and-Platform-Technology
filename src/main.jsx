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
    mode: 'light',
    primary: {
      main: '#9F8383',
    },
    secondary: {
      main: '#3a3143',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(255, 218, 179, 0.22)',
    },
    text: {
      primary: '#574964',
      secondary: 'rgba(87, 73, 100, 0.72)',
    },
    custom: {
      beige: '#FFF1E2',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.62)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(159, 131, 131, 0.22)',
          boxShadow: '0 8px 32px 0 rgba(87, 73, 100, 0.12)',
          color: '#574964',
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
          boxShadow: '0 4px 14px 0 rgba(159, 131, 131, 0.28)',
        }
      }
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
