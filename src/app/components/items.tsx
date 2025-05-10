import Image from "next/image";

export type Items = {
  dreamBreaker: boolean;
  strikebreak: boolean;
  soulCutter: boolean;
  slide: boolean;
  solarWind: boolean;
  sunsetter: boolean;
  kicks: number;
  clingGem: boolean;
  ascendantLight: boolean;
  smallKeys: boolean;
};

export const defaultItems: Items = {
  dreamBreaker: false,
  strikebreak: false,
  soulCutter: false,
  slide: false,
  solarWind: false,
  sunsetter: false,
  kicks: 0,
  clingGem: false,
  ascendantLight: false,
  smallKeys: false,
};

export const allItems: Items = {
  dreamBreaker: true,
  strikebreak: true,
  soulCutter: true,
  slide: true,
  solarWind: true,
  sunsetter: true,
  kicks: 4,
  clingGem: true,
  ascendantLight: true,
  smallKeys: true,
};

export function hasRequiredItems(items: Items, required: Items) {
  if (required.dreamBreaker && !items.dreamBreaker) {
    return false;
  }
  if (required.strikebreak && !items.strikebreak) {
    return false;
  }
  if (required.soulCutter && !items.soulCutter) {
    return false;
  }
  if (required.slide && !items.slide) {
    return false;
  }
  if (required.solarWind && !items.solarWind) {
    return false;
  }
  if (required.sunsetter && !items.sunsetter) {
    return false;
  }
  if (required.kicks > items.kicks) {
    return false;
  }
  if (required.clingGem && !items.clingGem) {
    return false;
  }
  if (required.ascendantLight && !items.ascendantLight) {
    return false;
  }
  if (required.smallKeys && !items.smallKeys) {
    return false;
  }
  return true;
}

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

function kicksAlt(kicks: number): string {
  if (kicks === 0) {
    return "No Kicks Required";
  }
  if (kicks === 1) {
    return "1 Kick Required";
  }
  return String(kicks) + " Kicks Required";
}

type ItemIconsProps = {
  items: Items
};

export function ItemIcons({ items }: ItemIconsProps) {
  return (
    <div className="flex">
      <Image
        src={items.dreamBreaker ? "/items/icon_attack.png" : "/items/icon_attack_grey.png"}
        alt={items.dreamBreaker ? "Dream Breaker Required" : "Dream Breaker Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.strikebreak ? "/items/icon_chargeAttack.png" : "/items/icon_chargeAttack_grey.png"}
        alt={items.strikebreak ? "Strikebreak Required" : "Strikebreak Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.soulCutter ? "/items/icon_Projectile.png" : "/items/icon_Projectile_grey.png"}
        alt={items.soulCutter ? "Soul Cutter Required" : "Soul Cutter Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.slide ? "/items/icon_slide.png" : "/items/icon_slide_grey.png"}
        alt={items.slide ? "Slide Required" : "Slide Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.solarWind ? "/items/icon_slideJump.png" : "/items/icon_slideJump_grey.png"}
        alt={items.solarWind ? "Solar Wind Required" : "Solar Wind Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.sunsetter ? "/items/icon_plunge.png" : "/items/icon_plunge_grey.png"}
        alt={items.sunsetter ? "Sunsetter Required" : "Sunsetter Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={kicksSrc(items.kicks)}
        alt={kicksAlt(items.kicks)}
        width={24}
        height={24}
      />
      <Image
        src={items.clingGem ? "/items/icon_clingGem.png" : "/items/icon_clingGem_grey.png"}
        alt={items.clingGem ? "Cling Gem Required" : "Cling Gem Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.ascendantLight ? "/items/icon_Light.png" : "/items/icon_Light_grey.png"}
        alt={items.ascendantLight ? "Ascendant Light Required" : "Ascendant Light Not Required"}
        width={24}
        height={24}
      />
      <Image
        src={items.smallKeys ? "/items/tex_key.png" : "/items/tex_key_grey.png"}
        alt={items.smallKeys ? "Small Keys Required" : "Small Keys Not Required"}
        width={24}
        height={24}
      />
    </div>
  );
}
