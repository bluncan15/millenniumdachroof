import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingCart, Calculator } from 'lucide-react';

export default function CartComponent () {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Țiglă AQUA',
      thickness: '0.4 mm',
      finish: 'LUCIOS',
      color: 'RAL 1015',
      colorName: 'Fildeș Deschis',
      price: 123,
      quantity: 25,
      image: '/millenniumdachroof/products/aqua.png'
    },
    {
      id: 2,
      name: 'Țiglă AQUA',
      thickness: '0.5 mm', 
      finish: 'MAT',
      color: 'RAL 3000',
      colorName: 'Roșu Aprins',
      price: 156,
      quantity: 15,
      image: '/millenniumdachroof/products/aqua.png'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="h-8 w-8 text-emerald-600" />
            <h1 className="text-4xl font-bold text-slate-900">Coșul tău</h1>
          </div>
          <p className="text-slate-600">{getTotalItems()} produse în coș</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="text-slate-400 mb-4">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">Coșul tău este gol</p>
                  <p className="text-sm mt-2">Adaugă produse pentru a continua</p>
                </div>
                <Button className="mt-4">Continuă cumpărăturile</Button>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src={item.image} />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-slate-900 truncate">{item.name}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline">{item.thickness}</Badge>
                          <Badge variant="outline">{item.finish}</Badge>
                          <Badge 
                            variant="secondary" 
                            className="bg-slate-100 text-slate-700"
                          >
                            {item.color}
                          </Badge>
                          <span className="text-sm text-slate-600">{item.colorName}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-8 w-8 p-0 hover:bg-white"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-3 font-medium min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-8 w-8 p-0 hover:bg-white"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-sm text-slate-600">{item.price} RON/mp</p>
                            <p className="font-bold text-lg text-slate-900">
                              {(item.price * item.quantity).toLocaleString()} RON
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Cost Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-emerald-600" />
                  Cost estimativ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items breakdown */}
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-slate-600 truncate pr-2">
                        {item.name} ({item.thickness})
                      </span>
                      <span className="font-medium">
                        {(item.price * item.quantity).toLocaleString()} RON
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">
                    De la {getTotal().toLocaleString()} RON
                  </span>
                </div>

                <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                  * Prețurile afișate sunt orientative. Pentru o ofertă exactă, vă rugăm să ne contactați.
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3"
                    disabled={cartItems.length === 0}
                  >
                    CERE OFERTĂ
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-2">
                    <div className="text-blue-600 mt-0.5">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm text-blue-800">
                      <p className="font-medium">Livrare gratuită</p>
                      <p>Pentru comenzi peste 5000 RON</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};