import data from "./data/data.json";
import Organization from "./Organization";

export default function Organizations() {
  return (
    <div className="flex flex-col items-center gap-8">
      {data.map((item, index) => (
        <Organization
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
