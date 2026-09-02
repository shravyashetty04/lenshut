const products = [
    {
        id: 1, code: "AABA1038", name: "AABA1038 Slim Rectangle",
        brand: "LENSHUT", desc: "Slim rectangular prescription frame, lightweight and durable for everyday comfort.",
        size: "M", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2299, image: "frames/AABA1038_front.jpg", hoverImage: "frames/AABA1038_IMG_2056.jpg",
        images: ["frames/AABA1038_front.jpg", "frames/AABA1038_IMG_2055.jpg", "frames/AABA1038_IMG_2056.jpg"],
        isNew: false, isFeatured: true
    },
    {
        id: 2, code: "CABA3443", name: "CABA3443 Classic Full-Rim",
        brand: "LENSHUT", desc: "Classic full-rim frame in a versatile design suitable for all face shapes.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1999, image: "frames/CABA3443_IMG_1789.jpg", hoverImage: "frames/CABA3443_IMG_1790.jpg",
        images: ["frames/CABA3443_IMG_1789.jpg", "frames/CABA3443_IMG_1790.jpg", "frames/CABA3443_IMG_1791.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 3, code: "CABA3510", name: "CABA3510 Urban Square",
        brand: "LENSHUT", desc: "Urban-style square frame with a bold look, perfect for office and casual wear.",
        size: "L", badge: "new-arrival", category: "eyeglasses", shape: "square", gender: "men",
        price: 2499, image: "frames/CABA3510_IMG_1463.jpg", hoverImage: "frames/CABA3510_IMG_1464.jpg",
        images: ["frames/CABA3510_IMG_1463.jpg", "frames/CABA3510_IMG_1464.jpg", "frames/CABA3510_IMG_1465.jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 4, code: "EABA0532", name: "EABA0532 Retro Round",
        brand: "LENSHUT", desc: "Retro-inspired round frames with a modern twist, ideal for vintage style lovers.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2199, image: "frames/EABA0532_IMG_0359.jpg", hoverImage: "frames/EABA0532_IMG_0360.jpg",
        images: ["frames/EABA0532_IMG_0359.jpg", "frames/EABA0532_IMG_0360.jpg", "frames/EABA0532_IMG_0361.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 5, code: "EBBA0643", name: "EBBA0643 Classic Rectangle",
        brand: "LENSHUT", desc: "Timeless classic rectangle prescription frame with anti-glare coating compatibility.",
        size: "M", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 1799, image: "frames/EBBA0643_IMG_2351.jpg", hoverImage: "frames/EBBA0643_IMG_2352.jpg",
        images: ["frames/EBBA0643_IMG_2351.jpg", "frames/EBBA0643_IMG_2352.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 6, code: "FAAA1212", name: "FAAA1212 Minimal Oval",
        brand: "LENSHUT", desc: "Minimalist oval frame in a clean finish, great for everyday prescription wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/FAAA1212_IMG20260725194903.jpg", hoverImage: "frames/FAAA1212_IMG20260725194903.jpg",
        images: ["frames/FAAA1212_IMG20260725194903.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 7, code: "FAAA1892", name: "FAAA1892 Light Rectangle",
        brand: "LENSHUT", desc: "Ultra-light rectangular frame with flexible temple arms for extended wear comfort.",
        size: "M", badge: "new-arrival", category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2599, image: "frames/FAAA1892_IMG_1717.jpg", hoverImage: "frames/FAAA1892_IMG_1718.jpg",
        images: ["frames/FAAA1892_IMG_1717.jpg", "frames/FAAA1892_IMG_1718.jpg", "frames/FAAA1892_IMG_1719.jpg"],
        isNew: true, isFeatured: true
    },
    {
        id: 8, code: "FABA2116", name: "FABA2116 Sleek Full-Rim",
        brand: "LENSHUT", desc: "Sleek full-rim prescription frame with smooth contours for a refined look.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2299, image: "frames/FABA2116_IMG_2138.jpg", hoverImage: "frames/FABA2116_IMG_2139.jpg",
        images: ["frames/FABA2116_IMG_2138.jpg", "frames/FABA2116_IMG_2139.jpg", "frames/FABA2116_IMG_2140.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 9, code: "FABA2295", name: "FABA2295 Elegant Oval",
        brand: "LENSHUT", desc: "Elegantly designed oval prescription frame for a sophisticated everyday look.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2399, image: "frames/FABA2295_IMG_1985.jpg", hoverImage: "frames/FABA2295_IMG_1986.jpg",
        images: ["frames/FABA2295_IMG_1985.jpg", "frames/FABA2295_IMG_1986.jpg", "frames/FABA2295_IMG_1987.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 10, code: "FBBA2598", name: "FBBA2598 Bold Square",
        brand: "LENSHUT", desc: "Bold square frames with thick acetate build for a statement-making style.",
        size: "L", badge: "limited-edition", category: "eyeglasses", shape: "square", gender: "men",
        price: 3199, image: "frames/FBBA2598_IMG_2384.jpg", hoverImage: "frames/FBBA2598_IMG_2385.jpg",
        images: ["frames/FBBA2598_IMG_2384.jpg", "frames/FBBA2598_IMG_2385.jpg", "frames/FBBA2598_IMG_2386.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 11, code: "FBBA3331", name: "FBBA3331 Smart Rectangle",
        brand: "LENSHUT", desc: "Smart rectangular frame with a polished finish, perfect for professional settings.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1999, image: "frames/FBBA3331_IMG_2213.jpg", hoverImage: "frames/FBBA3331_IMG_2214.jpg",
        images: ["frames/FBBA3331_IMG_2213.jpg", "frames/FBBA3331_IMG_2214.jpg", "frames/FBBA3331_IMG_2215.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 12, code: "FBBA3351", name: "FBBA3351 Structured Frame",
        brand: "LENSHUT", desc: "Structured prescription frame with defined edges for a confident, stylish look.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/FBBA3351_IMG_2312.jpg", hoverImage: "frames/FBBA3351_IMG_2313.jpg",
        images: ["frames/FBBA3351_IMG_2312.jpg", "frames/FBBA3351_IMG_2313.jpg", "frames/FBBA3351_IMG_2314.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 13, code: "GAAA3225", name: "GAAA3225 Chic Cat-Eye",
        brand: "LENSHUT", desc: "Chic cat-eye prescription frame with upswept corners for a feminine, stylish look.",
        size: "S", badge: "best-seller", category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 2799, image: "frames/GAAA3225_IMG_0419.jpg", hoverImage: "frames/GAAA3225_IMG_0419.jpg",
        images: ["frames/GAAA3225_IMG_0419.jpg"],
        isNew: false, isFeatured: true
    },
    {
        id: 14, code: "GAAA3254", name: "GAAA3254 Retro Cat-Eye",
        brand: "LENSHUT", desc: "Retro cat-eye frame with a glossy finish that pairs perfectly with any outfit.",
        size: "S", badge: "new-arrival", category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 2999, image: "frames/GAAA3254_IMG_1366.jpg", hoverImage: "frames/GAAA3254_IMG_1367.jpg",
        images: ["frames/GAAA3254_IMG_1366.jpg", "frames/GAAA3254_IMG_1367.jpg", "frames/GAAA3254_IMG_1368.jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 15, code: "GAAA3266", name: "GAAA3266 Vintage Cat-Eye",
        brand: "LENSHUT", desc: "Vintage-inspired cat-eye frame with a subtle flare for a timeless feminine touch.",
        size: "S", badge: null, category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 2599, image: "frames/GAAA3266_IMG_1585.jpg", hoverImage: "frames/GAAA3266_IMG_1586.jpg",
        images: ["frames/GAAA3266_IMG_1585.jpg", "frames/GAAA3266_IMG_1586.jpg", "frames/GAAA3266_IMG_1587.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 16, code: "GABA3055", name: "GABA3055 Subtle Cat-Eye",
        brand: "LENSHUT", desc: "Subtly angled cat-eye frame that adds elegance without being overpowering.",
        size: "M", badge: null, category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 2499, image: "frames/GABA3055_IMG_1378.jpg", hoverImage: "frames/GABA3055_IMG_1379.jpg",
        images: ["frames/GABA3055_IMG_1378.jpg", "frames/GABA3055_IMG_1379.jpg", "frames/GABA3055_IMG_1380.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 17, code: "GABA3067", name: "GABA3067 Classic Cat-Eye",
        brand: "LENSHUT", desc: "Classic cat-eye design with full-rim construction for durable everyday wear.",
        size: "S", badge: "limited-edition", category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 3299, image: "frames/GABA3067_IMG_1198.jpg", hoverImage: "frames/GABA3067_IMG_1199.jpg",
        images: ["frames/GABA3067_IMG_1198.jpg", "frames/GABA3067_IMG_1199.jpg", "frames/GABA3067_IMG_1200.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 18, code: "GABA3096", name: "GABA3096 Modern Cat-Eye",
        brand: "LENSHUT", desc: "Modern interpretation of the cat-eye shape with slim temples and refined detailing.",
        size: "S", badge: null, category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 2799, image: "frames/GABA3096_IMG_2051.jpg", hoverImage: "frames/GABA3096_IMG_2052.jpg",
        images: ["frames/GABA3096_IMG_2051.jpg", "frames/GABA3096_IMG_2052.jpg", "frames/GABA3096_IMG_2053.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 19, code: "GABA3138", name: "GABA3138 Trendy Cat-Eye",
        brand: "LENSHUT", desc: "Trendy cat-eye frame with a contemporary silhouette, a go-to for fashion-forward wearers.",
        size: "M", badge: "new-arrival", category: "eyeglasses", shape: "cat-eye", gender: "women",
        price: 3099, image: "frames/GABA3138_IMG_2015(1).jpg", hoverImage: "frames/GABA3138_IMG_2016(1).jpg",
        images: ["frames/GABA3138_IMG_2015(1).jpg", "frames/GABA3138_IMG_2016(1).jpg", "frames/GABA3138_IMG_2017(1).jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 20, code: "IABA2522", name: "IABA2522 Slim Round",
        brand: "LENSHUT", desc: "Slim round frame with wire-thin construction for a minimalist, intellectual look.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2299, image: "frames/IABA2522_IMG_2182.jpg", hoverImage: "frames/IABA2522_IMG_2183.jpg",
        images: ["frames/IABA2522_IMG_2182.jpg", "frames/IABA2522_IMG_2183.jpg", "frames/IABA2522_IMG_2184.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 21, code: "JP10276", name: "JP10276 Classic Rectangle",
        brand: "LENSHUT", desc: "Classic rectangular prescription frame in a durable build for long-lasting wear.",
        size: "M", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 1999, image: "frames/JP10276_IMG_2520.jpg", hoverImage: "frames/JP10276_IMG_2522.jpg",
        images: ["frames/JP10276_IMG_2520.jpg", "frames/JP10276_IMG_2522.jpg", "frames/JP10276_IMG_2523.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 22, code: "JP99457345", name: "JP99457345 Full-Rim Square",
        brand: "LENSHUT", desc: "Full-rim square frame with robust construction, suited for power prescriptions.",
        size: "L", badge: null, category: "eyeglasses", shape: "square", gender: "men",
        price: 2399, image: "frames/JP99457345_IMG_2590.jpg", hoverImage: "frames/JP99457345_IMG_2592.jpg",
        images: ["frames/JP99457345_IMG_2590.jpg", "frames/JP99457345_IMG_2592.jpg", "frames/JP99457345_IMG_2593.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 23, code: "JP995157", name: "JP995157 Slim Oval",
        brand: "LENSHUT", desc: "Slim oval prescription frame with a comfortable bridge and spring hinges.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/JP995157_IMG_2614.jpg", hoverImage: "frames/JP995157_IMG_2615.jpg",
        images: ["frames/JP995157_IMG_2614.jpg", "frames/JP995157_IMG_2615.jpg", "frames/JP995157_IMG_2617.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 24, code: "JP995275", name: "JP995275 Urban Rectangle",
        brand: "LENSHUT", desc: "Urban rectangle frame with a matte texture finish for a smart, contemporary style.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/JP995275_IMG_2270.jpg", hoverImage: "frames/JP995275_IMG_2271.jpg",
        images: ["frames/JP995275_IMG_2270.jpg", "frames/JP995275_IMG_2271.jpg", "frames/JP995275_IMG_2272.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 25, code: "Jp995292", name: "JP995292 Lightweight Frame",
        brand: "LENSHUT", desc: "Lightweight prescription frame with comfortable fit, designed for all-day wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1999, image: "frames/Jp995292_IMG_0356.jpg", hoverImage: "frames/Jp995292_IMG_0357.jpg",
        images: ["frames/Jp995292_IMG_0356.jpg", "frames/Jp995292_IMG_0357.jpg", "frames/Jp995292_IMG_0358.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 26, code: "JP995360", name: "JP995360 Classic Full-Rim",
        brand: "LENSHUT", desc: "Dependable full-rim frame in a classic cut, suitable for both office and casual use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2099, image: "frames/JP995360_IMG_1799.jpg", hoverImage: "frames/JP995360_IMG_1800.jpg",
        images: ["frames/JP995360_IMG_1799.jpg", "frames/JP995360_IMG_1800.jpg", "frames/JP995360_IMG_1801.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 27, code: "JP995378", name: "JP995378 Bold Rectangle",
        brand: "LENSHUT", desc: "Bold rectangular frame with a wide front for a commanding, stylish presence.",
        size: "L", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2499, image: "frames/JP995378_IMG_1868.jpg", hoverImage: "frames/JP995378_IMG_1870.jpg",
        images: ["frames/JP995378_IMG_1868.jpg", "frames/JP995378_IMG_1870.jpg", "frames/JP995378_IMG_1871.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 28, code: "JP995389", name: "JP995389 Slim Everyday",
        brand: "LENSHUT", desc: "Slim, no-fuss prescription frame for effortless everyday use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1799, image: "frames/JP995389_front.jpg", hoverImage: "frames/JP995389_front.jpg",
        images: ["frames/JP995389_front.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 29, code: "JP995403", name: "JP995403 Compact Rectangle",
        brand: "LENSHUT", desc: "Compact rectangular frame with a tight fit for petite faces.",
        size: "S", badge: null, category: "eyeglasses", shape: "rectangle", gender: "women",
        price: 1899, image: "frames/JP995403_IMG_0809.jpg", hoverImage: "frames/JP995403_IMG_0809.jpg",
        images: ["frames/JP995403_IMG_0809.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 30, code: "JP995412", name: "JP995412 Modern Rectangle",
        brand: "LENSHUT", desc: "Modern rectangular frame with a balanced design for professional and casual wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP995412_IMG_1698.jpg", hoverImage: "frames/JP995412_IMG_1699.jpg",
        images: ["frames/JP995412_IMG_1698.jpg", "frames/JP995412_IMG_1699.jpg", "frames/JP995412_IMG_1700.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 31, code: "JP995437", name: "JP995437 Classic Round",
        brand: "LENSHUT", desc: "Classic round prescription frame for a timeless, intellectual aesthetic.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2299, image: "frames/JP995437_IMG_1876.jpg", hoverImage: "frames/JP995437_IMG_1877.jpg",
        images: ["frames/JP995437_IMG_1876.jpg", "frames/JP995437_IMG_1877.jpg", "frames/JP995437_IMG_1878.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 32, code: "JP995488", name: "JP995488 Light Rectangle",
        brand: "LENSHUT", desc: "Lightweight rectangle frame offering comfort and clarity for long wearing sessions.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 1999, image: "frames/JP995488_IMG_2810.jpg", hoverImage: "frames/JP995488_IMG_2810.jpg",
        images: ["frames/JP995488_IMG_2810.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 33, code: "JP995495", name: "JP995495 Slim Oval",
        brand: "LENSHUT", desc: "Slim oval frame with a gentle curve, perfect for softer face shapes.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/JP995495_front.jpg", hoverImage: "frames/JP995495_front.jpg",
        images: ["frames/JP995495_front.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 34, code: "JP995509", name: "JP995509 Structured Square",
        brand: "LENSHUT", desc: "Structured square frame with sharp edges that suits angular and oval face shapes.",
        size: "L", badge: "new-arrival", category: "eyeglasses", shape: "square", gender: "men",
        price: 2599, image: "frames/JP995509_IMG_2708.jpg", hoverImage: "frames/JP995509_IMG_2709.jpg",
        images: ["frames/JP995509_IMG_2708.jpg", "frames/JP995509_IMG_2709.jpg", "frames/JP995509_IMG_2710.jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 35, code: "JP995517", name: "JP995517 Bold Acetate",
        brand: "LENSHUT", desc: "Bold acetate full-rim frame in a strong rectangular silhouette.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2699, image: "frames/JP995517_IMG_0822.jpg", hoverImage: "frames/JP995517_IMG_0823.jpg",
        images: ["frames/JP995517_IMG_0822.jpg", "frames/JP995517_IMG_0823.jpg", "frames/JP995517_IMG_0824.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 36, code: "JP9955402", name: "JP9955402 Slim Rectangle",
        brand: "LENSHUT", desc: "Slimline rectangle frame with a low-profile look for subtle prescription wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1999, image: "frames/JP9955402_IMG_2197.jpg", hoverImage: "frames/JP9955402_IMG_2198.jpg",
        images: ["frames/JP9955402_IMG_2197.jpg", "frames/JP9955402_IMG_2198.jpg", "frames/JP9955402_IMG_2199.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 37, code: "JP9955457", name: "JP9955457 Full-Rim Classic",
        brand: "LENSHUT", desc: "Full-rim classic prescription frame with a balanced proportion for everyday wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/JP9955457_IMG_2702.jpg", hoverImage: "frames/JP9955457_IMG_2703.jpg",
        images: ["frames/JP9955457_IMG_2702.jpg", "frames/JP9955457_IMG_2703.jpg", "frames/JP9955457_IMG_2704.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 38, code: "JP9955492", name: "JP9955492 Modern Round",
        brand: "LENSHUT", desc: "Modern round frame with clean detailing, bridging retro and contemporary styles.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2299, image: "frames/JP9955492_IMG_0952.jpg", hoverImage: "frames/JP9955492_IMG_0953.jpg",
        images: ["frames/JP9955492_IMG_0952.jpg", "frames/JP9955492_IMG_0953.jpg", "frames/JP9955492_IMG_0954.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 39, code: "JP9955494", name: "JP9955494 Oval Frame",
        brand: "LENSHUT", desc: "Oval prescription frame with a smooth rim and comfortable nose pad system.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/JP9955494_IMG_0775.jpg", hoverImage: "frames/JP9955494_IMG_0776.jpg",
        images: ["frames/JP9955494_IMG_0775.jpg", "frames/JP9955494_IMG_0776.jpg", "frames/JP9955494_IMG_0777.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 40, code: "JP9955496", name: "JP9955496 Smart Rectangle",
        brand: "LENSHUT", desc: "Smart rectangular frame with an ergonomic build for professional use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9955496_IMG_0976.jpg", hoverImage: "frames/JP9955496_IMG_0977.jpg",
        images: ["frames/JP9955496_IMG_0976.jpg", "frames/JP9955496_IMG_0977.jpg", "frames/JP9955496_IMG_0979.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 41, code: "Jp9955519", name: "JP9955519 Minimal Frame",
        brand: "LENSHUT", desc: "Minimal prescription frame with a clean look, ideal for minimalist style lovers.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1799, image: "frames/Jp9955519_front.jpg", hoverImage: "frames/Jp9955519_front.jpg",
        images: ["frames/Jp9955519_front.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 42, code: "Jp9955527", name: "JP9955527 Sleek Rectangle",
        brand: "LENSHUT", desc: "Sleek rectangle frame with a smooth finish for a polished prescription look.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 1899, image: "frames/Jp9955527_front.jpg", hoverImage: "frames/Jp9955527_front.jpg",
        images: ["frames/Jp9955527_front.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 43, code: "JP9955619", name: "JP9955619 Classic Square",
        brand: "LENSHUT", desc: "Classic square frame with a sturdy acetate build and wide temple arms.",
        size: "L", badge: null, category: "eyeglasses", shape: "square", gender: "men",
        price: 2499, image: "frames/JP9955619_IMG_2676.jpg", hoverImage: "frames/JP9955619_IMG_2677.jpg",
        images: ["frames/JP9955619_IMG_2676.jpg", "frames/JP9955619_IMG_2677.jpg", "frames/JP9955619_IMG_2678.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 44, code: "JP9955636", name: "JP9955636 Rectangular",
        brand: "LENSHUT", desc: "Rectangular full-rim prescription frame with a strong profile for confident wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/JP9955636_IMG_2669.jpg", hoverImage: "frames/JP9955636_IMG_2670.jpg",
        images: ["frames/JP9955636_IMG_2669.jpg", "frames/JP9955636_IMG_2670.jpg", "frames/JP9955636_IMG_2671.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 45, code: "JP9955721", name: "JP9955721 Round Prescription",
        brand: "LENSHUT", desc: "Round prescription frame that blends retro charm with modern comfort.",
        size: "S", badge: "best-seller", category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2399, image: "frames/JP9955721_IMG_2418.jpg", hoverImage: "frames/JP9955721_IMG_2419.jpg",
        images: ["frames/JP9955721_IMG_2418.jpg", "frames/JP9955721_IMG_2419.jpg", "frames/JP9955721_IMG_2420.jpg"],
        isNew: false, isFeatured: true
    },
    {
        id: 46, code: "JP9955782", name: "JP9955782 Premium Rectangle",
        brand: "LENSHUT", desc: "Premium rectangular frame with high-quality acetate and adjustable nose pads.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2799, image: "frames/JP9955782_IMG_2336.jpg", hoverImage: "frames/JP9955782_IMG_2337.jpg",
        images: ["frames/JP9955782_IMG_2336.jpg", "frames/JP9955782_IMG_2337.jpg", "frames/JP9955782_IMG_2338.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 47, code: "JP9955788", name: "JP9955788 Oval Round",
        brand: "LENSHUT", desc: "Oval-round hybrid frame that complements both diamond and heart face shapes.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2299, image: "frames/JP9955788_IMG_2461.jpg", hoverImage: "frames/JP9955788_IMG_2462.jpg",
        images: ["frames/JP9955788_IMG_2461.jpg", "frames/JP9955788_IMG_2462.jpg", "frames/JP9955788_IMG_2463.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 48, code: "JP9955836", name: "JP9955836 Full Square",
        brand: "LENSHUT", desc: "Full square prescription frame with a bold look suited for angular faces.",
        size: "L", badge: null, category: "eyeglasses", shape: "square", gender: "men",
        price: 2599, image: "frames/JP9955836_IMG_2467.jpg", hoverImage: "frames/JP9955836_IMG_2468.jpg",
        images: ["frames/JP9955836_IMG_2467.jpg", "frames/JP9955836_IMG_2468.jpg", "frames/JP9955836_IMG_2469.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 49, code: "JP9956190", name: "JP9956190 Lightweight Oval",
        brand: "LENSHUT", desc: "Lightweight oval frame with spring hinges for easy all-day comfort.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/JP9956190_IMG_1404.jpg", hoverImage: "frames/JP9956190_IMG_1405.jpg",
        images: ["frames/JP9956190_IMG_1404.jpg", "frames/JP9956190_IMG_1405.jpg", "frames/JP9956190_IMG_1406.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 50, code: "JP9956274", name: "JP9956274 Urban Rectangle",
        brand: "LENSHUT", desc: "Urban full-rim rectangle frame with a confident silhouette for everyday use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9956274_IMG_1508.jpg", hoverImage: "frames/JP9956274_IMG_1509.jpg",
        images: ["frames/JP9956274_IMG_1508.jpg", "frames/JP9956274_IMG_1509.jpg", "frames/JP9956274_IMG_1510.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 51, code: "JP9956285", name: "JP9956285 Classic Rectangle",
        brand: "LENSHUT", desc: "No-fuss classic rectangle prescription frame that goes with everything.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1999, image: "frames/JP9956285_IMG_2786.jpg", hoverImage: "frames/JP9956285_IMG_2788.jpg",
        images: ["frames/JP9956285_IMG_2786.jpg", "frames/JP9956285_IMG_2788.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 52, code: "JP9956317", name: "JP9956317 Multi-Photo Frame",
        brand: "LENSHUT", desc: "Versatile prescription frame with a refined shape for professional looks.",
        size: "M", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2299, image: "frames/JP9956317_IMG_1497.jpg", hoverImage: "frames/JP9956317_IMG_1498.jpg",
        images: ["frames/JP9956317_IMG_1497.jpg", "frames/JP9956317_IMG_1498.jpg", "frames/JP9956317_IMG_1499.jpg", "frames/JP9956317_IMG_1500.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 53, code: "JP9956330", name: "JP9956330 Classic Oval",
        brand: "LENSHUT", desc: "Classic oval frame with a soft edge profile, great for all face shapes.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/JP9956330_IMG_2149.jpg", hoverImage: "frames/JP9956330_IMG_2150.jpg",
        images: ["frames/JP9956330_IMG_2149.jpg", "frames/JP9956330_IMG_2150.jpg", "frames/JP9956330_IMG_2151.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 54, code: "JP9956359", name: "JP9956359 Structured Rectangle",
        brand: "LENSHUT", desc: "Structured full-rim rectangular prescription frame with broad temple design.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2299, image: "frames/JP9956359_IMG_1529.jpg", hoverImage: "frames/JP9956359_IMG_1530.jpg",
        images: ["frames/JP9956359_IMG_1529.jpg", "frames/JP9956359_IMG_1530.jpg", "frames/JP9956359_IMG_1531.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 55, code: "JP9956456", name: "JP9956456 Classic Square",
        brand: "LENSHUT", desc: "Classic square prescription frame with a natural, easy-fitting design.",
        size: "L", badge: null, category: "eyeglasses", shape: "square", gender: "men",
        price: 2499, image: "frames/JP9956456_IMG_1333.jpg", hoverImage: "frames/JP9956456_IMG_1334.jpg",
        images: ["frames/JP9956456_IMG_1333.jpg", "frames/JP9956456_IMG_1334.jpg", "frames/JP9956456_IMG_1335.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 56, code: "JP9956465", name: "JP9956465 Slim Everyday",
        brand: "LENSHUT", desc: "Slim everyday prescription frame in a practical, low-maintenance design.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 1899, image: "frames/JP9956465_front.jpg", hoverImage: "frames/JP9956465_front.jpg",
        images: ["frames/JP9956465_front.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 57, code: "JP9956597", name: "JP9956597 Bold Rectangle",
        brand: "LENSHUT", desc: "Bold rectangular frame that creates a strong, confident first impression.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2499, image: "frames/JP9956597_IMG_0846.jpg", hoverImage: "frames/JP9956597_IMG_0847.jpg",
        images: ["frames/JP9956597_IMG_0846.jpg", "frames/JP9956597_IMG_0847.jpg", "frames/JP9956597_IMG_0848.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 58, code: "Jp9956616", name: "JP9956616 Petite Round",
        brand: "LENSHUT", desc: "Petite round prescription frame for smaller faces, with adjustable nose pads.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/Jp9956616_IMG_0347.jpg", hoverImage: "frames/Jp9956616_IMG_0348.jpg",
        images: ["frames/Jp9956616_IMG_0347.jpg", "frames/Jp9956616_IMG_0348.jpg", "frames/Jp9956616_IMG_0349.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 59, code: "JP9956628", name: "JP9956628 Modern Slim",
        brand: "LENSHUT", desc: "Modern slim prescription frame with a sophisticated urban aesthetic.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9956628_IMG_0810.jpg", hoverImage: "frames/JP9956628_IMG_0811.jpg",
        images: ["frames/JP9956628_IMG_0810.jpg", "frames/JP9956628_IMG_0811.jpg", "frames/JP9956628_IMG_0812.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 60, code: "JP9956660", name: "JP9956660 Oval Round",
        brand: "LENSHUT", desc: "Oval-round prescription frame in a timeless design that suits any occasion.",
        size: "M", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2099, image: "frames/JP9956660_IMG_0416.jpg", hoverImage: "frames/JP9956660_IMG_0417.jpg",
        images: ["frames/JP9956660_IMG_0416.jpg", "frames/JP9956660_IMG_0417.jpg", "frames/JP9956660_IMG_0418.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 61, code: "Jp9956666", name: "JP9956666 Classic Rectangle",
        brand: "LENSHUT", desc: "Classic full-rim rectangle frame with a no-nonsense build for daily use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 1999, image: "frames/Jp9956666_IMG_0365.jpg", hoverImage: "frames/Jp9956666_IMG_0366.jpg",
        images: ["frames/Jp9956666_IMG_0365.jpg", "frames/Jp9956666_IMG_0366.jpg", "frames/Jp9956666_IMG_0367.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 62, code: "JP9956704", name: "JP9956704 Lightweight Square",
        brand: "LENSHUT", desc: "Lightweight square prescription frame that balances style with comfort.",
        size: "M", badge: null, category: "eyeglasses", shape: "square", gender: "unisex",
        price: 2299, image: "frames/JP9956704_IMG_1290.jpg", hoverImage: "frames/JP9956704_IMG_1291.jpg",
        images: ["frames/JP9956704_IMG_1290.jpg", "frames/JP9956704_IMG_1291.jpg", "frames/JP9956704_IMG_1292.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 63, code: "JP9956709", name: "JP9956709 Full-Rim Rectangle",
        brand: "LENSHUT", desc: "Full-rim prescription rectangle frame with spring hinges for flexible comfort.",
        size: "M", badge: "new-arrival", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2399, image: "frames/JP9956709_IMG_2008.jpg", hoverImage: "frames/JP9956709_IMG_2009.jpg",
        images: ["frames/JP9956709_IMG_2008.jpg", "frames/JP9956709_IMG_2009.jpg", "frames/JP9956709_IMG_2010.jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 64, code: "JP9956712", name: "JP9956712 Classic Half-Rim",
        brand: "LENSHUT", desc: "Classic half-rim prescription frame with a lightweight look and feel.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/JP9956712_IMG_1160.jpg", hoverImage: "frames/JP9956712_IMG_1162.jpg",
        images: ["frames/JP9956712_IMG_1160.jpg", "frames/JP9956712_IMG_1162.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 65, code: "JP9956786", name: "JP9956786 Slim Oval",
        brand: "LENSHUT", desc: "Slim oval prescription frame for an effortlessly chic everyday look.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 1999, image: "frames/JP9956786_front.jpg", hoverImage: "frames/JP9956786_front.jpg",
        images: ["frames/JP9956786_front.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 66, code: "JP9956804", name: "JP9956804 Urban Rectangle",
        brand: "LENSHUT", desc: "Urban prescription rectangle frame with a bold bridge design.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2499, image: "frames/JP9956804_IMG_2406.jpg", hoverImage: "frames/JP9956804_IMG_2407.jpg",
        images: ["frames/JP9956804_IMG_2406.jpg", "frames/JP9956804_IMG_2407.jpg", "frames/JP9956804_IMG_2408.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 67, code: "JP9956851", name: "JP9956851 Premium Frame",
        brand: "LENSHUT", desc: "Premium prescription frame with multiple viewing angles and a refined finish.",
        size: "M", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2899, image: "frames/JP9956851_IMG_2366.jpg", hoverImage: "frames/JP9956851_IMG_2367.jpg",
        images: ["frames/JP9956851_IMG_2366.jpg", "frames/JP9956851_IMG_2367.jpg", "frames/JP9956851_IMG_2368.jpg", "frames/JP9956851_IMG_2372.jpg", "frames/JP9956851_IMG_2373.jpg", "frames/JP9956851_IMG_2374.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 68, code: "JP9956854", name: "JP9956854 Square Prescription",
        brand: "LENSHUT", desc: "Square prescription frame with a strong silhouette for a confident look.",
        size: "L", badge: null, category: "eyeglasses", shape: "square", gender: "men",
        price: 2599, image: "frames/JP9956854_IMG_2560.jpg", hoverImage: "frames/JP9956854_IMG_2561.jpg",
        images: ["frames/JP9956854_IMG_2560.jpg", "frames/JP9956854_IMG_2561.jpg", "frames/JP9956854_IMG_2562.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 69, code: "JP9956884", name: "JP9956884 Classic Rectangle",
        brand: "LENSHUT", desc: "Classic full-rim rectangle frame in a balanced shape for all-round use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/JP9956884_IMG_2439.jpg", hoverImage: "frames/JP9956884_IMG_2440.jpg",
        images: ["frames/JP9956884_IMG_2439.jpg", "frames/JP9956884_IMG_2440.jpg", "frames/JP9956884_IMG_2441.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 70, code: "JP9956895", name: "JP9956895 Slim Rectangle",
        brand: "LENSHUT", desc: "Slim rectangular prescription frame with a comfortable spring-hinge system.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2099, image: "frames/JP9956895_IMG_1745.jpg", hoverImage: "frames/JP9956895_IMG_1746.jpg",
        images: ["frames/JP9956895_IMG_1745.jpg", "frames/JP9956895_IMG_1746.jpg", "frames/JP9956895_IMG_1747.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 71, code: "JP9956911", name: "JP9956911 Bold Rectangle",
        brand: "LENSHUT", desc: "Bold wide-front rectangle prescription frame for a statement professional look.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2499, image: "frames/JP9956911_IMG_1505.jpg", hoverImage: "frames/JP9956911_IMG_1506.jpg",
        images: ["frames/JP9956911_IMG_1505.jpg", "frames/JP9956911_IMG_1506.jpg", "frames/JP9956911_IMG_1507.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 72, code: "JP9956915", name: "JP9956915 Smart Frame",
        brand: "LENSHUT", desc: "Smart full-rim prescription frame with precision-crafted hinges for durability.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2299, image: "frames/JP9956915_IMG_1142.jpg", hoverImage: "frames/JP9956915_IMG_1143.jpg",
        images: ["frames/JP9956915_IMG_1142.jpg", "frames/JP9956915_IMG_1143.jpg", "frames/JP9956915_IMG_1144.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 73, code: "JP9957048", name: "JP9957048 Everyday Rectangle",
        brand: "LENSHUT", desc: "Practical everyday prescription rectangle frame with a clean, uncluttered look.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957048_IMG_1096.jpg", hoverImage: "frames/JP9957048_IMG_1097.jpg",
        images: ["frames/JP9957048_IMG_1096.jpg", "frames/JP9957048_IMG_1097.jpg", "frames/JP9957048_IMG_1098.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 74, code: "JP9957058", name: "JP9957058 Classic Rectangle",
        brand: "LENSHUT", desc: "Classic full-rim rectangle prescription frame in a tried-and-true shape.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2099, image: "frames/JP9957058_IMG_1059.jpg", hoverImage: "frames/JP9957058_IMG_1060.jpg",
        images: ["frames/JP9957058_IMG_1059.jpg", "frames/JP9957058_IMG_1060.jpg", "frames/JP9957058_IMG_1061.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 75, code: "JP9957101", name: "JP9957101 Slim Full-Rim",
        brand: "LENSHUT", desc: "Slim full-rim prescription frame with a comfortable nose bridge and slim temples.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957101_IMG_1081.jpg", hoverImage: "frames/JP9957101_IMG_1082.jpg",
        images: ["frames/JP9957101_IMG_1081.jpg", "frames/JP9957101_IMG_1082.jpg", "frames/JP9957101_IMG_1083.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 76, code: "JP9957106", name: "JP9957106 Classic Frame",
        brand: "LENSHUT", desc: "Classic prescription frame with a balanced design for everyday prescription use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957106_IMG_1062.jpg", hoverImage: "frames/JP9957106_IMG_1063.jpg",
        images: ["frames/JP9957106_IMG_1062.jpg", "frames/JP9957106_IMG_1063.jpg", "frames/JP9957106_IMG_1064.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 77, code: "JP9957107", name: "JP9957107 Modern Rectangle",
        brand: "LENSHUT", desc: "Modern rectangle prescription frame with a refined finish for a professional look.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9957107_IMG_0834.jpg", hoverImage: "frames/JP9957107_IMG_0835.jpg",
        images: ["frames/JP9957107_IMG_0834.jpg", "frames/JP9957107_IMG_0835.jpg", "frames/JP9957107_IMG_0836.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 78, code: "JP9957116", name: "JP9957116 Smart Rectangle",
        brand: "LENSHUT", desc: "Smart rectangular prescription frame with a clean, professional appearance.",
        size: "M", badge: "new-arrival", category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2299, image: "frames/JP9957116_1784987421188.jpg", hoverImage: "frames/JP9957116_1784987421228.jpg",
        images: ["frames/JP9957116_1784987421188.jpg", "frames/JP9957116_1784987421228.jpg", "frames/JP9957116_1784987421281.jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 79, code: "JP9957203", name: "JP9957203 Premium Rectangle",
        brand: "LENSHUT", desc: "Premium prescription rectangle frame with detailed temple design and robust build.",
        size: "L", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2699, image: "frames/JP9957203_IMG_0684.jpg", hoverImage: "frames/JP9957203_IMG_0685.jpg",
        images: ["frames/JP9957203_IMG_0684.jpg", "frames/JP9957203_IMG_0685.jpg", "frames/JP9957203_IMG_0686.jpg", "frames/JP9957203_IMG_2688.jpg", "frames/JP9957203_IMG_2689.jpg", "frames/JP9957203_IMG_2690.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 80, code: "JP9957205", name: "JP9957205 Slim Rectangle",
        brand: "LENSHUT", desc: "Slim prescription rectangle frame in a well-proportioned low-profile design.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957205_IMG_0680.jpg", hoverImage: "frames/JP9957205_IMG_0681.jpg",
        images: ["frames/JP9957205_IMG_0680.jpg", "frames/JP9957205_IMG_0681.jpg", "frames/JP9957205_IMG_0683.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 81, code: "Jp9957212", name: "JP9957212 Classic Oval",
        brand: "LENSHUT", desc: "Classic oval prescription frame that suits a wide range of face shapes.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/Jp9957212_IMG_0560.jpg", hoverImage: "frames/Jp9957212_IMG_0561.jpg",
        images: ["frames/Jp9957212_IMG_0560.jpg", "frames/Jp9957212_IMG_0561.jpg", "frames/Jp9957212_IMG_0562.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 82, code: "JP9957215", name: "JP9957215 Modern Rectangle",
        brand: "LENSHUT", desc: "Modern rectangle prescription frame with precise lens shaping for optical clarity.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2299, image: "frames/JP9957215_IMG_0662.jpg", hoverImage: "frames/JP9957215_IMG_0663.jpg",
        images: ["frames/JP9957215_IMG_0662.jpg", "frames/JP9957215_IMG_0663.jpg", "frames/JP9957215_IMG_0664.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 83, code: "JP9957232", name: "JP9957232 Everyday Rectangle",
        brand: "LENSHUT", desc: "Comfortable everyday prescription rectangle frame with smooth temple tips.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957232_IMG_0650.jpg", hoverImage: "frames/JP9957232_IMG_0651.jpg",
        images: ["frames/JP9957232_IMG_0650.jpg", "frames/JP9957232_IMG_0651.jpg", "frames/JP9957232_IMG_0652.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 84, code: "JP9957247", name: "JP9957247 Classic Frame",
        brand: "LENSHUT", desc: "Dependable classic prescription frame suitable for both work and leisure.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9957247_IMG_1832.jpg", hoverImage: "frames/JP9957247_IMG_1833.jpg",
        images: ["frames/JP9957247_IMG_1832.jpg", "frames/JP9957247_IMG_1833.jpg", "frames/JP9957247_IMG_1834.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 85, code: "JP9957262", name: "JP9957262 Premium Rectangle",
        brand: "LENSHUT", desc: "Premium full-rim rectangle prescription frame with a luxurious look.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2799, image: "frames/JP9957262_IMG_2117.jpg", hoverImage: "frames/JP9957262_IMG_2118.jpg",
        images: ["frames/JP9957262_IMG_2117.jpg", "frames/JP9957262_IMG_2118.jpg", "frames/JP9957262_IMG_2119.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 86, code: "JP9957283", name: "JP9957283 Urban Square",
        brand: "LENSHUT", desc: "Urban square prescription frame with a confident look for the modern professional.",
        size: "L", badge: "new-arrival", category: "eyeglasses", shape: "square", gender: "men",
        price: 2599, image: "frames/JP9957283_IMG_2093.jpg", hoverImage: "frames/JP9957283_IMG_2094.jpg",
        images: ["frames/JP9957283_IMG_2093.jpg", "frames/JP9957283_IMG_2094.jpg", "frames/JP9957283_IMG_2095.jpg"],
        isNew: true, isFeatured: true
    },
    {
        id: 87, code: "JP9957286", name: "JP9957286 Classic Rectangle",
        brand: "LENSHUT", desc: "Classic full-rim rectangle prescription frame for dependable everyday use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957286_IMG_1317.jpg", hoverImage: "frames/JP9957286_IMG_1318.jpg",
        images: ["frames/JP9957286_IMG_1317.jpg", "frames/JP9957286_IMG_1318.jpg", "frames/JP9957286_IMG_1319.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 88, code: "JP9957299", name: "JP9957299 Slim Rectangle",
        brand: "LENSHUT", desc: "Slim full-rim prescription rectangle frame with a streamlined, modern look.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9957299_IMG_1265.jpg", hoverImage: "frames/JP9957299_IMG_1266.jpg",
        images: ["frames/JP9957299_IMG_1265.jpg", "frames/JP9957299_IMG_1266.jpg", "frames/JP9957299_IMG_1267.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 89, code: "JP9957307", name: "JP9957307 Classic Rectangle",
        brand: "LENSHUT", desc: "Reliable classic rectangle frame for all-day prescription eyewear comfort.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957307_IMG_1957.jpg", hoverImage: "frames/JP9957307_IMG_1958.jpg",
        images: ["frames/JP9957307_IMG_1957.jpg", "frames/JP9957307_IMG_1958.jpg", "frames/JP9957307_IMG_1959.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 90, code: "JP9957309", name: "JP9957309 Smart Frame",
        brand: "LENSHUT", desc: "Smart prescription frame with a lightweight build for comfortable all-day use.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2199, image: "frames/JP9957309_IMG_1954.jpg", hoverImage: "frames/JP9957309_IMG_1955.jpg",
        images: ["frames/JP9957309_IMG_1954.jpg", "frames/JP9957309_IMG_1955.jpg", "frames/JP9957309_IMG_1956.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 91, code: "JP9957318", name: "JP9957318 Modern Frame",
        brand: "LENSHUT", desc: "Modern prescription frame with smooth edges and a flattering shape.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/JP9957318_IMG_2135.jpg", hoverImage: "frames/JP9957318_IMG_2136.jpg",
        images: ["frames/JP9957318_IMG_2135.jpg", "frames/JP9957318_IMG_2136.jpg", "frames/JP9957318_IMG_2137.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 92, code: "JP9957320", name: "JP9957320 Everyday Rectangle",
        brand: "LENSHUT", desc: "Everyday prescription rectangle frame with a straightforward, comfortable design.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2099, image: "frames/JP9957320_IMG_2038.jpg", hoverImage: "frames/JP9957320_IMG_2039.jpg",
        images: ["frames/JP9957320_IMG_2038.jpg", "frames/JP9957320_IMG_2039.jpg", "frames/JP9957320_IMG_2040.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 93, code: "JP9957329", name: "JP9957329 Premium Rectangle",
        brand: "LENSHUT", desc: "Premium prescription rectangle frame combining durability with style.",
        size: "L", badge: "limited-edition", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2899, image: "frames/JP9957329_IMG_2528.jpg", hoverImage: "frames/JP9957329_IMG_2529.jpg",
        images: ["frames/JP9957329_IMG_2528.jpg", "frames/JP9957329_IMG_2529.jpg", "frames/JP9957329_IMG_2530.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 94, code: "JP9957343", name: "JP9957343 Bold Rectangle",
        brand: "LENSHUT", desc: "Bold full-rim rectangle prescription frame for a strong, eye-catching appearance.",
        size: "L", badge: null, category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2499, image: "frames/JP9957343_IMG_2608.jpg", hoverImage: "frames/JP9957343_IMG_2609.jpg",
        images: ["frames/JP9957343_IMG_2608.jpg", "frames/JP9957343_IMG_2609.jpg", "frames/JP9957343_IMG_2610.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 95, code: "JP9957357", name: "JP9957357 Classic Rectangle",
        brand: "LENSHUT", desc: "Classic well-balanced rectangle prescription frame for consistent daily wear.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2099, image: "frames/JP9957357_IMG_2321.jpg", hoverImage: "frames/JP9957357_IMG_2322.jpg",
        images: ["frames/JP9957357_IMG_2321.jpg", "frames/JP9957357_IMG_2322.jpg", "frames/JP9957357_IMG_2323.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 96, code: "LAAA1843", name: "LAAA1843 Slim Rectangle",
        brand: "LENSHUT", desc: "Slim prescription rectangle frame with a refined look suited for office and travel.",
        size: "M", badge: null, category: "eyeglasses", shape: "rectangle", gender: "unisex",
        price: 2199, image: "frames/LAAA1843_IMG_1010.jpg", hoverImage: "frames/LAAA1843_IMG_1011.jpg",
        images: ["frames/LAAA1843_IMG_1010.jpg", "frames/LAAA1843_IMG_1011.jpg", "frames/LAAA1843_IMG_1012.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 97, code: "NAAA0887", name: "NAAA0887 Round Frame",
        brand: "LENSHUT", desc: "Elegant round prescription frame with a classic profile and comfortable fit.",
        size: "S", badge: "best-seller", category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2399, image: "frames/NAAA0887_IMG_0632.jpg", hoverImage: "frames/NAAA0887_IMG_0633.jpg",
        images: ["frames/NAAA0887_IMG_0632.jpg", "frames/NAAA0887_IMG_0633.jpg", "frames/NAAA0887_IMG_0634.jpg"],
        isNew: false, isFeatured: true
    },
    {
        id: 98, code: "OAAA1777", name: "OAAA1777 Oval Prescription",
        brand: "LENSHUT", desc: "Soft oval prescription frame with a gentle shape for a friendly, approachable look.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/OAAA1777_IMG_2711.jpg", hoverImage: "frames/OAAA1777_IMG_2712.jpg",
        images: ["frames/OAAA1777_IMG_2711.jpg", "frames/OAAA1777_IMG_2712.jpg", "frames/OAAA1777_IMG_2713.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 99, code: "OAAA1785", name: "OAAA1785 Round Frame",
        brand: "LENSHUT", desc: "Round prescription frame that pairs well with square or diamond-shaped faces.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2299, image: "frames/OAAA1785_IMG_0629.jpg", hoverImage: "frames/OAAA1785_IMG_0630.jpg",
        images: ["frames/OAAA1785_IMG_0629.jpg", "frames/OAAA1785_IMG_0630.jpg", "frames/OAAA1785_IMG_0631.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 100, code: "OAAA2620", name: "OAAA2620 Classic Oval",
        brand: "LENSHUT", desc: "Classic oval prescription frame, a versatile choice for every face shape.",
        size: "M", badge: null, category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2099, image: "frames/OAAA2620_IMG_0942.jpg", hoverImage: "frames/OAAA2620_IMG_0943.jpg",
        images: ["frames/OAAA2620_IMG_0942.jpg", "frames/OAAA2620_IMG_0943.jpg", "frames/OAAA2620_IMG_0944.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 101, code: "OAAA2621", name: "OAAA2621 Oval Round",
        brand: "LENSHUT", desc: "Oval-round prescription frame with a smooth rim for a gentle, polished appearance.",
        size: "S", badge: null, category: "eyeglasses", shape: "round", gender: "women",
        price: 2099, image: "frames/OAAA2621_IMG_0852.jpg", hoverImage: "frames/OAAA2621_IMG_0853.jpg",
        images: ["frames/OAAA2621_IMG_0852.jpg", "frames/OAAA2621_IMG_0853.jpg", "frames/OAAA2621_IMG_0854.jpg"],
        isNew: false, isFeatured: false
    },
    {
        id: 102, code: "OAAA2633", name: "OAAA2633 Classic Round",
        brand: "LENSHUT", desc: "Classic round prescription frame in a timeless circular silhouette.",
        size: "S", badge: "new-arrival", category: "eyeglasses", shape: "round", gender: "unisex",
        price: 2299, image: "frames/OAAA2633_IMG_0970.jpg", hoverImage: "frames/OAAA2633_IMG_0971.jpg",
        images: ["frames/OAAA2633_IMG_0970.jpg", "frames/OAAA2633_IMG_0971.jpg", "frames/OAAA2633_IMG_0972.jpg"],
        isNew: true, isFeatured: false
    },
    {
        id: 103, code: "TAAA1976", name: "TAAA1976 Bold Rectangle",
        brand: "LENSHUT", desc: "Bold prescription rectangle frame with a wide lens profile for a modern look.",
        size: "L", badge: "best-seller", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 2599, image: "frames/TAAA1976_IMG20260725195522.jpg", hoverImage: "frames/TAAA1976_IMG20260725195535.jpg",
        images: ["frames/TAAA1976_IMG20260725195522.jpg", "frames/TAAA1976_IMG20260725195535.jpg", "frames/TAAA1976_IMG20260725195549.jpg"],
        isNew: false, isFeatured: true
    },
    {
        id: 104, code: "JP2699", name: "JP2699 Premium Rectangle",
        brand: "LENSHUT", desc: "Premium prescription rectangle frame for a complete, refined eyewear experience.",
        size: "M", badge: "limited-edition", category: "eyeglasses", shape: "rectangle", gender: "men",
        price: 3199, image: "frames/AABA1038_IMG_2056.jpg", hoverImage: "frames/CABA3443_IMG_1791.jpg",
        images: ["frames/AABA1038_IMG_2056.jpg"],
        isNew: false, isFeatured: true
    }
];

const testimonials = [
    {
        name: "Naresh Joshi",
        text: "Had a pleasant experience at lens hut .. Mr praveen has a great knowledge According to the customer's requirement..",
        rating: 5
    },
    {
        name: "Venkatesh D P",
        text: "Amazing store with professional staffs and trendy collections and excellent service and Praveen doing great job",
        rating: 5
    },
    {
        name: "Akshay Naik",
        text: "Great Experience! People were kind enough to show and explain what we need.",
        rating: 5
    },
    {
        name: "Nirmala Ranganath",
        text: "Free eye test done here . Very good service by radha and praveen",
        rating: 5
    },
    {
        name: "Mithil K R",
        text: "It was a nice experience with good responsive staff",
        rating: 5
    }
];
