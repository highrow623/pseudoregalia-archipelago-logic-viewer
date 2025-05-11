"use client";

import Image from "next/image";
import { useItems, Items } from "../context/items";
import ClickWrapper from "./clickWrapper";

function kicksSrc(kicks: number): string {
  if (kicks === 0) {
    return "/items/icon_HeliacalPower_grey.png";
  }
  if (kicks === 1) {
    return "/items/icon_HeliacalPower_1.png";
  }
  if (kicks === 2) {
    return "/items/icon_HeliacalPower_2.png";
  }
  if (kicks === 3) {
    return "/items/icon_HeliacalPower_3.png";
  }
  return "/items/icon_HeliacalPower.png";
}

type ItemIconsProps = {
  items: Items;
  inHeader?: boolean;
};

export function ItemIcons({ items, inHeader }: ItemIconsProps) {
  const {
    toggleDreamBreaker,
    toggleStrikebreak,
    toggleSoulCutter,
    toggleSlide,
    toggleSolarWind,
    toggleSunsetter,
    cycleKicks,
    toggleClingGem,
    toggleAscendantLight,
    toggleSmallKeys,
  } = useItems();

  return (
    <div className="flex">
      <ClickWrapper enabled={inHeader} onClick={toggleDreamBreaker}>
        <Image
          src={
            items.dreamBreaker
              ? "/items/icon_attack.png"
              : "/items/icon_attack_grey.png"
          }
          alt="Dream Breaker"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleStrikebreak}>
        <Image
          src={
            items.strikebreak
              ? "/items/icon_chargeAttack.png"
              : "/items/icon_chargeAttack_grey.png"
          }
          alt="Strikebreak"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleSoulCutter}>
        <Image
          src={
            items.soulCutter
              ? "/items/icon_Projectile.png"
              : "/items/icon_Projectile_grey.png"
          }
          alt="Soul Cutter"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleSlide}>
        <Image
          src={
            items.slide ? "/items/icon_slide.png" : "/items/icon_slide_grey.png"
          }
          alt="Slide"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleSolarWind}>
        <Image
          src={
            items.solarWind
              ? "/items/icon_slideJump.png"
              : "/items/icon_slideJump_grey.png"
          }
          alt="Solar Wind"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleSunsetter}>
        <Image
          src={
            items.sunsetter
              ? "/items/icon_plunge.png"
              : "/items/icon_plunge_grey.png"
          }
          alt="Sunsetter"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={cycleKicks}>
        <Image src={kicksSrc(items.kicks)} alt="Kicks" width={24} height={24} />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleClingGem}>
        <Image
          src={
            items.clingGem
              ? "/items/icon_clingGem.png"
              : "/items/icon_clingGem_grey.png"
          }
          alt="Cling Gem"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleAscendantLight}>
        <Image
          src={
            items.ascendantLight
              ? "/items/icon_Light.png"
              : "/items/icon_Light_grey.png"
          }
          alt="Ascendant Light"
          width={24}
          height={24}
        />
      </ClickWrapper>
      <ClickWrapper enabled={inHeader} onClick={toggleSmallKeys}>
        <Image
          src={
            items.smallKeys ? "/items/tex_key.png" : "/items/tex_key_grey.png"
          }
          alt="Small Keys"
          width={24}
          height={24}
        />
      </ClickWrapper>
    </div>
  );
}
