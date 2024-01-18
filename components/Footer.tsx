"use client";

import React, { useEffect, useState } from "react";
import * as Facebook from "@/public/images/facebook.svg";
import * as LinkedIn from "@/public/images/linkedin.svg";
import * as Instagram from "@/public/images/instagram.svg";

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ImageLoader, StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  src:  string | StaticImport;
  quality?: number;
  width?: number;
}



const imageLoader = ({ src, width, quality }: Props ) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const Footer = () => {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.innerWidth > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <footer>
        <div className=" flex justify-evenly px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link href="https://www.facbook.com/ArinzeMeshach">
                  <Image
                    loader={imageLoader}
                    src={Facebook}
                    className="w-5"
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/meshach-ekene">
                  <Image
                    src={LinkedIn}
                    loader={imageLoader}
                    className="w-5"
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.instgram.com/arinzmeshach">
                  <Image
                    loader={imageLoader}
                    src={Instagram}
                    className="w-5"
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {/* <Image
            src={ArrowDown}
            alt=""
            width={50}
            height={50}
            loading="lazy"
            style={{
              objectFit: "contain",
            }}
          /> */}
          <ArrowDownIcon />
        </button>
      )}
    </>
  );
};

export default Footer;
