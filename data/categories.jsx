const categories = [
    // Top-level categories
    { id: 1, name: 'men', parentId: null },
    { id: 2, name: 'women', parentId: null },
    { id: 3, name: 'kids', parentId: null },
    { id: 4, name: 'accessories', parentId: null },

    // Men subcategories
    { id: 5, name: 'shirts', parentId: 1 },
    { id: 6, name: 'pants', parentId: 1 },
    { id: 7, name: 'jackets', parentId: 1 },
    { id: 8, name: 'shoes', parentId: 1 },
    { id: 9, name: 'watches', parentId: 1 },

    // Women subcategories
    { id: 10, name: 'dresses', parentId: 2 },
    { id: 11, name: 'tops', parentId: 2 },
    { id: 12, name: 'skirts', parentId: 2 },
    { id: 13, name: 'heels', parentId: 2 },
    { id: 14, name: 'bags', parentId: 2 },

    // Kids subcategories
    { id: 15, name: 't-shirts', parentId: 3 },
    { id: 16, name: 'shorts', parentId: 3 },
    { id: 17, name: 'hoodies', parentId: 3 },
    { id: 18, name: 'sneakers', parentId: 3 },

    // Accessories
    { id: 19, name: 'sunglasses', parentId: 4 },
    { id: 20, name: 'belts', parentId: 4 },
    { id: 21, name: 'hats', parentId: 4 },

    // Sizes under shirts
    { id: 22, name: 'Small', parentId: 5 },
    { id: 23, name: 'Medium', parentId: 5 },
    { id: 24, name: 'Large', parentId: 5 },
    { id: 25, name: 'XL', parentId: 5 },

    // Colors under Small
    { id: 26, name: 'white', parentId: 22 },
    { id: 27, name: 'black', parentId: 22 },
    { id: 28, name: 'blue', parentId: 22 },

    // Colors under Medium
    { id: 29, name: 'white', parentId: 23 },
    { id: 30, name: 'black', parentId: 23 },
    { id: 31, name: 'blue', parentId: 23 },

    // Colors under Large
    { id: 32, name: 'white', parentId: 24 },
    { id: 33, name: 'black', parentId: 24 },
    { id: 34, name: 'blue', parentId: 24 },

    // Colors under XL
    { id: 35, name: 'white', parentId: 25 },
    { id: 36, name: 'black', parentId: 25 },
    { id: 37, name: 'blue', parentId: 25 }
];
