import Browse from "@/components/Browse";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black  p-5">
      <main className="space-y-5 mt-5">
        {/* <Link href={"/login"}> <Button>Login</Button></Link>
        <Link href={"/register"}><Button>Register</Button></Link> */}

        <SearchBar />
        <Hero />
        <Browse/>
      </main>
    </div>
  );
}
