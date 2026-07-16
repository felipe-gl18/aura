import data from "./data/data.json";
import Service from "./Service";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-8">
      {data.map((item, index) => (
        <Service
          key={item.id}
          data={item}
          direction={index % 2 === 0 ? "right" : "left"}
          showImage={true}
          theme="dark"
        />
      ))}
    </div>
  );
}
