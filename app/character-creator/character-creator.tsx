"use client";

import { SyntheticEvent, useState } from "react";

interface characterStats {
  name: string;
  healthPoints: number;
  manaPoints: number;
  attackDamage: number;
  armor: number;
  dodgeChance: number;
  hasRanged: boolean;
  hasTwoHanded: boolean;
}

export default function CharacterCreator() {
  const [characterStats, setCharacterStats] = useState<characterStats>({
    name: "",
    healthPoints: 100,
    manaPoints: 15,
    attackDamage: 5,
    armor: 0,
    dodgeChance: 20,
    hasRanged: false,
    hasTwoHanded: false,
  });

  function handleNameChange(e: any) {
    const newName = e.target.value;
    setCharacterStats({ ...characterStats, name: newName });
    console.log(newName);
  }

  function handleArmorChange(e: any) {
    const selectedArmor = e.target.value;
    if (selectedArmor === "heavyArmor") {
      setCharacterStats({ ...characterStats, armor: 5 });
    } else if (selectedArmor === "lightArmor") {
      setCharacterStats({ ...characterStats, armor: 2 });
    } else {
      setCharacterStats({ ...characterStats, armor: 0 });
    }
  }

  function handleSetTwoHanded(e: any) {
    const hasTwoHanded = e.target.checked;
    setCharacterStats({ ...characterStats, hasTwoHanded: hasTwoHanded });
  }

  function handleSaveCharacter() {
    console.log("Saving Character...");
  }

  return (
    <div className="flex flex-col items-center text-center text-black w-2/3">
      <div className="h-20 m-5">
        <h1 className="text-2xl">Fantasy Character Creator</h1>
        <span>A basic form app to create your own fantasy character!.</span>
      </div>
      <form onSubmit={handleSaveCharacter} className="min-w-full">
        <div className="items-center min-w-full mb-8">
          <h1 className="text-xl">Character Name</h1>
          <input
            name="characterName"
            type="text"
            value={characterStats.name}
            onChange={handleNameChange}
            autoComplete="off"
            className="text-black w-40 text-center"
          />
        </div>
        <h2 className="text-l">Character Equipment</h2>
        <div className="grid gap-2 grid-cols-2 min-w-full min-h-64 my-2">
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Main Weapon</label>
            <div className="flex justify-around">
              <select defaultValue="sword">
                <option value="sword">Sword</option>
                <option value="axe">Axe</option>
                <option value="hammer">Hammer</option>
                <option value="bow">Bow</option>
                <option value="magicStaff">Magic Staff</option>
                <option value="dagger">Dagger</option>
              </select>
              <label>
                Two Handed
                <input type="checkbox" onChange={handleSetTwoHanded} />
              </label>
            </div>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Secondary Weapon</label>
            <select
              defaultValue="shield"
              disabled={characterStats.hasTwoHanded}
            >
              <option value="shield">Shield</option>
              <option value="dagger">Dagger</option>
              <option value="spellBook">Spell Book</option>
            </select>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Armor</label>
            <select defaultValue="lightArmor" onChange={handleArmorChange}>
              <option value="lightArmor">Light Armor</option>
              <option value="heavyArmor">Heavy Armor</option>
              <option value="robes">Robes</option>
            </select>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Additional Equipment</label>
            <select defaultValue="nothing">
              <option value="nothing">-Nothing-</option>
              <option value="healthPotion">Health Potion</option>
              <option value="manaPotion">Mana Potion</option>
              <option value="invisibilityPotion">Invisibility Potion</option>
              <option value="smallCoinPurse">Small Coin Purse</option>
            </select>
          </div>
        </div>

        <h2 className="text-l">Character Statistics</h2>
        <div className="flex justify-around min-w-full min-h-64">
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Health Points</label>
            <span>100</span>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Mana Points</label>
            <span>15</span>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Armor</label>
            <span>{characterStats.armor}</span>
          </div>
        </div>
        <div className="flex justify-around min-w-full min-h-64">
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Dodge Chance</label>
            <span>15%</span>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Combat Style</label>
            <span>Ranged</span>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2">
            <label>Damage</label>
            <span>5</span>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="reset"
            className="bg-orange-400 text-white border-2 border-orange-800 rounded-md p-1"
          >
            Reset Values
          </button>
          <button
            type="submit"
            className="bg-orange-400 text-white border-2 border-orange-800 rounded-md p-1"
          >
            Save Character
          </button>
        </div>
      </form>
    </div>
  );
}
