"use client";

import { toScreen } from "@/helpers/global";
import Link from "next/link";

export interface IGames {
  id: number;
  name: string;
  platform: string;
  urlSuffix: string;
}

const games: IGames[] = [{ id: 1, name: "Findy Shape", platform: "Mobile", urlSuffix: "findy-shape" }];

export default function Games() {
  return (
    <>
    <toScreen.In>
      <div>
        <h1 className="text-4xl">Theo&apos;s Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <div className="bg-gray-100 p-4 rounded-md" key={game.id}>
              <h2 className="text-2xl">{game.name}</h2>
              <p className="text-xl">{game.platform}</p>
              <Link href={`/games/${game.urlSuffix}`}>{`${game.name} details`}</Link>
            </div>
          ))}
        </div>
      </div>
    </toScreen.In>
    </>
  );
}
