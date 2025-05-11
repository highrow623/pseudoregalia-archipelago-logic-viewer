import { useState, ReactNode } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClickWrapper from "../components/clickWrapper";

function Normal() {
  return <span className="text-green-600">Normal</span>;
}

function Hard() {
  return <span className="text-amber-600">Hard</span>;
}

function Expert() {
  return <span className="text-red-600">Expert</span>;
}

function Lunatic() {
  return <span className="text-fuchsia-600">Lunatic</span>;
}

type BoldProps = {
  children: ReactNode;
};

function Bold({ children }: BoldProps) {
  return <span className="font-bold">{children}</span>;
}

export default function Instructions() {
  const [collapsed, setCollapsed] = useState(true);

  if (collapsed) {
    return (
      <div className="border border-gray-600 p-2 bg-slate-900 rounded-sm font-bold flex mx-1">
        <ClickWrapper enabled onClick={() => setCollapsed(false)}>
          <ChevronRightIcon className="size-6 stroke-slate-300" />
        </ClickWrapper>
        <span className="text-slate-300 ml-1 select-none">How to Use</span>
      </div>
    );
  }

  return (
    <>
      <div className="border border-gray-600 p-2 bg-slate-900 rounded-t-sm font-bold flex mx-1">
        <ClickWrapper enabled onClick={() => setCollapsed(true)}>
          <ChevronDownIcon className="size-6 stroke-slate-300" />
        </ClickWrapper>
        <span className="text-slate-300 ml-1 select-none">How to Use</span>
      </div>
      <div className="text-slate-300 border-b border-r border-l border-gray-600 p-2 bg-slate-800 rounded-b-sm mx-1">
        <p>
          This table shows which locations are in logic based on your player
          options and current items. Each row represents a viable route to the
          location from game start.
        </p>
        <p className="text-slate-200 text-lg font-bold mt-4">Location</p>
        <p className="mt-2">
          This corresponds to a location in Archipelago. A single location can
          have multiple routes if it's possible to get to the location with
          distinct sets of items.
        </p>
        <p className="text-slate-200 text-lg font-bold mt-4">Logic Level</p>
        <p className="mt-2">
          This represents the minimum logic level required for the route to be
          in logic. In increasing order of difficulty, the levels are <Normal />
          , <Hard />, <Expert />, and <Lunatic />. If you chose logic level{" "}
          <Hard /> in your player options, only <Normal /> and <Hard /> routes
          are in logic while <Expert /> and <Lunatic /> routes are ignored.
        </p>
        <p className="mt-2">
          You can filter the table by choosing a logic level that matches your
          player options. Click on the icon in the <Bold>Logic Level</Bold>{" "}
          header to cycle between the different levels.
        </p>
        <p className="text-slate-200 text-lg font-bold mt-4">Obscure?</p>
        <p className="mt-2">
          This represents whether the route requires "obscure knowledge." If a
          route is marked as obscure but you have the option turned off in your
          player options, that route is not in logic. This works in conjunction
          with logic level.
        </p>
        <p className="mt-2">
          You can click the icon in the <Bold>Obscure?</Bold> header to toggle
          whether obscure routes should be in logic. Obscure knowledge is forced
          on for the <Expert /> and <Lunatic /> logic levels during generation,
          so this is also enforced in the table: when you cycle{" "}
          <Bold>Logic Level</Bold> to <Expert />, <Bold>Obscure?</Bold> will be
          set to on if it wasn't before, and toggling <Bold>Obscure?</Bold> to
          off will set <Bold>Logic Level</Bold> to <Hard /> if it was set to{" "}
          <Expert /> or <Lunatic />.
        </p>
        <p className="mt-2">
          Also, since obscure knowledge is forced on for the <Expert /> and{" "}
          <Lunatic /> logic levels, each route at those levels is automatically
          marked as obscure, so they may or may not require what could be
          considered obscure knowledge.
        </p>
        <p className="text-slate-200 text-lg font-bold mt-4">Items</p>
        <p className="mt-2">
          This shows the minimum set of items you need to complete the route and
          for the route to be in logic. It is always to possible to complete a
          route if you have more than what is required.
        </p>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_attack.png"
            alt="Dream Breaker"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            Dream Breaker or at least one Progressive Dream Breaker item
          </p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_chargeAttack.png"
            alt="Strikebreak"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            Strikebreak or at least two Progressive Dream Breaker items
          </p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_Projectile.png"
            alt="Soul Cutter"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            Soul Cutter or at least three Progressive Dream Breaker items
          </p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_slide.png"
            alt="Slide"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            Slide or at least one Progressive Slide item
          </p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_slideJump.png"
            alt="Solar Wind"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            Solar Wind or at least two Progressive Slide items
          </p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_plunge.png"
            alt="Sunsetter"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">Sunsetter</p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_HeliacalPower.png"
            alt="Kicks"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            Total kicks from Sun Greaves (+3), Heliacal Power (+1 each), and Air
            Kick (+1 each). The symbol is filled one quarter for each required
            kick.
          </p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_clingGem.png"
            alt="Cling Gem"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">Cling Gem</p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/icon_Light.png"
            alt="Ascendant Light"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">Ascendant Light</p>
        </div>
        <div className="mt-2 flex align-center">
          <Image
            src="/items/tex_key.png"
            alt="Small Keys"
            width={48}
            height={48}
          />
          <p className="ml-4 h-auto pt-3">
            "Enough" small keys. Enough is 7 for <Normal /> and 6 for <Hard />{" "}
            and higher.
          </p>
        </div>
        <p className="mt-2">
          You can toggle items on and off by clicking the corresponding icon in
          the <Bold>Items</Bold> header. (Clicking the Kicks icon will cycle the
          number of kicks since you can have a max of 4.) Setting items this way
          will filter out routes that you do not have the items to complete.
        </p>
        <p className="text-slate-200 text-lg font-bold mt-4">Sample Path</p>
        <p className="mt-2">
          Each route in the table represents getting to a location with a
          certain set of items, but there may be multiple ways to actually
          navigate the world to get there. This column gives one possibility.
        </p>
      </div>
    </>
  );
}
