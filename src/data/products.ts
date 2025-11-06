export type Product = {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
    description: string;
    category: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: "Brownie",
        price: 15000,
        imageSrc: "/src/assets/imagenes/brownie.webp",
        description: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten.",
        category: "productosSinGluten"
    },
    {
        id: 2,
        name: "Torta Amor",
        price: 20000,
        imageSrc: "/src/assets/imagenes/torta_amor.png",
        description: "Capas finísimas de hojarasca artesanal, rellenas con nuestro manjar casero, una crema pastelera hecha en cocina con paciencia y dedicación, y una salsa de frambuesas naturales",
        category: "tortasEspeciales"
    },
    {
        id: 3,
        name: "Cheesecake",
        price: 23000,
        imageSrc: "/src/assets/imagenes/cheesecake.jpg",
        description: "Cheesecake suave y cremoso, con base de galleta y cubierta de salsa de frutos rojos.",
        category: "productosSinAzucar"
    },
    {
        id: 4,
        name: "Empanada de Manzana Casera",
        price: 17000,
        imageSrc: "/src/assets/imagenes/empanada-de-manzana-casera.jpg",
        description: "Pastelería tradicional con relleno de manzanas especiadas y masa crujiente.",
        category: "pasteleriaTradicional"
    },
    {
        id: 5,
        name: "Galletas de Avena",
        price: 15000,
        imageSrc: "/src/assets/imagenes/galletas-de-avena-3.webp",
        description: "Crujientes y saludables galletas de avena, ideales para un snack vegano y nutritivo.",
        category: "productosVegano"
    },
    {
        id: 6,
        name: "Mousse Chocolate",
        price: 21000,
        imageSrc: "/src/assets/imagenes/mouse_choco.jpg",
        description: "Postre individual cremoso y suave, hecho con chocolate de alta calidad.",
        category: "postresIndividuales"
    },
    {
        id: 7,
        name: "Tarta de Santiago",
        price: 27000,
        imageSrc: "/src/assets/imagenes/tarta-de-santiago.webp",
        description: "Tradicional tarta española de almendras, una delicia clásica de la pastelería.",
        category: "pasteleriaTradicional"
    },
    {
        id: 8,
        name: "Tiramisú",
        price: 26000,
        imageSrc: "/src/assets/imagenes/tiramisu-receta-original.webp",
        description: "Clásico postre italiano con capas de café, queso mascarpone y cacao.",
        category: "postresIndividuales"
    },
    {
        id: 9,
        name: "Torta Cuadrada Chocolate",
        price: 30000,
        imageSrc: "/src/assets/imagenes/tort_cuadrada_choco.webp",
        description: "Torta de chocolate con capas de ganache y un toque de avellanas.",
        category: "tortasCuadrada"
    },
    {
        id: 10,
        name: "Torta Circular Manjar",
        price: 28000,
        imageSrc: "/src/assets/imagenes/torta_circular_manjar.webp",
        description: "Bizcocho circular relleno del tradicional manjar y nueces.",
        category: "tortasCirculares"
    },
    {
        id: 11,
        name: "Torta Cuadrada Frutas",
        price: 25000,
        imageSrc: "/src/assets/imagenes/torta_cuadrada_frutas.jpg",
        description: "Torta con frutas frescas y crema chantilly sobre un suave bizcocho.",
        category: "tortasCuadrada"
    },
    {
        id: 12,
        name: "Torta Matrimonial",
        price: 30000,
        imageSrc: "/src/assets/imagenes/torta_matri.jpg",
        description: "Elegante y deliciosa torta diseñada para ser el centro de atención en cualquier boda.",
        category: "tortasEspeciales"
    },
    {
        id: 13,
        name: "Torta Naranja",
        price: 24000,
        imageSrc: "/src/assets/imagenes/torta_naranja.webp",
        description: "Torta ligera y deliciosa, endulzada naturalmente, ideal para opciones sin azúcar.",
        category: "productosSinAzucar"
    },
    {
        id: 14,
        name: "Torta Vegana",
        price: 20000,
        imageSrc: "/src/assets/imagenes/torta_vegana.jpg",
        description: "Torta húmeda de chocolate hecha sin productos de origen animal, perfecta para veganos.",
        category: "productosVegano"
    },
    {
        id: 15,
        name: "Torta Circular Vainilla",
        price: 22000,
        imageSrc: "/src/assets/imagenes/vainilla.png",
        description: "Bizcocho de vainilla clásico relleno con crema pastelera y glaseado dulce.",
        category: "tortasCirculares"
    }

] as const;


