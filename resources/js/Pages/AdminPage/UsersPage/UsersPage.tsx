import Footer from "@/Widgets/Footer";
import Header from "@/Widgets/Header";
import UsersPanel from "./ui/UsersPage/UsersPanel";
import { IUser } from "./model/types/type";

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