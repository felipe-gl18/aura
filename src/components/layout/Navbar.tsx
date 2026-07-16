import Logo from "@/assets/logo.png";
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

export default function Navbar() {
  const navigate = useNavigate();
  const handleRedirect = (to: string) => {
    navigate(to);
  };

  return (
    <div className="flex p-[26px] bg-white">
      <NavigationMenu className="max-w-none w-full">
        <NavigationMenuList className="grid w-full grid-cols-3 items-center">
          {/* Coluna 1: Home, alinhado à esquerda */}
          <div className="flex justify-self-start">
            <NavigationMenuItem>
              <Link to="home">
                <img src={Logo} className="w-[126px] h-[84px]" />
              </Link>
            </NavigationMenuItem>
          </div>

          {/* Coluna 2: itens centrais, sempre centralizados */}
          <div className="flex justify-self-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
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
              <NavigationMenuTrigger>
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
              <NavigationMenuLink className="cursor-pointer">
                Panorama
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>

          {/* Coluna 3: Entrar em contato, alinhado à direita */}
          <div className="flex justify-self-end">
            <NavigationMenuItem onClick={() => handleRedirect("contact")}>
              <NavigationMenuLink className="cursor-pointer border-1 border-primary-main hover:bg-transparent">
                Entrar em contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
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
          <Link to={href}>
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
