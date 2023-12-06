import AuthenticationTwoFactor from "@/Features/Admin/AthenticationForm/AuthenticationTwoFactor";
import Footer from "@/Widgets/Footer";
import Header from "@/Widgets/Header";

const AuthenticationTowFactorPage = ({id}: {id: number}) => {
    return (
        <>
        <Header/>
            <AuthenticationTwoFactor id={id}/>
        <Footer/>
        </>
    );    
}

export default AuthenticationTowFactorPage;