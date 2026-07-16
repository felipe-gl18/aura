import data from "./data/data.json";
import violence from "@/assets/illustrations/violence.svg";
import logo from "@/assets/white_logo.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Organization from "./Organization";

export default function OrganizationsCarousel() {
  return (
    <div className="w-full flex justify-between bg-primary-main overflow-hidden">
      <Carousel
        opts={{ align: "start" }}
        className="w-[600px] min-w-0 shrink-0"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="basis-1/1">
          {data.map((item, index) => (
            <CarouselItem key={item.id} className="basis-1/1">
              <Organization
                data={item}
                direction={index % 2 === 0 ? "right" : "left"}
                showImage={false}
                theme="light"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img src={logo} className="w-[566px] h-auto shrink-0" />
      <img src={violence} className="w-[366px] h-auto shrink-0 mr-[96px]" />
    </div>
  );
}
