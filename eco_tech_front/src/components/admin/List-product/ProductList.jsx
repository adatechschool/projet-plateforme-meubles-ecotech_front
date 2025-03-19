import ListAllProducts from "../../Card/ListAllProducts";

export const ProductList = () => {
    const styles = {
        container: {
            margin: "auto",
        },
    };

    return (
        <div style={styles.container}>
            <ListAllProducts />
        </div>
    );
}
