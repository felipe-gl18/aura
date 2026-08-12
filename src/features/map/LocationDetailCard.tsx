import { Icon } from "@iconify/react";
import type { ServiceLocation } from "@/types/service-location";
import { categoryStyles } from "@/types/service-location";
import { Button } from "@/components/ui/button";

export default function LocationDetailCard({
  location,
  onClose,
  onDirections,
  onDetails,
}: {
  location: ServiceLocation;
  onClose: () => void;
  onDirections?: (location: ServiceLocation) => void;
  onDetails?: (location: ServiceLocation) => void;
}) {
  const style = categoryStyles[location.category];

  return (
    <div className="pointer-events-auto mx-auto max-h-[65%] w-[80%] overflow-y-auto rounded-t-2xl bg-surface p-4 shadow-xl sm:mx-0 sm:max-h-none sm:w-[320px] sm:rounded-2xl sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            <Icon
              icon={location.icon}
              width={18}
              height={18}
              className="sm:h-5 sm:w-5"
            />
          </div>
          <div className="min-w-0">
            <h3 className="break-words text-sm font-black text-text sm:text-base">
              {location.name}
            </h3>
            <p className="break-words text-xs text-text-secondary">
              {location.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Fechar"
          className="shrink-0 rounded-full p-1 text-text-secondary transition hover:bg-primary-light hover:text-primary-main"
        >
          <Icon icon="solar:close-circle-linear" width={22} height={22} />
        </button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            location.isOpen
              ? "bg-success/10 text-success"
              : "bg-warning/10 text-warning"
          }`}
        >
          {location.isOpen
            ? "Aberto agora"
            : `Fecha às ${location.closesAt ?? "—"}`}
        </span>
        <span className="flex items-center gap-1 text-xs text-text-secondary">
          <Icon icon="solar:map-point-linear" width={14} height={14} />
          {location.distanceKm.toLocaleString("pt-BR")} km
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-primary-light pt-4 text-sm">
        <div className="flex items-start gap-2 text-text">
          <Icon
            icon="solar:map-point-linear"
            width={16}
            height={16}
            className="mt-0.5 shrink-0 text-text-secondary"
          />
          <span className="break-words">{location.address}</span>
        </div>

        {location.phone && (
          <div className="flex items-center gap-2 text-text">
            <Icon
              icon="solar:phone-linear"
              width={16}
              height={16}
              className="shrink-0 text-text-secondary"
            />
            <a href={`tel:${location.phone}`} className="hover:underline">
              {location.phone}
            </a>
          </div>
        )}

        {location.hours && (
          <div className="flex items-center gap-2 text-text">
            <Icon
              icon="solar:clock-circle-linear"
              width={16}
              height={16}
              className="shrink-0 text-text-secondary"
            />
            <span>{location.hours}</span>
          </div>
        )}
      </div>
      {location.services && location.services.length > 0 && (
        <div className="mt-4 border-t border-primary-light pt-4">
          <p className="mb-2 text-xs font-semibold text-text-secondary">
            Serviços oferecidos
          </p>
          <div className="flex flex-wrap gap-2">
            {location.services.map((service) => (
              <span
                key={service}
                className="rounded-lg bg-primary-light px-2.5 py-1 text-xs font-medium text-primary-dark"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4 flex flex-col gap-2">
        <Button
          aria-label="Como chegar ao destino"
          onClick={() => onDirections?.(location)}
          className="h-11"
        >
          <Icon icon="solar:routing-linear" width={18} height={18} />
          Como chegar
        </Button>
        <Button
          aria-label="Detalhes sobre local"
          variant="outline"
          disabled={true}
          onClick={() => onDetails?.(location)}
          className="h-11 border-2 border-primary-main text-primary-main hover:bg-primary-light"
        >
          Ver detalhes
        </Button>
      </div>
    </div>
  );
}
