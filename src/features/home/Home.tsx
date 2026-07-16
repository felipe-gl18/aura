import { Separator } from "@/components/ui/separator";
import Organizations from "../organizations/Organizations";
import OrganizationsCarousel from "../organizations/OrganizationsCarousel";
import ViolenceTypes from "./ViolenceTypes";

export default function Home() {
  return (
    <div className="">
      <OrganizationsCarousel />
      <Organizations />
      <Separator />
      <ViolenceTypes />
    </div>
  );
}
