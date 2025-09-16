import { assets } from '../assets/assets';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function AboutComponent({ full }) {
  return (
    <div className="space-y-10">
      {/* Titlu Secțiune */}
      <h1 className="text-2xl font-bold text-center py-4">
        De ce să ne alegi pe noi?
      </h1>

      {/* Card-uri cu avantaje */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-[#0ac0ac]">
          <CardHeader>
            <h1 className="font-semibold">Asigurarea Calității</h1>
          </CardHeader>
          <CardContent>
            Ne mândrim cu oferirea exclusivă a produselor de cea mai înaltă calitate,
            care îndeplinesc standardele noastre stricte de durabilitate, performanță și valoare.
          </CardContent>
        </Card>

        <Card className="border-[#0ac0ac]">
          <CardHeader>
            <h1 className="font-semibold">Experiență</h1>
          </CardHeader>
          <CardContent>
            Avem peste 5 ani de experiență în domeniu, oferind servicii de calitate
            și produse de încredere.
          </CardContent>
        </Card>

        <Card className="border-[#0ac0ac]">
          <CardHeader>
            <h1 className="font-semibold">Servicii excepționale pentru clienți</h1>
          </CardHeader>
          <CardContent>
            Echipa noastră dedicată de asistență clienți este disponibilă 24/7 pentru
            a vă oferi suportul necesar și a răspunde oricăror întrebări sau nelămuriri.
          </CardContent>
        </Card>

        <Card className="border-[#0ac0ac]">
          <CardHeader>
            <h1 className="font-semibold">Peste 900 de clienți mulțumiți</h1>
          </CardHeader>
          <CardContent>
            Suntem mândri să avem peste 900 de clienți care ne aleg pentru calitatea și serviciile noastre.
          </CardContent>
        </Card>
      </div>

      {/* Secțiune Detaliată despre companie */}
      {full && (
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <img
            src={assets.about_img.src}
            alt="Despre noi"
            className="w-full md:w-[450px] rounded-lg shadow-lg"
          />

          <div className="flex flex-col gap-4 md:w-2/4">
            <h1 className="font-bold text-lg">Despre noi</h1>
            <h1>
              Suntem o companie specializata in producția de tabla faltuita,
              tigla metalica si capace atic, precum și accesorii speciale pentru acestea.
              Ne dorim sa oferim produse de calitate, realizate din materiale durabile
              si rezistente, pentru a satisface nevoile si cerințele clienților nostri.
            </h1>
            <h1>
              Datorita tehnologiei avansate pe care o folosim, tabla faltuita si tigla metalica
              produse de noi au un aspect estetic deosebit, care le face ideale pentru orice
              tip de constructie.
            </h1>
            <h1>
              Capacele atic sunt realizate din materiale de calitate, rezistente la intemperii,
              pentru a asigura o protectie eficienta pentru acoperisul dumneavoastra.
            </h1>

            <h1 className="font-bold text-lg">Echipa noastră</h1>
            <h1>
              Suntem dedicați in oferirea unui serviciu de calitate, cu personal profesionist
              si experienta, care va sta la dispozitie pentru orice intrebari sau sfaturi in
              alegerea produselor potrivite pentru nevoile dumneavoastra.
            </h1>
            <h1>
              De asemenea, oferim o gama variata de accesorii pentru tabla, precum profile,
              jgheaburi, burlane si altele, pentru a va oferi soluții complete pentru constructia
              sau renovarea acoperisului.
            </h1>
            <h1>
              Ne dorim sa devenim un partener de incredere pentru clientii nostri, oferind produse
              de calitate la un raport calitate-pret avantajos. Va asteptam cu drag sa ne contactati
              pentru orice informatii suplimentare.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};