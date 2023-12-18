import AddProduct from "@/Features/Admin/AddProduct/ui/addProduct";
import MainLayout from "@/Layouts/MainLayout";
import { PageProps } from "@/types";

function CreateProduct({auth}: PageProps){
    return(
        <MainLayout user={auth.user}>
            <AddProduct />
        </MainLayout>
    )
}

export default CreateProduct;