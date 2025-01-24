import Me from "../../public/images/me.jpg";
import Image from "next/image";

export const runtime = "edge";

const Page = () => {
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
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
