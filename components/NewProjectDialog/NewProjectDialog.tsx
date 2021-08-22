import style from './NewProjectDialog.module.scss'
import {Dialog} from "@material-ui/core";
import useForm, {IFormProps} from "../../hooks/useForm";
import InputText from "../InputText/InputText";
import TextareaCustom from "../textareaCustom/textareaCustom";
import CustomButton from "../customButton/customButton";
import {useState} from "react";
import {Close} from "@material-ui/icons";

interface Props {
    open: boolean,
    setOpen: Function
}

class Form {
    constructor() {
        this.name = '';
        this.description = '';
        this.hypothesis = '';
    };

    name: string;
    description: string;
    hypothesis: string;
}

const NewProjectDialog = ({open, setOpen}: Props) => {
    const initialValue: IFormProps = {
        initialValue: new Form()
    };
    const [formValue, handleInputChange] = useForm(initialValue)

    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = (e: any) => {
        console.log(e)
    }
    return (
        <>
            <button className={style.closeButton}><Close style={{color: '#ffff', fontSize: 20}}/></button>
            <Dialog open={open} onClose={handleClose}>
                <div className={style.container}>
                    <div><span className={style.title}>Project Details</span></div>
                    <div className={style.formContainer}>
                        <InputText title='Name' handleInput={handleInputChange} type='text'/>
                        <TextareaCustom title='Description' handleInput={handleInputChange}/>
                        <TextareaCustom title='Hypothesis' handleInput={handleInputChange}/>
                    </div>
                    <div className={style.buttonContainer}>
                        <CustomButton title='Create' onClick={handleClick}/>
                    </div>
                </div>
            </Dialog></>
    )
}

export default NewProjectDialog;