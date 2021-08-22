import type { ReactElement } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Empty from '../../layout/empty/empty'
import Image from 'next/image'
import CustomButton from '../../components/customButton/CustomButton'
import styles from './index.module.scss'
import CustomTextField from "../../components/customTextField/CustomTextField";
import CustomCheckbox from "../../components/customCheckbox/CustomCheckbox";

const Index = () => {
    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <div className={styles.firstCol}>
                    <div className={styles.logo}>
                        <Image src="/images/logo.svg" width={25} height={25} alt="logo"/>
                    </div>

                    <div className={styles.registerBox}>
                        <h1>Create account</h1>
                        <CustomButton text="Sign Up" />
                    </div>
                </div>
                <div className={styles.secondCol}>
                    <CloseIcon className={styles.closeIcon} fontSize="small" />

                    <div className={styles.formContainer} >
                        <h1>Log in</h1>

                        <form className={styles.form}>
                            <div className={styles.textFieldWrapper}>
                                <CustomTextField label="Username or Email Address"/>
                            </div>
                            <div className={styles.textFieldWrapper}>
                                <CustomTextField label="Password"/>
                            </div>

                            <div className={styles.checkboxWrapper}>
                                <CustomCheckbox label="Remember me"/>
                            </div>
                        </form>

                        <div className={styles.buttonWrapper}>
                            <CustomButton fullWidth filled text="Login" />
                        </div>

                        <div className={styles.authOptions}>
                            <a href="#">Sign Up</a>
                            <span>|</span>
                            <a href="#">Lost your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

Index.getLayout = function getLayout(page: ReactElement) {
    return (
      <Empty>
        {page}
      </Empty>
    )
}

export default Index
