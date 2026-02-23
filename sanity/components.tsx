'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlockAnnotationProps, BlockDecoratorProps, BlockProps } from "sanity";
import { Stack, Flex, Text, Radio } from "@sanity/ui";
import { set, unset } from "sanity";
import { ColorValue } from "@sanity/color-input";
import React, { JSX } from "react";
export const portableChip = (props: BlockAnnotationProps) => {
    return (
        <span style={{ backgroundColor: props.value['color'] as string, padding: "2px 6px", borderRadius: "4px", }}>{props.textElement}</span>
    );
};

const COLORS = [
  { title: "Gray", value: "gray", hex: "#9ca3af" },
  { title: "Blue", value: "blue", hex: "#3b82f6" },
  { title: "Green", value: "green", hex: "#22c55e" },
  { title: "Red", value: "red", hex: "#ef4444" },
  { title: "Yellow", value: "yellow", hex: "#eab308" },
  { title: "Purple", value: "purple", hex: "#a855f7" },
  { title: "Orange", value: "orange", hex: "#f97316" },
  { title: "Black", value: "black", hex: "#000000" },
  { title: "White", value: "white", hex: "#ffffff" },
];

export function ColorRadioInput(props: any) {
  const { value, onChange } = props;

  return (
    <Stack space={3}>
      {COLORS.map((color) => (
        <Flex
          key={color.value}
          align="center"
          gap={3}
          style={{ cursor: "pointer" }}
          onClick={() =>
            onChange(
              color.value ? set(color.value) : unset()
            )
          }
        >
          <Radio checked={value === color.value} />
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              backgroundColor: color.hex,
              border: "1px solid #ccc",
            }}
          />
          <Text size={1}>{color.title}</Text>
        </Flex>
      ))}
    </Stack>
  );
}

export const portableBadge = (props: BlockAnnotationProps) => {
  const {
    color,
    logo,
    logoColor,
  }: {
    color?: ColorValue;
    logo?: string;
    logoColor?: ColorValue;
  } = props.value as any;

  // ✅ Correct way to get the label text
//   props.textElement is JSX.Element
//  const label = (jsxToString(props.textElement.props))||"BAD" ;
    // typeof props.textElement.props.children === "string"
    //   ? props.textElement.props.children
    //   : Array.isArray(props.textElement.props.children)
    //   ? props.textElement.props.children.join("")
    //   : "Badge";

  const bgColor = color?.hex?.replace("#", "") || "cccccc";
  const logoClr = logoColor?.hex?.replace("#", "") || "ffffff";

//   const imgUrl = `https://img.shields.io/badge/-${encodeURIComponent(
//     label,
//   )}-${bgColor}?style=for-the-badge&logo=${encodeURIComponent(
//     logo || "badge",
//   )}&logoColor=${logoClr}`;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "middle",
        background: `#${bgColor}`,
        color: `#${logoClr}`,
        padding: "2px 6px",
        borderRadius: "4px",
      }}
    >
      {props.textElement}
    </span>
  );
};

export const jsxToString = (node: React.ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(jsxToString).join("");
  }

  if (React.isValidElement(node)) {
    return jsxToString((node as React.ReactElement<any>).props.children);
  }

  return "";
};