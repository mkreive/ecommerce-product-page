import "./index.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    // i duombaze sukelti duomenis
    const products = [
        {
            title: "Fall Limited Edition Sneakers",
            company: "Sneaker Company",
            price: 250,
            discount: 20,
            priceReduced: 200,
            stock: 22,
            category: ["men", "women"],
            photo: "https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/image-product-4_vxuvtd.jpg",
        },
        {
            title: "Night star sneakers",
            company: "Nike",
            price: 300,
            discount: 15,
            priceReduced: 255,
            stock: 8,
            category: ["men"],
            photo: "https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-11_jid4zr.jpg",
        },
        {
            title: "Light star sneakers",
            company: "Nike",
            price: 180,
            discount: 1,
            priceReduced: 162,
            stock: 10,
            category: ["women"],
            photo: "https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-8_mrpszr.jpg",
        },
        {
            title: "All star Chuck Taylor",
            company: "Converse",
            price: 285,
            discount: 20,
            priceReduced: 228,
            stock: 88,
            category: ["men", "women"],
            photo: "https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-7_jvdqwi.jpg",
        },
        {
            title: "Sky runner sneakers",
            company: "Rider",
            price: 100,
            discount: 10,
            priceReduced: 90,
            stock: 60,
            category: ["women"],
            photo: "https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-10_rsg5jx.jpg",
        },
    ];

    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
        </div>
    );
}

export default App;
