import {TextField} from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#94E47C',
            dark: '#94E47C',
            light: '#94E47C',
        },
        info: {
            main: '#94E47C',
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: '#B7B7B9',
                fontSize: 12,
                fontWeight: 400,
                fontFamily: 'Poppins, sans-serif',
            },
        },
        MuiInput: {
            underline: {
                '&:hover:not($disabled):before': {
                    borderBottom: '1px solid #94E47C',//its when you hover and input is not foucused
                },
            },
        },
    }
});

interface Props {
    label: string
    isPasswordField?: boolean
}

const CustomTextField = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                fullWidth
                label={props.label}
                required
                variant="standard"
                type={props.isPasswordField ? 'password' : 'text'}
            />
        </ThemeProvider>
    )
}

export default CustomTextField
