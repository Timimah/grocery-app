// import categoryData from './categoryData'
import { ProductCard } from './ProductCard'
import pepper from 'https://picsum.photos/id/999/4000/2667'


export const Products = ({ productName }) => {
    const categoryData = [
        {
            category: "Vegetable",
            products: [
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                }]
        },
        {
            category: "Frozen foods",
            products: [
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                }]
        },
        {
            category: "Organics",
            products: [
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                }]
        },
        {
            category: "Spices",
            products: [
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                }]
        },
        {
            category: "Beverages and Drinks",
            products: [
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                }]
        },
        {
            category: "Featured",
            products: [
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                },
                {
                    catImage: pepper,
                    catName: "Lorem",
                    catPrice: "$25"
                }]
        },
    ]
    return (
        <>
            <div>
                {categoryData.map((data, index) => (
                    <div key={index}>
                        <div>
                            <p className='text-6xl pl-6 py-6'>{data.category}</p>
                            <div className='px-6 flex flex-col md:flex-row gap-6'>
                            {data.products.map((product,index) => (
                                <div key={index}>
                                <ProductCard prdImage={product.catImage}  name={product.catName} price={product.catPrice} />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
