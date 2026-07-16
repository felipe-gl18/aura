import { useParams } from "react-router-dom";
import paefi from "@/assets/paefi.png";
import data from "./data/data.json";
import { Button } from "@/components/ui/button";

const images = {
  paefi,
};

export default function ServiceDetail() {
  const { service } = useParams();
  const serviceData = data.find((item) => item.id === service?.toUpperCase());

  const handleRedirect = () => {
    window.open(serviceData?.link, "_blank");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[840px] px-[54px] flex flex-col gap-8 my-[76px]">
        <div className="space-y-2">
          <p className="text-4xl font-black text-[#2D2D2D]">
            {service?.toUpperCase()}
          </p>
          <span className="text-[#6B7280]">{serviceData?.description}</span>
        </div>
        <img
          src={images[serviceData?.image as keyof typeof images]}
          alt={serviceData?.name}
          className="w-[732px] h-auto shrink-0 rounded-md"
        />
        <div className="space-y-4">
          <p className="text-4xl font-black text-[#2D2D2D]">Como funciona?</p>
          <ol>
            {serviceData?.steps?.map((step) => (
              <>
                <li className="text-[#6B7280]">
                  {step.id}. {step.title}
                </li>
                <p className="text-[#6B7280]">{step.description}</p>
              </>
            ))}
          </ol>
        </div>
        <div className="w-full text-center">
          <Button onClick={handleRedirect} className="w-[252px] h-[44px]">
            {serviceData?.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
