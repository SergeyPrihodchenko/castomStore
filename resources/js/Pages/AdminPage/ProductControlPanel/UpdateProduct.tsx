import UpdateProductComponent from "@/Features/Admin/UpdateProduct/ui/UpdateProduct";
import MainLayout from "@/Layouts/MainLayout";
import { PageProps } from "@/types";

function UpdateProduct({auth, product, catalog, video_link}: PageProps){
    return(
        <MainLayout user={auth.user}>
            <UpdateProductComponent product={product} catalog={catalog}/>
        </MainLayout>
    )
}

export default UpdateProduct;