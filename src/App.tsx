/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, ChevronRight, Home, Volume2, Play, Phone, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      {/* Feedback Tab (Side) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <button className="bg-white border border-gray-300 shadow-md py-3 px-1 rounded-l-md text-[#007BC7] text-sm font-medium writing-vertical-rl rotate-180 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
          Uw mening
        </button>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 h-[70px]">
        <div className="max-w-[980px] lg:max-w-[1160px] mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#00376E]">Dienst Domeinbescherming</span>
          </div>

          {/* Search (Inloggen removed) */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 text-[#00376E] hover:underline cursor-pointer">
              <Search className="w-6 h-6" />
              <span className="text-lg">Zoek</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="bg-white py-3">
        <div className="max-w-[980px] lg:max-w-[1160px] mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Home className="w-4 h-4 text-[#00376E]" />
            <a href="#" className="text-[#00376E] hover:underline decoration-1 underline-offset-2">Home</a>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-gray-900">Domeinbescherming</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#E6F2FD] py-8 md:py-10">
        <div className="max-w-[980px] lg:max-w-[1160px] mx-auto px-4">
          <div className="border-l-[5px] border-[#00376E] pl-6">
            <h1 className="text-[32px] md:text-[38px] font-bold text-[#00376E] leading-tight mb-4">
              Domeinbescherming
            </h1>
            
            {/* Read Aloud Button */}
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded-[4px] text-sm font-medium text-gray-700 hover:bg-gray-50 mb-6 cursor-pointer shadow-sm">
              <Volume2 className="w-4 h-4" />
              Lees voor
              <div className="border-l border-gray-300 pl-2 ml-1">
                <Play className="w-3 h-3 fill-current" />
              </div>
            </button>

            <p className="text-lg md:text-[19px] text-[#00376E] max-w-4xl leading-relaxed">
              De dienst Domeinbescherming is er voor bedrijven die hun merknaam willen veiligstellen tegen cybersquatting. Wij claimen strategische domeinextensies zodat concurrenten of kwaadwillenden geen misbruik kunnen maken van uw identiteit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[980px] lg:max-w-[1160px] mx-auto px-4 py-10">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-8">
            
            {/* Direct naar */}
            <div className="mb-10">
              <h2 className="text-[22px] font-semibold text-[#333333] mb-4">Direct naar</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2 group">
                    <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-lg">Bescherming aanvragen (€297/jaar)</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2 group">
                    <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-lg">Beschikbaarheid controleren</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Risico's en gevolgen */}
            <div className="mb-10">
              <h2 className="text-[22px] font-semibold text-[#333333] mb-4">Risico's en gevolgen</h2>
              <p className="text-base leading-7 mb-4">
                Als u geen gebruik maakt van preventieve domeinbescherming, loopt uw organisatie risico's. Derden kunnen domeinextensies zoals .net, .be of .com registreren met uw bedrijfsnaam.
              </p>
              <p className="text-base leading-7 mb-4">
                De consequenties hiervan zijn:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-base">
                <li>Verlies van bezoekers en omzet aan concurrenten.</li>
                <li>Schade aan uw reputatie door frauduleuze websites.</li>
                <li>Hoge juridische kosten voor terugvordering.</li>
              </ul>
              
              <div className="bg-[#E6F2FD] p-4 border-l-4 border-[#007BC7]">
                <p className="text-[#00376E] font-medium">
                  Let op: Het terugkopen van een gekaapt domein kost gemiddeld €2.500.
                </p>
              </div>
            </div>

            {/* Tarieven */}
            <div className="mb-10">
              <h2 className="text-[22px] font-semibold text-[#333333] mb-4">Tarieven</h2>
              <p className="text-base leading-7 mb-4">
                De kosten voor het Domeinbescherming Pakket bedragen <strong>€297,00</strong> per jaar (exclusief btw).
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Wat krijgt u hiervoor?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#007BC7] shrink-0 mt-0.5" />
                  <span>Registratie van .net, .com, .eu en .be</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#007BC7] shrink-0 mt-0.5" />
                  <span>Technische doorverwijzing naar uw site</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#007BC7] shrink-0 mt-0.5" />
                  <span>Juridisch eigendomscertificaat</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="md:col-span-4 space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-[22px] font-semibold text-[#333333] mb-4">Contact</h2>
              <p className="mb-4 text-base">Heeft u vragen over deze dienst?</p>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+31643441206" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2">
                    <Phone className="w-5 h-5 shrink-0" />
                    <span>+31 6 43441206</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@portomedia.nl" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2">
                    <Mail className="w-5 h-5 shrink-0" />
                    <span>info@portomedia.nl</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-semibold text-[#333333]">Portomedia.nl</p>
                <p>Lijnbaanstraat 7</p>
                <p>KvK: 99880725</p>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div>
              <h2 className="text-[22px] font-semibold text-[#333333] mb-4">Veelgestelde vragen</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2 text-base">
                    <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" />
                    Hoe snel zijn mijn domeinen actief?
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2 text-base">
                    <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" />
                    Kan ik later extra extensies toevoegen?
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-start gap-2 text-[#007BC7] hover:underline decoration-1 underline-offset-2 text-base">
                    <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" />
                    Hoe zeg ik mijn abonnement op?
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F3F3F3] border-t border-gray-300 mt-12 py-8">
        <div className="max-w-[980px] lg:max-w-[1160px] mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-[#333333] mb-4">Over Portomedia.nl</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Organisatie</a></li>
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Pers</a></li>
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Vacatures</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#333333] mb-4">Service & Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Klantenservice</a></li>
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Klachtenregeling</a></li>
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Beveiliging</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#333333] mb-4">Juridisch</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Privacyverklaring</a></li>
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Algemene voorwaarden</a></li>
                <li><a href="#" className="text-[#007BC7] hover:underline decoration-1 underline-offset-2">Proclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#333333] mb-4">Bedrijfsgegevens</h4>
              <p className="text-gray-600 mb-1">Portomedia.nl</p>
              <p className="text-gray-600 mb-1">Lijnbaanstraat 7</p>
              <p className="text-gray-600 mb-2">KvK: 99880725</p>
              <p className="text-gray-600">+31 6 43441206</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-6 text-xs text-gray-600">
            &copy; 2024 Portomedia.nl - Onderdeel van Digitale Infrastructuur Nederland
          </div>
        </div>
      </footer>
    </div>
  );
}
