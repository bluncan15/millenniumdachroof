import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

export default function ProductCard() {
  return (
    <Card className="w-72 rounded-2xl shadow-md hover:shadow-lg transition">
      {/* Imagine + Badge */}
      <CardHeader className="relative p-0">
        <img
          src="products/nova.png"
          alt="Product"
          className="rounded-t-2xl object-cover h-48 w-full hover:scale-105 transition ease-in-out duration-600"
        />
        <Badge className="absolute top-2 left-2" variant="secondary">
          Rufster
        </Badge>
      </CardHeader>

      {/* Detalii produs */}
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Nume Produs</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          O descriere scurtă și atrăgătoare a produsului.
        </p>
        <p className="text-xl font-bold mt-3">199 RON</p>
      </CardContent>

      {/* Buton cumpărare */}
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          Detalii
        </Button>
      </CardFooter>
    </Card>
  )
}
