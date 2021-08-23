import type { ReactElement } from 'react'
import Empty from '../../../layout/empty/empty'
import CustomButton from '../../../components/customButton/CustomButton'
import styles from './index.module.scss'
import CustomTextField from "../../../components/customTextField/CustomTextField";
import CustomCheckbox from "../../../components/customCheckbox/CustomCheckbox";
import AuthGrayBox from "../../../components/authGrayBox/AuthGrayBox";
import AuthWhiteBox from "../../../components/authWhiteBox/AuthWhiteBox";
import AuthBox from "../../../components/authBox/AuthBox";
import Link from 'next/link'
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()

    const goToSignup = () => {
        router.push('/auth/signup')
    }

    return (
        <AuthBox>
            <>
                <AuthGrayBox isLeftSide>
                    <>
                        <h1>Create account</h1>
                        <CustomButton text="Sign Up" onClick={goToSignup}/>
                    </>
                </AuthGrayBox>

                <AuthWhiteBox>
                    <div className={styles.formContainer}>
                        <h1>Log in</h1>

                        <form className={styles.form}>
                            <div className={styles.textFieldWrapper}>
                                <CustomTextField label="Username or Email Address"/>
                            </div>
                            <div className={styles.textFieldWrapper}>
                                <CustomTextField label="Password" isPasswordField/>
                            </div>

                            <div className={styles.checkboxWrapper}>
                                <CustomCheckbox label="Remember me"/>
                            </div>
                        </form>

                        <div className={styles.buttonWrapper}>
                            <CustomButton fullWidth filled text="Login"/>
                        </div>

                        <div className={styles.authOptions}>
                            <Link href="/auth/signup">Sign Up</Link>
                            <span>|</span>
                            <a href="#">Lost your password?</a>
                        </div>
                    </div>
                </AuthWhiteBox>
            </>
        </AuthBox>
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
