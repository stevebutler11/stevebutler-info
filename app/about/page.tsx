import Me from "./me.jpg";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <h3 className="text-4xl py-4">About Me</h3>
      {/* mug shot */}
      <section>
        <div className="flex justify-center">
          <Image
            src={Me}
            alt="A picture of the author"
            className="rounded-full border-secondary border-2"
            width={200}
            height={200}
          />
        </div>
      </section>
    </main>
  );
}
