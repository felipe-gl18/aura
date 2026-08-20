import { Link } from "react-router-dom";
import { PhoneCall, ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";

const organizacoes = [
  {
    nome: "CREAS",
    instagram: "https://www.instagram.com/creassobral/",
    whatsapp: "https://wa.me/558881132679",
  },
  {
    nome: "CRAS",
    instagram: "https://www.instagram.com/crasirmaoswaldasobral/",
    whatsapp: "https://wa.me/5585989597453",
  },
  {
    nome: "Juizado",
    whatsapp: "https://wa.me/558582344888",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#512B8A]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-3 lg:px-20">
        {/* Projeto */}
        <div>
          <h3 className="py-4 font-semibold text-white">Projeto</h3>

          <nav className="flex flex-col gap-3 text-sm">
            <Link
              className="text-[#EDE5FA] transition-colors hover:text-white"
              to="/about"
            >
              Sobre o projeto
            </Link>

            <Link
              className="text-[#EDE5FA] transition-colors hover:text-white"
              to="/sources"
            >
              Fontes e dados utilizados
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="py-4 font-semibold text-white">Organizações</h3>

          <div className="flex flex-col gap-6">
            {organizacoes.map((org) => (
              <div key={org.nome} className="flex flex-col gap-2 text-sm">
                <a
                  href={org.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDE5FA] transition-colors hover:text-white"
                >
                  {org.nome}
                </a>

                <nav className="flex items-center gap-3">
                  <a
                    href={org.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp do ${org.nome}`}
                    className="text-[#EDE5FA] transition-colors hover:text-white"
                  >
                    <Icon icon="mdi:whatsapp" width={20} height={20} />
                  </a>

                  {org.instagram && (
                    <a
                      href={org.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram do ${org.nome}`}
                      className="text-[#EDE5FA] transition-colors hover:text-white"
                    >
                      <Icon icon="mdi:instagram" width={20} height={20} />
                    </a>
                  )}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency */}
        <div>
          <h3 className="flex items-center gap-3 py-4 font-semibold text-white">
            <PhoneCall className="h-5 w-5" />
            Precisa de ajuda?
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="tel:190"
              className="flex items-center gap-2 text-[#EDE5FA] transition-colors hover:text-white"
            >
              Ligue 190
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="tel:180"
              className="flex items-center gap-2 text-[#EDE5FA] transition-colors hover:text-white"
            >
              Disque 180
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="tel:100"
              className="flex items-center gap-2 text-[#EDE5FA] transition-colors hover:text-white"
            >
              Disque 100
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#EDE5FA]/20 text-[#EDE5FA]/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm md:flex-row md:text-left">
          <span>
            © {new Date().getFullYear()} AURA. Todos os direitos reservados.
          </span>

          <span>Desenvolvido como projeto de extensão universitária.</span>
        </div>
      </div>
    </footer>
  );
}
