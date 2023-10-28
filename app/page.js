import Head from "next/head";
import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Quicksand:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
