import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { ShoppingCart, Ruler, Palette, Info } from 'lucide-react';

const ProductPage = ({product}) => {
  const [selectedThickness, setSelectedThickness] = useState('0.4');
  const [selectedColor, setSelectedColor] = useState('RAL 3000');

  const thicknessOptions = [
    { value: '0.4', label: '0.4 mm' },
    { value: '0.45', label: '0.45 mm' },
    { value: '0.5', label: '0.5 mm' }
  ];

  const colorOptions = [
    { code: 'RAL 1015', name: 'Fildeș Deschis', color: '#E6D2B5' },
    { code: 'RAL 3000', name: 'Roșu Aprins', color: '#AF2B1E' },
    { code: 'RAL 3005', name: 'Vișiniu', color: '#5E2129' },
    { code: 'RAL 3009', name: 'Castaniu', color: '#703931' },
    { code: 'RAL 3011', name: 'Roșu Maro', color: '#781F19' },
    { code: 'RAL 5010', name: 'Albastru', color: '#0E294B' },
    { code: 'RAL 6005', name: 'Verde', color: '#2F4F4F' },
    { code: 'RAL 6011', name: 'Verde Deschis', color: '#587246' },
    { code: 'RAL 7024', name: 'Gri Grafit', color: '#474A51' },
    { code: 'RAL 8004', name: 'Maro Cupru', color: '#8E402A' },
    { code: 'RAL 8017', name: 'Maro Ciocolatiu', color: '#45322E' },
    { code: 'RAL 9002', name: 'Alb', color: '#E7EBDA' },
    { code: 'RAL 9006', name: 'Gri Aluminiu', color: '#A5A5A5' },
    { code: 'RAL 9007', name: 'Gri Aluminiu deschis', color: '#8F8F8F' }
  ];

  const priceTable = [
    { thickness: '0.4', finishes: ['LUCIOS', 'MAT', 'MS', 'MPR'], price: '133 RON' },
    { thickness: '0.45', finishes: ['LUCIOS', 'MAT', 'MS', 'MPR'], price: '234 RON' },
    { thickness: '0.5', finishes: ['LUCIOS', 'MAT', 'MS', 'MPR'], price: '456 RON' }
  ];

  const selectedColorData = colorOptions.find(color => color.code === selectedColor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{product?.name}</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-square flex items-center justify-center relative">
                <div className="rounded-lg flex flex-col">
                  <img src={`${product?.image}`} />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-slate-700">{product?.brand}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Thickness Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="h-5 w-5" />
                  Grosimi disponibile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {thicknessOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={selectedThickness === option.value ? "default" : "outline"}
                      onClick={() => setSelectedThickness(option.value)}
                      className="min-w-20"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Culori disponibile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 md:gap-3 md:grid-cols-4 mb-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color.code}
                      onClick={() => setSelectedColor(color.code)}
                      className={`w-12 h-12 md:w-24 md:h-24 group relative aspect-square rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedColor === color.code ? 'border-slate-900 ring-2 ring-slate-900 ring-offset-2' : 'border-slate-300 hover:border-slate-400'
                      }`}
                      style={{ backgroundColor: color.color }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors"></div>
                      <div className="absolute -bottom-1 -right-1 bg-white text-xs px-1 py-0.5 rounded text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.code}
                      </div>
                    </button>
                  ))}
                </div>
                {selectedColorData && (
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: selectedColorData.color }}
                    ></div>
                    <div>
                      <p className="font-semibold text-slate-900">{selectedColorData.code}</p>
                      <p className="text-sm text-slate-600">{selectedColorData.name}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Purchase Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-slate-600">Preț pentru grosimea selectată:</p>
                    <p className="text-3xl font-bold text-slate-900">
                      {priceTable.find(p => p.thickness === selectedThickness)?.price}
                    </p>
                  </div>
                  <Button size="lg" className="w-full">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Adaugă în coș
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-12">
          <Tabs defaultValue="prices" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="prices">Tabel prețuri</TabsTrigger>
              <TabsTrigger value="info">Informații</TabsTrigger>
              <TabsTrigger value="description">Descriere</TabsTrigger>
            </TabsList>
            
            <TabsContent value="prices">
              <Card>
                <CardHeader>
                  <CardTitle>Tabel prețuri</CardTitle>
                  <CardDescription>Prețurile afișate sunt per metru pătrat</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Grosime</TableHead>
                        <TableHead>Finisaj</TableHead>
                        <TableHead>Preț / MP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {priceTable.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.thickness} mm</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {row.finishes.map((finish, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {finish}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Informații
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Pentru adaoga ce trebe casa poti executa storage...</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="description">
              <Card>
                <CardHeader>
                  <CardTitle>Despre descriere</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-slate-600">
                      Țigla metalică AQUA 3D este o soluție modernă și durabilă pentru acoperișuri, 
                      oferind o combinație perfectă între estetica tradițională și tehnologia contemporană. 
                      Profilul 3D conferă un aspect elegant și distintiv oricărei construcții.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;