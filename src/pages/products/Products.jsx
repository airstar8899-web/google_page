import ProductsHero from "../../components/ui/productscomponents/productshero/ProductsHero";
import ProductsSection1 from "../../components/ui/productscomponents/productssection1/ProductsSection1";
import ProductsSection2 from "../../components/ui/productscomponents/productssection2/ProductsSection2";
import ProductsSection3 from "../../components/ui/productscomponents/productssection3/ProductsSection3";
import ProductsSection4 from "../../components/ui/productscomponents/productssection4/ProductsSection4";
import ProductsSection5 from "../../components/ui/productscomponents/productssection5/ProductsSection5";
import ProductsSection6 from "../../components/ui/productscomponents/productssection6/ProductsSection6";

const Products = () => {
    return(
        <div>
    
            <ProductsHero />
            <ProductsSection1 />
            <ProductsSection2 />
            <ProductsSection3 />
            <ProductsSection4 />
            <ProductsSection5 />
            <ProductsSection6 />
        </div>
    );
};

export default Products;