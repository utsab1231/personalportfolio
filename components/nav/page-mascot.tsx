"use client";

import { useEffect, useState } from "react";
import { Mascot } from "page-mascot";

const characters = [
  { name: "pug", label: "Pug mascot" },
  { name: "dino", label: "Dino mascot" },
];

export function PageMascot() {
  const [character, setCharacter] = useState<(typeof characters)[number] | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCharacter(characters[Math.floor(Math.random() * characters.length)]);
  }, []);

  if (!character) return null;

  return (
    <div className="fixed top-6 right-28 md:right-20 z-50">
      <Mascot
        directions={`/mascots/${character.name}-directions.webp`}
        reactions={`/mascots/${character.name}-reactions.webp`}
        size={40}
        label={character.label}
      />
    </div>
  );
}
