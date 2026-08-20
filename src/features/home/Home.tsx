import { Separator } from "@/components/ui/separator";
import OrganizationsCarousel from "../organizations/OrganizationsCarousel";
import ViolenceTypes from "./ViolenceTypes";
import Events from "../events/Events";
import Organizations from "../organizations/Organizations";
import Panorama from "../panorama/Panorama";
import Services from "../services/Services";
import background from "@/assets/background.svg";
import Cases from "../cases/Cases";

export default function Home() {
  return (
    <div className="">
      <OrganizationsCarousel />
      <Organizations variant="organization" />
      <ViolenceTypes />
      <Panorama variant="basic" />
      <div
        style={{
          backgroundImage: `url("${background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Services variant="basic" />
        <Events variant="basic" />
        <Cases />
      </div>
      <Separator />
    </div>
  );
}
