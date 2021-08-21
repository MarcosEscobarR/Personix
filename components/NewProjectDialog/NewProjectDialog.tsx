import style from './NewProjectDialog.module.scss'
import {Dialog} from "@material-ui/core";
import useForm, {IFormProps} from "../../hooks/useForm";
import InputText from "../InputText/InputText";

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

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className={style.container}>
                <div><span className={style.title}>Project Details</span></div>
                <div className={style.formContainer}>
                    <InputText title='Name' handleInput={handleInputChange} type='text'/>
                    <InputText title='Description' handleInput={handleInputChange} type='text'/>
                    <InputText title='Hypothesis' handleInput={handleInputChange} type='text'/>
                </div>
            </div>
        </Dialog>
    )
}

export default NewProjectDialog;