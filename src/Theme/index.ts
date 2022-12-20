import { Open_Sans } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const opensans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: opensans.style.fontFamily,
    }
});

export default theme;