"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DemoPlatform() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Login / Registrazione</h2>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Accedi</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Profilo Utente</h2>
          <Input placeholder="Nome completo" />
          <Textarea placeholder="Biografia" />
          <Button className="w-full">Aggiorna Profilo</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md col-span-1 md:col-span-2">
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Pubblica un Annuncio</h2>
          <Input placeholder="Titolo" />
          <Textarea placeholder="Descrizione" />
          <Button className="w-full">Pubblica</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md col-span-1 md:col-span-2">
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Messaggistica</h2>
          <Textarea placeholder="Scrivi un messaggio..." />
          <Button className="w-full">Invia</Button>
        </CardContent>
      </Card>
    </div>
  );
}
