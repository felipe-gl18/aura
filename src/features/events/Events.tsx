import data from "./data/data.json";
import Event from "./Event";

export default function Events() {
  return (
    <div className="flex flex-col items-center gap-8">
      {data.map((item, index) => (
        <Event
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
