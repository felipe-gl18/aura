import { Separator } from "@/components/ui/separator";
import OrganizationsCarousel from "../organizations/OrganizationsCarousel";
import ViolenceTypes from "./ViolenceTypes";
import Events from "../events/Events";
import Organizations from "../organizations/Organizations";
import Panorama from "../panorama/Panorama";
import Services from "../services/Services";

export default function Home() {
  return (
    <div className="space-y-8">
      <OrganizationsCarousel />
      <Organizations variant="organization" />
      <Panorama variant="basic" />
      <Services variant="basic" />
      <Events variant="basic" />
      <Separator />
      <ViolenceTypes />
    </div>
  );
}
