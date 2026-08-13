import { useMemo, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Icon } from "@iconify/react";
import L from "leaflet";
import type { ServiceLocation } from "@/types/service-location";
import { categoryStyles } from "@/types/service-location";
import NearbyServices from "./NearbyServices";
import CategoryFilter, { type CategoryFilterValue } from "./CategoryFilter";
import rawLocations from "./data/data.json";
import LocationDetailCard from "./LocationDetailCard";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const locations = rawLocations as ServiceLocation[];

function buildDivIcon(location: ServiceLocation) {
  const style = categoryStyles[location.category];
  const html = renderToStaticMarkup(
    <div
      style={{
        backgroundColor: style.color,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        transform: "rotate(-45deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ transform: "rotate(45deg)", color: "white" }}>
        <Icon icon={location.icon} width={16} height={16} />
      </div>
    </div>,
  );

  return L.divIcon({
    html,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
}

const handleDirections = (location: ServiceLocation) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Map() {
  const [selected, setSelected] = useState<ServiceLocation | null>(null);
  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilterValue>("all");

  const filteredLocations = useMemo(() => {
    if (categoryFilter === "all") return locations;
    return locations.filter((location) => location.category === categoryFilter);
  }, [categoryFilter]);

  const handleCategoryChange = (value: CategoryFilterValue) => {
    setCategoryFilter(value);

    const stillVisible =
      selected && (value === "all" || selected.category === value);

    if (!stillVisible) {
      const nextLocations =
        value === "all"
          ? locations
          : locations.filter((location) => location.category === value);
      setSelected(nextLocations[0] ?? null);
    }
  };

  return (
    <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
      <div className="relative isolate h-[55vh] w-full overflow-visible rounded-xl sm:h-[500px] lg:h-[640px]">
        <MapContainer
          center={[-3.6894, -40.3497]}
          zoom={14}
          scrollWheelZoom={false}
          className="h-full w-full rounded-xl"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors &copy; CARTO"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {filteredLocations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={buildDivIcon(location)}
              eventHandlers={{
                click: () => setSelected(location),
              }}
            />
          ))}
        </MapContainer>
        <div className="pointer-events-auto absolute left-14 right-3 top-3 z-[1000] sm:inset-x-4 sm:top-4 md:inset-x-14 lg:inset-x-16 lg:top-4">
          <CategoryFilter
            value={categoryFilter}
            onChange={handleCategoryChange}
          />
        </div>
        {selected && (
          <div className="pointer-events-none absolute inset-x-0 top-4 z-[1000] sm:inset-x-auto sm:bottom-auto sm:right-4 sm:top-20">
            <LocationDetailCard
              location={selected}
              onClose={() => setSelected(null)}
              onDirections={handleDirections}
            />
          </div>
        )}
      </div>

      <NearbyServices locations={filteredLocations} onSelect={setSelected} />
    </div>
  );
}
