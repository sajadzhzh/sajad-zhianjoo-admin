"use client";

import Button from "@/Components/Button/Button";
import { Menu } from "lucide-react";
import HiddenMenuContent from "./Content";
import { useState } from "react";

export default function HiddenMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button theme="normal" onClick={()=> setOpen(true)}>
        <Menu />
      </Button>

      <HiddenMenuContent open={open} setOpen={setOpen} />
    </>
  );
}
