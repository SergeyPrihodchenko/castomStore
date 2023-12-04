import MainLayout from "@/Layouts/MainLayout";
import { PageProps } from "@/types";
import ProductList from "./ui/ProductList";

function ProductListPage({auth, products}: PageProps){
    
    return(
        <MainLayout user={auth.user}>
            <ProductList products={products}/>
        </MainLayout>
    )
}

export default ProductListPage