import AllPosts from "@/app/components/allPosts";

const Page = () => {
  return (
    <main>
      <h3 className="text-4xl py-4">Posts</h3>
      <section>
        <AllPosts />
      </section>
    </main>
  );
};

export default Page;
