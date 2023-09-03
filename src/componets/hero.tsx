import type { Component } from "solid-js";
import HeroImage from "/images/hero.png";
import HeroImageWebP from "/images/hero.webp";
export default function Hero() {
  return (
    <>
      {/* Intro section */}
      <div class="flex flex-col w-full h-screen items-center px-8 lg:px-0 lg:flex-row ">
        <div class="flex flex-col mx-auto lg:w-1/2 font-titillium space-y-4 justify-center">
          <h1 class="text-gray-800 text-5xl lg:text-7xl font-bold pt-8 lg:leading-relaxed">
            Hi, ich bin Aaron Suppan
          </h1>
          <h2 class="text-zinc-800 text-2xl lg:text-4xl font-bold">
            Ich{" "}
            <span class="font-bold tracking-widest font-outline hover:bg-blue-200">
              konzipierte
            </span>{" "}
            &{" "}
            <span class="font-bold tracking-widest font-outline hover:bg-pink-300">
              gestalte
            </span>
            ,{" "}
            <span class="font-bold tracking-widest font-outline hover:bg-teal-200 ">
              optimiere
            </span>
            .
          </h2>
          <p class="text-zinc-800 text-xl font-bold">
            Ich bin ein Designer aus dem Burgenland, Österreich, spezialisiert
            auf ganzheitliche
            <br />
            UX/UI-Designs für Software, Websites und Grafik. Mein Ziel ist es,
            durch <br />
            ansprechendes Design positive Veränderungen im Leben anderer zu
            bewirken, während<br /> ich mich kontinuierlich weiterentwickle.
          </p>
          <div class="text-zinc-800 text-lg font-bold underline-offset-8 underline decoration-4">
            Schau dir meine Arbeiten an
          </div>
        </div>
        <div class="lg:flex lg:flex-col hidden lg:visible  ">
          <picture>
            <source srcset={HeroImageWebP} type="image/webp" />
            <img
              src={HeroImage}
              width={624}
              height={1000}
              alt="Bild des Desinger der Website"
            />
          </picture>
        </div>
      </div>
    </>
  );
}
