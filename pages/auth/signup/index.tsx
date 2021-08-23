import {ReactElement} from "react";
import Empty from "../../../layout/empty/empty";
import AuthBox from "../../../components/authBox/AuthBox";
import AuthWhiteBox from "../../../components/authWhiteBox/AuthWhiteBox";
import AuthGrayBox from "../../../components/authGrayBox/AuthGrayBox";
import CustomButton from "../../../components/customButton/CustomButton";
import styles from "./index.module.scss";
import CustomTextField from "../../../components/customTextField/CustomTextField";
import Link from 'next/link'
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()

    const goToLogin = () => {
        router.push('/auth/login')
    }

    return (
        <AuthBox>
            <>
                <AuthWhiteBox isLeftSide>
                    <>
                        <div className={styles.formContainer}>
                            <h1>Sign up</h1>

                            <form className={styles.form}>
                                <div className={styles.textFieldWrapper}>
                                    <CustomTextField label="First name"/>
                                </div>

                                <div className={styles.textFieldWrapper}>
                                    <CustomTextField label="Last name"/>
                                </div>

                                <div className={styles.textFieldWrapper}>
                                    <CustomTextField label="Email address"/>
                                </div>

                                <div className={styles.textFieldWrapper}>
                                    <CustomTextField label="Password" isPasswordField/>
                                </div>
                            </form>

                            <div className={styles.buttonWrapper}>
                                <CustomButton fullWidth filled text="Register"/>
                            </div>

                            <div className={styles.authOptions}>
                                <Link href="/auth/login">Log In</Link>
                                <span>|</span>
                                <a href="#">Lost your password?</a>
                            </div>
                        </div>
                    </>
                </AuthWhiteBox>

                <AuthGrayBox>
                    <>
                        <h1>Have an account?</h1>
                        <CustomButton text="Login" onClick={goToLogin}/>
                    </>
                </AuthGrayBox>
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
