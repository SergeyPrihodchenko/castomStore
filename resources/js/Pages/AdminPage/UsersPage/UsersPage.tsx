import Header from "@/Widgets/Header";
import UsersPanel from "./ui/UsersPage/UsersPanel";
import { IUser } from "./model/types/type";
import Footer from "@/Widgets/Footer/Footer";

const UsersPage = ({users, isSuper}: {users: IUser, isSuper: boolean}) => {
    return (
        <>
            <Header/>
                <UsersPanel users={users} isSuper={isSuper}/>
            <Footer/>
        </>
    );
}

export default UsersPage;