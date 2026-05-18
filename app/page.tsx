import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Hammer,
  Leaf,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { ToolCarousel } from "./tool-carousel";

const lokkiUrl = "https://www.lokki.rent/loueur/locatoi-38";

const heroTools = [
  { name: "Meuleuse", image: "/tools/meuleuse.png" },
  { name: "Nettoyeur", image: "/tools/nettoyeur.png" },
  { name: "Nettoyeur haute pression", image: "/tools/nettoyeur-haute-pression.png" },
  { name: "Perforateur", image: "/tools/perforateur.png" },
  { name: "Scie circulaire", image: "/tools/scie.png" },
  { name: "Tronçonneuse", image: "/tools/tronconneuse.png" },
];

const categories = [
  {
    title: "Outillage",
    text: "Perceuses, visseuses, meuleuses, perforateurs.",
    icon: Wrench,
  },
  {
    title: "Matériel de chantier",
    text: "Équipements robustes pour vos travaux professionnels.",
    icon: Hammer,
  },
  {
    title: "Jardin & extérieur",
    text: "Matériel pour entretien, coupe, nettoyage et aménagement.",
    icon: Leaf,
  },
  {
    title: "Nettoyage",
    text: "Aspirateurs, nettoyeurs et équipements haute performance.",
    icon: Sparkles,
  },
  {
    title: "Manutention",
    text: "Solutions pratiques pour déplacer, transporter et travailler efficacement.",
    icon: Truck,
  },
  {
    title: "Vente matériel",
    text: "Matériel, accessoires et équipements disponibles à l’achat.",
    icon: ShoppingCart,
  },
];

const steps = [
  {
    title: "Choisissez votre matériel",
    text: "Consultez les équipements disponibles selon votre besoin.",
    icon: Search,
  },
  {
    title: "Réservez sur Lokki",
    text: "La réservation se fait simplement via la plateforme Lokki.",
    icon: CalendarDays,
  },
  {
    title: "Récupérez l’équipement",
    text: "Vous récupérez votre matériel selon les modalités prévues.",
    icon: PackageCheck,
  },
];

