import React from 'react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Urban Tech Jacket",
    price: "$299",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Street Classic Hoodie",
    price: "$189",
    category: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Premium Cargo Pants",
    price: "$245",
    category: "Pants",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Designer Sneakers",
    price: "$399",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Graphic Print Tee",
    price: "$89",
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Tech Cargo Shorts",
    price: "$159",
    category: "Shorts",
    image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Urban Backpack",
    price: "$199",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Street Cap",
    price: "$79",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80"
  }
];

const categories = [...new Set(products.map(product => product.category))];

function Shop() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-5xl font-bold mb-12 text-center">Shop Collection</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2 rounded-full border-2 transition-colors ${
              selectedCategory === 'All' 
                ? 'bg-accent border-accent' 
                : 'border-secondary hover:border-accent'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition-colors ${
                selectedCategory === category 
                  ? 'bg-accent border-accent' 
                  : 'border-secondary hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute bottom-4 right-4 p-3 bg-accent text-secondary rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <h4 className="font-serif text-xl mb-2">{product.name}</h4>
              <p className="text-secondary/60 mb-2">{product.category}</p>
              <p className="text-secondary/80">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;