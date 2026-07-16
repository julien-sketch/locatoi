import type { Metadata } from "next";
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
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";
import { ToolCarousel } from "./tool-carousel";

export const metadata: Metadata = {
  title:
    "Loc à Toi 38 | Location outils Grésivaudan & matériel professionnel Isère",
  description:
    "Loc à Toi 38 propose la location d’outils dans le Grésivaudan, la location d’outils professionnels en Isère et la location d’outils pour particuliers. Réservation simple via Lokki.",
  keywords: [
    "location outils Grésivaudan",
    "location outils professionnels Isère",
    "location outils particulier Grésivaudan",
    "locations outils",
    "Grésivaudan",
    "location matériel professionnel",
    "location outillage Isère",
  ],
  openGraph: {
    title:
      "Loc à Toi 38 | Location outils Grésivaudan & matériel professionnel Isère",
    description:
      "Location et vente de matériel professionnel pour particuliers et professionnels dans le Grésivaudan et en Isère.",
    type: "website",
    locale: "fr_FR",
  },
};

const lokkiUrl = "https://www.lokki.rent/loueur/locatoi-38";
const phone = "0770800821";
const email = "locatoi38@gmail.com";
const address = "227 Rte de Buchet Plaine, 38660 Sainte-Marie-d’Alloix";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=227%20Rte%20de%20Buchet%20Plaine%2038660%20Sainte-Marie-d%27Alloix";

const heroTools = [
  { name: "Meuleuse", image: "/tools/meuleuse.png" },
  { name: "Nettoyeur", image: "/tools/nettoyeur.png" },
  {
    name: "Nettoyeur haute pression",
    image: "/tools/nettoyeur-haute-pression.png",
  },
  { name: "Perforateur", image: "/tools/perforateur.png" },
  { name: "Scie circulaire", image: "/tools/scie.png" },
  { name: "Tronçonneuse", image: "/tools/tronconneuse.png" },
];

const categories = [
  {
    title: "Outillage",
    text: "Location outils Grésivaudan : perceuses, visseuses, meuleuses et perforateurs.",
    icon: Wrench,
  },
  {
    title: "Matériel de chantier",
    text: "Location d’outils professionnels en Isère pour vos travaux et chantiers.",
    icon: Hammer,
  },
  {
    title: "Jardin & extérieur",
    text: "Matériel pour entretien, coupe, nettoyage et aménagement extérieur.",
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
    lokkiUrl:
      "https://www.lokki.rent/loueur/locatoi-38/produit/perfo-burineur-makita-18v-683e0bb2b6da4334ba76af37",
    price: "À partir de 10,00€",
  },
  {
    name: "Meuleuse d’angle 18V Ø125 mm MAKITA",
    image: "/tools/meuleuse.png",
    tag: "Disponible",
    lokkiUrl:
      "https://www.lokki.rent/loueur/locatoi-38/produit/meuleuse-dangle-18v-125-mm-makita-6866a7359057e8e09e7a4e98",
    price: "À partir de 10,00€",
  },
  {
    name: "Nettoyeur haute pression thermique COMET",
    image: "/tools/nettoyeur-haute-pression.png",
    tag: "Pro",
    lokkiUrl:
      "https://www.lokki.rent/loueur/locatoi-38/produit/nettoyeur-haute-pression-thermique-comet-684329f150a7e2e4fcb6b65e",
    price: "À partir de 50,00€",
  },
];

