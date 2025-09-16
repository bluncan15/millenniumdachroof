import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { get_thickness_by_id, get_color_type_by_ids } from '../assets/utils';

export default function PriceTableComponent({product, pricesEnable}) {
  return pricesEnable && (
    <div className="overflow-x-auto mt-4 border-2 border-[#c07a0a] rounded-lg">
      <Table className="min-w-full">
        <TableHeader className="bg-[#0ac0ac] text-black">
          <TableRow>
            <TableHead>Grosime</TableHead>
            <TableHead>Finisaj</TableHead>
            <TableHead>Preț / mp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {product.prices.map((p, key) => (
            <TableRow key={key} className="bg-white border border-[#c07a0a]">
              <TableCell>{get_thickness_by_id(p.thickness_id).value}</TableCell>
              <TableCell>
                {get_color_type_by_ids(p.color_type).map((c, idx) => (
                  <p key={idx} className="uppercase">
                    {c.name}
                  </p>
                ))}
              </TableCell>
              <TableCell>{p.price} RON</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

