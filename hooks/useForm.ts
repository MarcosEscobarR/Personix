import React, {useState} from "react";

export interface IFormProps {
    initialValue: any
}

interface ITarget {
    target: {
        name: string,
        value: string
    }
}

const useForm = ({initialValue}: IFormProps) => {
    const [formValue, setFormValue] = useState(initialValue);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setFormValue({
            ...formValue,
            [name]: [value]
        })
    }

    return [formValue, handleInputChange]
}

export default useForm;