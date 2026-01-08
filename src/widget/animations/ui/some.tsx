'use client';

import gsap from 'gsap';
import { useEffect } from 'react';

function Box() {
  return <div className="box w-8 h-8 border-2 border-red-500" />;
}

function TOP() {
  return (
    <div className="top w-8 h-8 border-2 border-yellow-400 rounded-full" />
  );
}


function UCBURC() {
  return (
    <div
      className="
      ucburc
      right
        w-8 h-8
        border-l-[20px] border-l-transparent
        border-r-[20px] border-r-transparent
        border-b-[35px] border-b-yellow-400
      "
    />
  );
}


export function SomeUI() {
  const timeLine = gsap.timeline();
  useEffect(() => {
    timeLine.to('.box', { duration: 2, x: 550 }).to('.top', { duration: 2, x: 550 }).to('.ucburc', {
      duration: 2,
      x: -550,
    });
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <h2>GSAP</h2>
      <Box />
      <TOP />
      <UCBURC />

    </section>
  );
}
