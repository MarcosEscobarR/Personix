import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './CustomSelect.module.scss';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import Image from "next/image";

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif'
    },
    overrides: {
        MuiFormControl: {
            root: {
                minWidth: '100%'
            }
        },
        MuiSelect: {
            outlined: {
                padding: '5px 10px',
                borderColor: '#D9D9D9'
            },
        }
    }
})

const CustomSelect = () => {
    const [age, setAge] = React.useState(0);
    const handleChange = (event: any) => {
        setAge(event.target.value);
    };
    return (
        <ThemeProvider theme={theme}>
            <FormControl>
                <Select
                    id="demo-customized-select"
                    value={age}
                    onChange={handleChange}
                    variant={"outlined"}
                    IconComponent={() => (
                        <Image src="/images/dropDownIcon.svg" width="20px" height="20px" className={styles.icon}/>)}
                >
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    );
}

export default CustomSelect
