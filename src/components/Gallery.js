import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import image from "../images/tour3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const component = useRef();
  const sectionA = useRef();

  const images = gsap.utils.toArray("img");

  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");
        const [x, xEnd] =
          index % 2
            // ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
            ? ["100%", (w.scrollWidth) * -1]

            : [w.scrollWidth * -1, 0]; //moving the section to the left
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: sectionA.current,
              scrub: 0.5,
            },
          }
        );
      });
    }, component);

    return () => ctx.revert();
  });

  return (
    <section ref={component}>
      <div ref={sectionA}>
        <section>
          <Flex className="wrapper">
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
          </Flex>
        </section>
        <section>
        <Flex className="wrapper">
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
          </Flex>
        </section>
        <section>
        <Flex className="wrapper">
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
              <Image src={image} w={700}></Image>
          </Flex>
        </section>
      </div>
    </section>
  );
}

// export default Gallery
