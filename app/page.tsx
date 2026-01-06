import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Quote } from "@/components/sections/Quote";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Expertise />
      <Process />
      <Projects />
      <Quote />
    </main>
  );
}
