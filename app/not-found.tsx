import { Button } from "@/components/ui/button";
import React from "react";
const notfound = () => {
  return (
    <main>
      <h1 className="text-8xl mt-16">Oh no!</h1>
      <p className="my-4">It seems you&#39;ve gotten lost. You can make your way back home below</p>
      <Button><a href="/">Go home</a></Button>
    </main>
  );
};

export default notfound;
