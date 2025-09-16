import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const products = [
  { id: 1, name: "Nova", price: 1234, brand: "Rufster", image: "/products/nova.png" },
  { id: 2, name: "Terra", price: 456, brand: "Rufster", image: "/products/terra.png" },
  { id: 3, name: "Kingas", price: 678, brand: "Blachotrapez", image: "/products/kingas.webp" },
  { id: 4, name: "Enigma", price: 890, brand: "Blachotrapez", image: "/products/enigma.jpg" },
  { id: 5, name: "Diament", price: 1011, brand: "Blachotrapez", image: "/products/diament.webp" },
  { id: 6, name: "Celesta", price: 1122, brand: "Rufster", image: "/products/celesta.png" },
  { id: 7, name: "Aqua", price: 1213, brand: "Rufster", image: "/products/aqua.png" },
]

export default function ProductPage() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [brand, setBrand] = useState<string | null>(null)
  const [sort, setSort] = useState<string>("all")

  // Filtrare
  let filteredProducts = products.filter(
    (p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      (!brand || p.brand === brand)
  )

  // Sortare
  if (sort === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sort === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sort === "all") {
    filteredProducts = products
  }

  console.log(filteredProducts)

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar: filtre */}
      <aside className="md:col-span-1 space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Filtrare după preț</h3>
          <Slider
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
          />
          <p className="text-sm mt-2">
            {priceRange[0]} RON - {priceRange[1]} RON
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Producător</h3>
          <Select onValueChange={(val) => setBrand(val)} value={brand || ""}>
            <SelectTrigger>
              <SelectValue placeholder="Alege producător" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Rufster">Rufster</SelectItem>
              <SelectItem value="Blachotrapez">Blachotrapez</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setBrand(null)
            setPriceRange([0, 1000])
            setSort("all")
          }}
        >
          Resetează filtrele
        </Button>
      </aside>

      {/* Grid produse */}
      <main className="md:col-span-3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Produse</h2>

          {/* Sortare */}
          <Select onValueChange={(val) => setSort(val)} value={sort}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sortează după" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toate</SelectItem>
              <SelectItem value="price-asc">Preț: crescător</SelectItem>
              <SelectItem value="price-desc">Preț: descrescător</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-muted-foreground">Niciun produs găsit.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition"
              >
                <CardContent className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price} RON</p>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                  <Button asChild className="w-full mt-2">
                    <a href={`/millenniumdachroof/product/${product.id}`}>Vezi detalii</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

// import { useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import ProductItem from './ProductItem';
// import { products, categories, suppliers } from '../assets/constants';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Button } from '@/components/ui/button';

// export default function ProductGrid () {
//   let search = '';
//   let showSearch = false;
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relevent');

//   const toggleCategory = (value) => {
//     setCategory((prev) =>
//       prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
//     );
//   };

//   const toggleSubCategory = (value) => {
//     setSubCategory((prev) =>
//       prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
//     );
//   };

//   const applyFilter = () => {
//     if (!products || products.length === 0) return;

//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase().trim())
//       );
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         category.some((c) => item.categories.includes(c))
//       );
//     }

//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         subCategory.includes(item.supplier)
//       );
//     }

//     setFilterProducts(productsCopy);
//   };

//   const sortProducts = () => {
//     if (filterProducts.length === 0) return;

//     let filteredProdCopy = [...filterProducts];

//     switch (sortType) {
//       case 'low-high':
//         filteredProdCopy.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         filteredProdCopy.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         applyFilter();
//         break;
//     }

//     setFilterProducts(filteredProdCopy);
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, products]);

//   useEffect(() => {
//     sortProducts();
//   }, [sortType]);

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 pt-10">
//       {/* Filter Sidebar */}
//       <div className="min-w-[220px]">
//         <Button
//           variant="outline"
//           className="w-full flex justify-between items-center mb-4 sm:hidden"
//           onClick={() => setShowFilter(!showFilter)}
//         >
//           Filtre
//           <img
//             src={assets.dropdown_icon.src}
//             alt="dropdown"
//             className={`h-3 transition-transform ${
//               showFilter ? 'rotate-90' : ''
//             }`}
//           />
//         </Button>

//         <div className={`${showFilter ? 'block' : 'hidden'} sm:block space-y-4`}>
//           {/* Category Filter */}
//           <Card className="border-[#0ac0ac]">
//             <CardHeader>
//               <CardTitle className="text-sm">TIPURI</CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col gap-2">
//               {categories.map((cat) => (
//                 <div key={cat._id} className="flex items-center gap-2">
//                   <Checkbox
//                     checked={category.includes(cat._id)}
//                     onCheckedChange={() => toggleCategory(cat._id)}
//                   />
//                   <Label>{cat.name}</Label>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Supplier Filter */}
//           <Card className="border-[#0ac0ac]">
//             <CardHeader>
//               <CardTitle className="text-sm">FURNIZORI</CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col gap-2">
//               {suppliers.map((sup) => (
//                 <div key={sup._id} className="flex items-center gap-2">
//                   <Checkbox
//                     checked={subCategory.includes(sup._id)}
//                     onCheckedChange={() => toggleSubCategory(sup._id)}
//                   />
//                   <Label>{sup.name}</Label>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="flex-1">
//         <div className="flex justify-between items-center mb-4">
//           <h1>Toate produsele</h1>

//           <Select
//             value={sortType}
//             onValueChange={(value) => setSortType(value)}
//           >
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Sortare" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="relevent">Relevent</SelectItem>
//               <SelectItem value="low-high">Preț crescător</SelectItem>
//               <SelectItem value="high-low">Preț descrescător</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {filterProducts.map((product) => (
//             <ProductItem key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