const featuredTools = [
  {
    name: "Perfo-burineur MAKITA 18V",
    image: "/tools/perforateur.png",
    tag: "Populaire",
    lokkiUrl:"https://www.lokki.rent/loueur/locatoi-38/produit/perfo-burineur-makita-18v-683e0bb2b6da4334ba76af37",
    price: "A partir 10.00€",
  },
  {
    name: "Meuleuse d'angle 18V Ø125 mm MAKITA",
    image: "/tools/meuleuse.png",
    tag: "Disponible",
    lokkiUrl:"https://www.lokki.rent/loueur/locatoi-38/produit/meuleuse-dangle-18v-125-mm-makita-6866a7359057e8e09e7a4e98",
    price: "À partir 10.00€",
  },
  {
    name: "Nettoyeur Haute Pression thermique COMET",
    image: "/tools/nettoyeur-haute-pression.png",
    tag: "Pro",
    lokkiUrl:"https://www.lokki.rent/loueur/locatoi-38/produit/nettoyeur-haute-pression-thermique-comet-684329f150a7e2e4fcb6b65e",
    price: "À partir 50.00€",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#f8f5ef]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Loc à Toi 38"
              width={160}
              height={60}
              priority
              className="max-h-[48px] w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <a href="#materiel" className="hover:text-orange-600">Matériel</a>
            <a href="#location" className="hover:text-orange-600">Location</a>
            <a href="#vente" className="hover:text-orange-600">Vente</a>
            <a href="#fonctionnement" className="hover:text-orange-600">Comment ça marche</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </div>

          <Link
            href={lokkiUrl}
            target="_blank"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Réserver sur Lokki
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm">
              <ShieldCheck size={17} />
              Location & vente de matériel professionnel
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Louez le bon matériel, au bon moment.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Loc à Toi 38 accompagne les professionnels et particuliers exigeants avec du matériel fiable,
              disponible rapidement, et une réservation simple via Lokki.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={lokkiUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white shadow-xl shadow-orange-500/20 transition hover:bg-orange-600"
              >
                Voir le matériel disponible
                <ArrowRight size={20} />
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-4 font-black text-neutral-950 transition hover:border-neutral-950"
              >
                Demander un conseil
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-bold text-neutral-700 sm:grid-cols-3">
              {["Matériel vérifié", "Réservation via Lokki", "Location flexible"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-500" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            

            <ToolCarousel tools={heroTools} />
          </div>
        </div>
      </section>

      <section id="materiel" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-widest text-orange-600">Nos catégories</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
                Du matériel adapté à vos projets.
              </h2>
            </div>

            <Link
              href={lokkiUrl}
              target="_blank"
              className="inline-flex items-center gap-2 font-black text-orange-600"
            >
              Voir tout sur Lokki
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-[2rem] border border-neutral-200 bg-[#f8f5ef] p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-orange-500">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black">{category.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-700">{category.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="font-black uppercase tracking-widest text-orange-600">Expérience simple</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            La location sans complication.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-700">
            Le site présente l’offre. Lokki gère la réservation, les disponibilités et la demande client.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f5ef] text-orange-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="location" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-widest text-orange-600">Matériel en avant</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Nos packs d'outils en location.
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-neutral-700">
                Voici une selections de nos packs.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <div key={tool.name} className="rounded-[2rem] bg-[#f8f5ef] p-5 shadow-sm">
                <div className="relative flex h-56 items-center justify-center rounded-[1.5rem] bg-white">
                  <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-white">
                    {tool.tag}
                  </span>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="max-h-44 w-auto object-contain drop-shadow-2xl"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Prix et disponibilité à confirmer directement via Lokki.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-black text-orange-600">{tool.price}</span>
                  <Link
                    href={tool.lokkiUrl}
                    target="_blank"
                    className="rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white transition hover:bg-orange-600"
                  >
                    Voir sur Lokki
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vente" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-14">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="font-black uppercase tracking-widest text-orange-400">Vente de matériel</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                Besoin d’acheter plutôt que louer ?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Loc à Toi 38 peut aussi proposer du matériel, des accessoires et des équipements à la vente.
                Une solution utile quand l’usage devient régulier.
              </p>

              <Link
                href="mailto"
                target="_blank"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600"
              >
                Nous contacter
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div>
            <p className="font-black uppercase tracking-widest text-orange-600">Pourquoi Loc à Toi 38</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Une solution locale, claire et efficace.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Éviter l’achat inutile",
                text: "Louez le matériel ponctuellement au lieu d’immobiliser de la trésorerie.",
              },
              {
                title: "Gagner du temps",
                text: "Le client consulte, réserve via Lokki et avance rapidement sur son projet.",
              },
              {
                title: "Rester flexible",
                text: "Location, vente, conseil : l’offre s’adapte au besoin réel.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-[#f8f5ef] p-8">
                <CircleHelp className="mb-6 text-orange-500" size={34} />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-neutral-950 px-6 py-16 text-center text-white shadow-2xl shadow-orange-500/20">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            Consultez les disponibilités et réservez directement via la plateforme Lokki de Loc à Toi 38.
          </p>
          <Link
            href={lokkiUrl}
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600"
          >
            Réserver sur Lokki
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Loc à Toi 38"
              width={150}
              height={60}
              className="max-h-[45px] w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
              Location et vente de matériel professionnel. Réservation externe via Lokki.
            </p>
          </div>

          <div>
            <h3 className="font-black">Navigation</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <a href="#materiel">Matériel</a>
              <a href="#location">Location</a>
              <a href="#vente">Vente</a>
              <Link href="/mentions-legales">Mentions légales</Link>
            </div>
          </div>

          <div>
            <h3 className="font-black">Réservation</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <Link href={lokkiUrl} target="_blank">Réserver sur Lokki</Link>
              <a href="#fonctionnement">Comment ça marche</a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <span>0770800821</span>
              <span>Email à ajouter</span>
              <span>227 Rte de Buchet Plaine, 38660 Sainte-Marie-d’Alloix</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-5 text-xs text-neutral-500">
          © 2026 Loc à Toi 38. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
