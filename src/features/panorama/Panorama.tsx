import PanoramaAction from "./PanoramaAction";
import PanoramaNumbers from "./PanoramaNumbers";
import PanoramaViolenceTypes from "./PanoramaViolenceTypes";
import PanoramaWhen from "./PanoramaWhen";
import PanoramaWhere from "./PanoramaWhere";
import PanoramaWho from "./PanoramaWho";

export default function Panorama() {
  return (
    <div className="w-8/10 flex flex-col justify-self-center px-[96px] gap-6 pb-[96px]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-3 py-16">
        <span className="w-fit rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-primary">
          📊 Panorama
        </span>

        <h2 className="text-5xl font-bold tracking-tight text-text">
          Panorama da Violência Contra a Mulher
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-lg text-text-secondary">
            Dados oficiais do{" "}
            <span className="font-semibold text-primary">Ligue 180</span> •
            Janeiro a Julho de 2025
          </p>

          <a
            href="#"
            className="text-sm text-primary transition-colors hover:text-primary-dark"
          >
            Fonte: Ministério das Mulheres ↗
          </a>
        </div>
      </section>
      <PanoramaNumbers />
      <div className="flex gap-6">
        <PanoramaViolenceTypes />
        <PanoramaWhere />
      </div>
      <div className="flex gap-6">
        <PanoramaWho />
        <PanoramaWhen />
      </div>
      <PanoramaAction />
    </div>
  );
}
