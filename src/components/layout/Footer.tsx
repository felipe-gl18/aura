import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:justify-between">
        {/* Links */}
        <div>
          <h3 className="font-semibold text-white py-4">Projeto</h3>

          <nav className="flex flex-col gap-3 text-sm text-text-secondary">
            <Link
              className="text-primary-light transition-colors hover:text-white"
              to="/about"
            >
              Sobre o projeto
            </Link>
            <Link
              className="text-primary-light transition-colors hover:text-white"
              to="/sources"
            >
              Fontes e dados utilizados
            </Link>
          </nav>
        </div>

        {/* Organizations */}
        <div>
          <h3 className="font-semibold text-white py-4">Organizações</h3>

          <nav className="flex flex-col gap-3 text-sm text-text-secondary">
            <Link
              className="text-primary-light transition-colors hover:text-white"
              to="/"
            >
              CREAS
            </Link>
            <Link
              className="text-primary-light transition-colors hover:text-white"
              to="/"
            >
              CRAS
            </Link>
            <Link
              className="text-primary-light transition-colors hover:text-white"
              to="/"
            >
              Delegacia da Mulher
            </Link>
          </nav>
        </div>

        {/* Emergency */}
        <div>
          <h3 className="flex gap-4 font-semibold text-white py-4">
            <PhoneCall className="h-5 w-5" />
            Precisa de ajuda?
          </h3>

          <div className="space-y-3 text-sm">
            <p className="text-primary-light/90">Ligue 190</p>

            <p className="text-primary-light/90">Disque 180</p>

            <p className="text-primary-light/90">Disque 100</p>
          </div>
        </div>
      </div>

      <div className=" border-t border-primary-light/20 text-primary-light/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm  md:flex-row">
          <span>
            © {new Date().getFullYear()} AURA. Todos os direitos reservados.
          </span>

          <span>Desenvolvido como projeto de extensão universitária.</span>
        </div>
      </div>
    </footer>
  );
}
