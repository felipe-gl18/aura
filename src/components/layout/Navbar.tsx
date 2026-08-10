import { useState } from "react";
import Logo from "@/assets/white_full_logo.png";
import organizations from "@/features/organizations/data/data.json";
import services from "@/features/services/data/data.json";
import events from "@/features/events/data/data.json";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleRedirect = (to: string) => {
    navigate(to);
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <div className="relative flex items-center justify-between bg-primary-main px-[26px] py-[26px] shadow-sm">
      {/* Logo — sempre visível */}
      <Link to="home" onClick={() => setMobileOpen(false)}>
        <img src={Logo} className="h-[64px] w-auto lg:h-[84px] lg:w-[126px]" />
      </Link>

      {/* ---------- MENU DESKTOP (lg e acima) ---------- */}
      <NavigationMenu className="hidden lg:flex max-w-none flex-1 justify-center">
        <NavigationMenuList className="flex items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="
    rounded-md
    bg-transparent
    text-white
    transition-all
    duration-200
    hover:bg-primary-dark
    hover:scale-105
    hover:text-white
    data-[state=open]:bg-primary-dark
    data-[state=open]:text-white
  "
            >
              <Link to="organizations">Organizations</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {organizations.slice(0, 4).map((service) => (
                  <ListItem
                    key={service.id}
                    title={service.name}
                    href="organizations"
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="
    rounded-md
    bg-transparent
    text-white
    transition-all
    duration-200
    hover:bg-primary-dark
    hover:scale-105
    hover:text-white
    data-[state=open]:bg-primary-dark
    data-[state=open]:text-white
  "
            >
              <Link to="services">Serviços</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {services.slice(0, 4).map((service) => (
                  <ListItem
                    key={service.id}
                    title={service.name}
                    href={service.path}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="
    rounded-md
    bg-transparent
    text-white
    transition-all
    duration-200
    hover:bg-primary-dark
    hover:scale-105
    hover:text-white
    data-[state=open]:bg-primary-dark
    data-[state=open]:text-white
  "
            >
              <Link to="events">Eventos</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {events.slice(0, 4).map((service) => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href="events"
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => handleRedirect("panorama")}>
            <NavigationMenuLink
              className="
        cursor-pointer
        rounded-md
        px-3
        py-2
        text-white
        transition-all
        duration-200
        hover:bg-primary-dark
        hover:scale-105
    "
            >
              Panorama
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => handleRedirect("about")}>
            <NavigationMenuLink
              className="
        cursor-pointer
        rounded-md
        px-3
        py-2
        text-white
        transition-all
        duration-200
        hover:bg-primary-dark
        hover:scale-105
    "
            >
              Sobre nós
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Link
          to="contact"
          className="
    rounded-md
    border
    border-white/40
    px-4
    py-2
    text-white
    transition-all
    duration-200
    hover:bg-white
    hover:text-primary-main
    hover:scale-[1.03]
  "
        >
          Entrar em contato
        </Link>
      </div>

      {/* ---------- BOTÃO HAMBÚRGUER (abaixo de lg) ---------- */}
      <button
        type="button"
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
        className="flex lg:hidden text-white transition-transform duration-200 hover:scale-110"
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ---------- PAINEL MOBILE ---------- */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-1 border-t bg-white p-4 shadow-md lg:hidden">
          <MobileSection
            label="Organizations"
            isOpen={mobileSubmenu === "organizations"}
            onToggle={() =>
              setMobileSubmenu((prev) =>
                prev === "organizations" ? null : "organizations",
              )
            }
            items={organizations.slice(0, 4).map((o) => ({
              id: o.id,
              title: o.name,
              href: "organizations",
            }))}
            onNavigate={handleRedirect}
          />
          <MobileSection
            label="Serviços"
            isOpen={mobileSubmenu === "services"}
            onToggle={() =>
              setMobileSubmenu((prev) =>
                prev === "services" ? null : "services",
              )
            }
            items={services.slice(0, 4).map((s) => ({
              id: s.id,
              title: s.name,
              href: s.path,
            }))}
            onNavigate={handleRedirect}
          />
          <MobileSection
            label="Eventos"
            isOpen={mobileSubmenu === "events"}
            onToggle={() =>
              setMobileSubmenu((prev) => (prev === "events" ? null : "events"))
            }
            items={events.slice(0, 4).map((e) => ({
              id: e.id,
              title: e.title,
              href: "events",
            }))}
            onNavigate={handleRedirect}
          />

          <button
            onClick={() => handleRedirect("panorama")}
            className="px-2 py-3 text-left text-sm font-medium"
          >
            Panorama
          </button>

          <button
            onClick={() => handleRedirect("about")}
            className="px-2 py-3 text-left text-sm font-medium"
          >
            Sobre nós
          </button>

          <button
            onClick={() => handleRedirect("contact")}
            className="mt-2 rounded-md border border-primary-main px-4 py-2 text-sm font-medium text-primary-main"
          >
            Falar com CREAS
          </button>
        </div>
      )}
    </div>
  );
}

function MobileSection({
  label,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: { id: string; title: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (to: string) => void;
}) {
  return (
    <div className="border-b border-muted">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-2 py-3 text-left text-sm font-medium"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-1 pb-2 pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.href)}
                className="w-full py-2 text-left text-sm text-muted-foreground"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            to={href}
            className="
        block
        rounded-md
        p-3
        transition-all
        duration-200
        hover:bg-primary-light
        hover:translate-x-1
    "
          >
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