const reviews = [
  {
    name: "Baptiste Z.",
    role: "Travaux & rénovation",
    text: "Gérant sympa, explique bien le fonctionnement du matériel. Je recommande !",
  },
  {
    name: "Julien V.",
    role: "Travaux exterieur",
    text: "J’avais besoin d’un outil nettoyeur haute pression pour le week-end, outil en très bon état et fonctionnement parfait. L'utilisation à été clair",
  },
  {
    name: "Paul E.",
    role: "Chantier ponctuel",
    text: "Je recommande, la location c'est très bien passé, les outils sont de très bonne qualité et les conseils également",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#f8f5ef]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Loc à Toi 38 - location outils Grésivaudan"
              width={160}
              height={60}
              priority
              className="max-h-[42px] w-auto object-contain sm:max-h-[48px]"
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-neutral-700 lg:flex">
            <a href="#materiel" className="hover:text-orange-600">
              Matériel
            </a>
            <a href="#location" className="hover:text-orange-600">
              Location
            </a>
            <a href="#vente" className="hover:text-orange-600">
              Vente
            </a>
            <a href="#fonctionnement" className="hover:text-orange-600">
              Comment ça marche
            </a>
            <a href="#avis" className="hover:text-orange-600">
              Avis
            </a>
            <a href="#contact" className="hover:text-orange-600">
              Contact
            </a>
          </div>

          <Link
            href={lokkiUrl}
            target="_blank"
            className="rounded-full bg-orange-500 px-4 py-3 text-xs font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 sm:px-5 sm:text-sm"
          >
            Réserver
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl md:h-[500px] md:w-[500px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-10 sm:px-5 md:pb-24 md:pt-14 lg:grid-cols-[1fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold text-orange-700 shadow-sm sm:text-sm">
              <ShieldCheck size={17} />
              Location outils Grésivaudan & matériel pro Isère
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl md:text-7xl lg:mx-0">
              La vie se vit, les outils se louent
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-700 sm:text-lg lg:mx-0">
              Loc à Toi 38 propose la location d’outils professionnels au particuliers et professionnels, dans le Grésivaudan.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href={lokkiUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white shadow-xl shadow-orange-500/20 transition hover:bg-orange-600"
              >
                Voir le matériel disponible
                <ArrowRight size={20} />
              </Link>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 font-black text-neutral-950 transition hover:border-neutral-950"
              >
                <Phone size={18} />
                Appeler
              </a>
            </div>

            <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left text-sm font-bold text-neutral-700 sm:grid-cols-3 lg:mx-0">
              {["Matériel vérifié", "Réservation via Lokki", "Location flexible"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="shrink-0 text-orange-500" size={18} />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <ToolCarousel tools={heroTools} />
          </div>
        </div>
      </section>

      <section id="materiel" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-widest text-orange-600">
                Nos catégories
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Location outils, matériel professionnel et équipements dans le
                Grésivaudan.
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-[2rem] border border-neutral-200 bg-[#f8f5ef] p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-7"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-orange-500">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black">{category.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-700">
                    {category.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-5">
          <p className="font-black uppercase tracking-widest text-orange-600">
            Expérience simple
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            La location sans complication.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-700">
            Le site présente l’offre. Lokki gère la réservation, les
            disponibilités et la demande client.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-8">
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

      <section id="location" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div>
            <p className="font-black uppercase tracking-widest text-orange-600">
              Matériel en avant
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Nos outils en location.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-neutral-700">
              Une sélection d’outils professionnels disponibles à la location
              pour particuliers et professionnels du Grésivaudan.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-[2rem] bg-[#f8f5ef] p-5 shadow-sm"
              >
                <div className="relative flex h-52 items-center justify-center rounded-[1.5rem] bg-white sm:h-56">
                  <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-white">
                    {tool.tag}
                  </span>
                  <img
                    src={tool.image}
                    alt={`${tool.name} en location chez Loc à Toi 38`}
                    className="max-h-40 w-auto object-contain drop-shadow-2xl sm:max-h-44"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Prix et disponibilité à confirmer directement via Lokki.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-black text-orange-600">{tool.price}</span>
                  <Link
                    href={tool.lokkiUrl}
                    target="_blank"
                    className="rounded-full bg-orange-500 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-orange-600"
                  >
                    Voir sur Lokki
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vente" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 p-7 text-white sm:rounded-[2.5rem] sm:p-10 md:p-14">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)]">
              <div className="max-w-2xl">
                <p className="font-black uppercase tracking-widest text-orange-400">
                  Vente de matériel
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                  Besoin d’acheter plutôt que louer ?
                </h2>
                <p className="mt-5 text-base leading-8 text-neutral-300 sm:text-lg">
                  Loc à Toi 38 peut aussi proposer du matériel, des accessoires et
                  des équipements à la vente. Une solution utile quand l’usage
                  devient régulier.
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600"
                >
                  Nous contacter
                  <ArrowRight size={20} />
                </a>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="rounded-[1.75rem] border border-white/10 bg-white p-5 text-neutral-950 shadow-2xl shadow-black/30 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-neutral-500">
                    Partenaire
                  </p>
                  <div className="mt-2 text-4xl font-black tracking-tight text-[#00a7a7] sm:text-5xl">
                    MAKITA
                  </div>
                  <p className="mt-2 text-sm font-bold text-neutral-600">
                    Outillage professionnel disponible à la vente.
                  </p>

                  <div className="mt-6 grid grid-cols-2 items-end gap-4 rounded-[1.25rem] bg-neutral-100 p-4">
                    <Image
                      src="/tools/perforateur.png"
                      alt="Perfo-burineur Makita 18V"
                      width={260}
                      height={220}
                      className="h-40 w-full object-contain drop-shadow-xl"
                    />
                    <Image
                      src="/tools/meuleuse.png"
                      alt="Meuleuse d'angle Makita 18V"
                      width={260}
                      height={220}
                      className="h-40 w-full object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div>
            <p className="font-black uppercase tracking-widest text-orange-600">
              Pourquoi Loc à Toi 38
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Une solution locale, claire et efficace.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Éviter l’achat inutile",
                text: "Louez le matériel ponctuellement au lieu d’immobiliser de la trésorerie.",
              },
              {
                title: "Gagner du temps",
                text: "Consultez, réservez via Lokki et avancez rapidement sur votre projet.",
              },
              {
                title: "Rester flexible",
                text: "Location, vente, conseil : l’offre s’adapte au besoin réel.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-[#f8f5ef] p-7 sm:p-8">
                <CircleHelp className="mb-6 text-orange-500" size={34} />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-orange-600">
              Avis clients
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Ils font confiance à Loc à Toi 38.
            </h2>
            
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-8">
                <div className="mb-5 flex gap-1 text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="leading-8 text-neutral-700">“{review.text}”</p>
                <div className="mt-6">
                  <p className="font-black">{review.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">{review.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-5 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-neutral-950 px-6 py-14 text-center text-white shadow-2xl shadow-orange-500/20 sm:rounded-[2.5rem] md:py-16">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            Consultez les disponibilités et réservez directement via la
            plateforme Lokki de Loc à Toi 38.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={lokkiUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600"
            >
              Réserver sur Lokki
              <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-neutral-950 transition hover:bg-neutral-100"
            >
              <Phone size={18} />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white pb-24 pt-12 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-5 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Loc à Toi 38"
              width={150}
              height={60}
              className="max-h-[45px] w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
              Location outils professionnels dans le Grésivaudan et vente de matériel. 
            </p>
          </div>

          <div>
            <h3 className="font-black">Navigation</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <a href="#materiel">Matériel</a>
              <a href="#location">Location</a>
              <a href="#vente">Vente</a>
              <a href="#avis">Avis clients</a>
              <Link href="/mentions-legales">Mentions légales</Link>
            </div>
          </div>

          <div>
            <h3 className="font-black">Réservation</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <Link href={lokkiUrl} target="_blank">
                Réserver sur Lokki
              </Link>
              <a href="#fonctionnement">Comment ça marche</a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <a href={`tel:${phone}`} className="inline-flex gap-2 hover:text-orange-600">
                <Phone size={16} />
                07 70 80 08 21
              </a>
              <a href={`mailto:${email}`} className="inline-flex gap-2 hover:text-orange-600">
                <Mail size={16} />
                {email}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                className="inline-flex gap-2 hover:text-orange-600"
              >
                <MapPin size={16} className="mt-1 shrink-0" />
                {address}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 text-xs text-neutral-500 sm:px-5">
          © 2026 Loc à Toi 38. Tous droits réservés.
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-3 md:hidden">
        <a
          href={`tel:${phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-4 text-sm font-black text-white shadow-xl"
        >
          <Phone size={17} />
          Appeler
        </a>
        <Link
          href={lokkiUrl}
          target="_blank"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-4 text-sm font-black text-white shadow-xl"
        >
          Réserver
        </Link>
      </div>
    </main>
  );
}
