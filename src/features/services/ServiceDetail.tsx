import { useParams } from "react-router-dom";
import paefi from "@/assets/paefi.jpeg";
import abordagem_social from "@/assets/abordagem_social.jpeg";
import equipe_medidas_socioeducativa from "@/assets/equipe_medidas_socioeducativa.jpeg";
import policia_militar from "@/assets/illustrations/190.png";
import data from "./data/data.json";
import { Button } from "@/components/ui/button";

const images = {
  paefi,
  abordagem_social,
  equipe_medidas_socioeducativa,
  policia_militar,
};

export default function ServiceDetail() {
  const { service } = useParams();
  const serviceData = data.find((item) => item.path === `/services/${service}`);

  const handleRedirect = () => {
    window.open(serviceData?.link, "_blank");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[840px] px-4 sm:px-8 lg:px-[54px] flex flex-col gap-6 sm:gap-8 py-12 lg:my-[76px]">
        <div className="space-y-2">
          <p className="text-2xl font-black text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            {serviceData?.name}
          </p>
          <span className="text-sm text-[#6B7280] sm:text-base">
            {serviceData?.description}
          </span>
        </div>

        <img
          src={images[serviceData?.image as keyof typeof images]}
          alt={serviceData?.name}
          className="w-full h-auto shrink-0 rounded-md"
        />

        <div className="space-y-4">
          <p className="text-2xl font-black text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            Como funciona?
          </p>
          <ol className="space-y-3">
            {serviceData?.steps?.map((step) => (
              <li key={step.id} className="space-y-1">
                <p className="text-sm font-medium text-[#6B7280] sm:text-base">
                  {step.id}. {step.title}
                </p>
                <p className="text-sm text-[#6B7280] sm:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="w-full text-center">
          <Button
            onClick={handleRedirect}
            className="w-full max-w-[252px] h-[44px]"
          >
            {serviceData?.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
