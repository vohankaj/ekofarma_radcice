import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { ShoppingBasket, Heart, Leaf, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import uvodImg from './assets/uvod.jpg';
import onasImg from './assets/onas.jpg';
import hoveziImg from './assets/hovezi.jpg';
import pastvaImg from './assets/pastva.jpg';
import cenikImg from './assets/cenik.jpg';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-farm-leaf/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-farm-forest">
      <div className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2">
        <Leaf className="text-farm-emerald" size={28} />
        Ekofarma Radčice
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest">
        <a href="#home" className="hover:text-farm-emerald transition-colors">Úvod</a>
        <a href="#about" className="hover:text-farm-emerald transition-colors">O nás</a>
        <a href="#products" className="hover:text-farm-emerald transition-colors">Produkty</a>
        <a href="#contact" className="hover:text-farm-emerald transition-colors">Kontakt</a>
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://www.facebook.com/profile.php?id=100088804026849" target="_blank" rel="noreferrer" className="text-farm-forest hover:text-farm-emerald hidden sm:block">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/ekofarma_radcice/" target="_blank" rel="noreferrer" className="text-farm-forest hover:text-farm-emerald">
          <Instagram size={20} />
        </a>
        <button className="md:hidden">
          <ShoppingBasket size={24} />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={uvodImg} 
        alt="Panoráma Jizerských hor - Ekofarma Radčice" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-farm-forest/30 backdrop-brightness-90" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block text-white text-lg uppercase tracking-[0.4em] mb-6 drop-shadow-md"
      >
        Čistá příroda • Lokální původ • Bio kvalita
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl md:text-9xl text-white font-serif leading-[1.1] mb-10 drop-shadow-xl"
      >
        Klid a čistota <br /> Jizerských hor
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col md:flex-row gap-6 justify-center"
      >
        <a 
          href="#products" 
          className="bg-farm-emerald text-white px-10 py-5 rounded-full font-semibold hover:bg-farm-forest transition-all shadow-lg hover:shadow-farm-emerald/20"
        >
          Naše bioprodukty
        </a>
        <a 
          href="#about" 
          className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-semibold hover:bg-white/20 transition-all"
        >
          Poznejte naši farmu
        </a>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
      <div className="w-px h-12 bg-white/30 mx-auto" />
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-white bg-texture">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
      <div className="text-center group">
        <div className="w-20 h-20 bg-farm-leaf/20 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
          <Leaf className="text-farm-emerald" size={36} />
        </div>
        <h3 className="text-3xl font-serif mb-4">Přírodní přístup</h3>
        <p className="text-farm-forest/70 leading-relaxed font-light">Hospodaříme bez umělých hnojiv a pesticidů. Klíčem je pro nás biodiverzita a zdravá půda.</p>
      </div>
      <div className="text-center group">
        <div className="w-20 h-20 bg-farm-leaf/20 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:-rotate-6 transition-transform">
          <Heart className="text-farm-emerald" size={36} />
        </div>
        <h3 className="text-3xl font-serif mb-4">Welfare zvířat</h3>
        <p className="text-farm-forest/70 leading-relaxed font-light">Naše krávy tráví většinu roku na pastvinách v podhůří, s volným pohybem a přirozenou stravou.</p>
      </div>
      <div className="text-center group">
        <div className="w-20 h-20 bg-farm-leaf/20 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
          <ShoppingBasket className="text-farm-emerald" size={36} />
        </div>
        <h3 className="text-3xl font-serif mb-4">Z dvoru přímo k vám</h3>
        <p className="text-farm-forest/70 leading-relaxed font-light">Prodej přímo z farmy zaručuje maximální čerstvost a férovou cenu pro vás.</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-farm-cream overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
      <div className="flex-1 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <img 
            src={onasImg} 
            alt="Stádo na pastvině - Ekofarma Radčice" 
            className="rounded-br-[100px] rounded-tl-[100px] shadow-3xl hover:brightness-110 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-farm-leaf/20 rounded-full blur-3xl -z-1" />
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-farm-emerald/10 rounded-full blur-3xl -z-1" />
      </div>
      <div className="flex-1 text-left">
        <span className="text-farm-emerald text-sm uppercase tracking-[0.2em] font-bold mb-6 block">Kdo jsme</span>
        <h2 className="text-5xl md:text-6xl font-serif text-farm-forest mb-8 leading-tight">Rodinná tradice <br />v srdci přírody</h2>
        <p className="text-xl text-farm-forest/80 leading-relaxed mb-8 font-light italic">
          "Půda není náš majetek, je to dar, o který musíme pečovat pro další generace."
        </p>
        <p className="text-lg text-farm-forest/70 leading-relaxed mb-10 font-light">
          V Ekofarmě Radčice věříme v návrat k osvědčeným postupům. Naše pastviny v Jizerských horách poskytují domov šťastným zvířatům a zázemí pro pěstování bioproduktů, které mají svou skutečnou chuť.
        </p>
        <div className="grid grid-cols-2 gap-12 py-8 border-t border-farm-leaf/30">
          <div>
            <div className="text-4xl font-serif text-farm-emerald">100%</div>
            <div className="text-xs uppercase tracking-[0.2em] text-farm-forest/50 mt-2 font-bold">Ekologické</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-farm-emerald">Bio</div>
            <div className="text-xs uppercase tracking-[0.2em] text-farm-forest/50 mt-2 font-bold">Certifikace</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => {
  const products = [
    { 
      title: 'Hovězí z pastvin', 
      desc: 'Premiové vyzrálé maso z našeho skotu, který vyrůstá v naprosté volnosti na horských loukách.', 
      img: hoveziImg 
    },
    { 
      title: 'Pastevní odchov', 
      desc: 'Základem kvality našeho masa je přirozený život zvířat venku na čerstvém vzduchu po většinu roku.', 
      img: pastvaImg 
    }
  ];

  return (
    <section id="products" className="py-32 bg-white text-farm-forest">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <span className="text-farm-emerald text-sm uppercase tracking-[0.3em] font-bold mb-6 block">Naše nabídka</span>
        <h2 className="text-5xl md:text-6xl font-serif">Poctivé bio maso</h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center gap-12">
        {products.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15 }}
            className="group w-full md:w-1/2 max-w-lg"
          >
            <div className="relative h-[500px] rounded-[40px] overflow-hidden mb-8 shadow-2xl">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-farm-forest/90 via-farm-forest/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-4xl font-serif text-white mb-4">{p.title}</h3>
                <p className="text-white/80 font-light text-lg leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <a
          href={cenikImg}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-farm-emerald text-farm-emerald px-12 py-4 rounded-full font-bold hover:bg-farm-emerald hover:text-white transition-all uppercase tracking-widest text-sm"
        >
          Kompletní nabídka
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  const [state, handleSubmit] = useForm('mnjwdkbr');

  return (
    <section id="contact" className="py-32 bg-farm-forest text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-farm-emerald/10 skew-x-12 transform translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 relative z-10">
        <div>
          <span className="text-farm-leaf text-sm uppercase tracking-[0.3em] font-bold mb-6 block">Kontaktujte nás</span>
          <h2 className="text-6xl font-serif text-white mb-10 leading-tight">Pojeďte za námi <br /> na venkov</h2>
          <p className="text-xl text-white/70 mb-16 font-light leading-relaxed max-w-md">
            Najdete nás v malebné části Liberec-Radčice. Přijeďte se podívat, jak hospodaříme v drsné ale krásné přírodě na úpatí Jizerských hor.
          </p>
          
          <div className="space-y-10">
            <div className="flex gap-8 items-center">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="text-farm-leaf" size={28} />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-white">Raspenavská 42</h4>
                <p className="text-white/50 font-light uppercase tracking-widest text-xs mt-1">460 31 Liberec 32</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="text-farm-leaf" size={28} />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-white">+420 703 694 058</h4>
                <p className="text-white/50 font-light uppercase tracking-widest text-xs mt-1">Volejte nám</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="text-farm-leaf" size={28} />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-white">ekofarmaradcice@seznam.cz</h4>
                <p className="text-white/50 font-light uppercase tracking-widest text-xs mt-1">Napište nám e-mail</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=100088804026849" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-farm-forest transition-all border border-white/10">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/ekofarma_radcice/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-farm-forest transition-all border border-white/10">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="bg-white p-12 md:p-16 rounded-[60px] shadow-2xl text-farm-forest">
          <h3 className="text-4xl font-serif mb-10 text-center">Napište nám</h3>
          {state.succeeded ? (
            <p className="text-center text-farm-emerald font-semibold text-lg">Poptávka byla odeslána. Děkujeme!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-farm-forest/40 font-bold ml-1">Vaše Jméno</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-farm-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-farm-emerald transition-all placeholder:text-farm-forest/20"
                  placeholder="Jan Novák"
                />
                <ValidationError field="name" errors={state.errors} />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-farm-forest/40 font-bold ml-1">E-mailová adresa</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-farm-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-farm-emerald transition-all placeholder:text-farm-forest/20"
                  placeholder="jan@priklad.cz"
                />
                <ValidationError field="email" errors={state.errors} />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-farm-forest/40 font-bold ml-1">Vaše zpráva</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-farm-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-farm-emerald transition-all placeholder:text-farm-forest/20"
                  placeholder="O co máte zájem?"
                />
                <ValidationError field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-farm-emerald text-white py-6 rounded-2xl font-bold hover:bg-farm-forest transition-all uppercase tracking-[0.2em] text-sm shadow-xl shadow-farm-emerald/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Odesílám…' : 'Odeslat poptávku'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
const Footer = () => (
  <footer className="bg-white border-t border-farm-leaf/10 py-24 text-farm-forest">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-3xl font-serif font-bold flex items-center gap-2">
        <Leaf className="text-farm-emerald" size={32} />
        Ekofarma Radčice
      </div>
      <div className="flex gap-12 text-sm uppercase tracking-widest font-bold">
        <a href="#about" className="hover:text-farm-emerald transition-colors">O farmě</a>
        <a href="#products" className="hover:text-farm-emerald transition-colors">Nabídka</a>
        <a href="#contact" className="hover:text-farm-emerald transition-colors">Kontakt</a>
      </div>
      <div className="text-farm-forest/40 text-sm font-medium tracking-widest">
        © {new Date().getFullYear()} Ekofarma Radčice. Všechna práva vyhrazena.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
