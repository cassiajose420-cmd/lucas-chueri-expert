/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Camera, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  Clock,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXPERT = {
  name: "Lucas Chueri",
  profession: "Ensaios Fotográficos Exclusivos",
  experience: "Há mais de 13 anos eternizando histórias",
  address: "Rua Rafael Vita 660, Centro, Itaporanga, SP",
  whatsapp: "https://api.whatsapp.com/send/?phone=5515997522402&text=Olá Lucas, vi sua página e gostaria de solicitar um orçamento para um ensaio.&type=phone_number&app_absent=0&utm_source=ig",
  instagram: "https://www.instagram.com/lucaschuerifotografia?igsh=MXdna3Z4b3R1N2ZjcQ%3D%3D",
  heroImage: "https://i.imgur.com/9m0v91s.png",
  expertImage: "https://i.imgur.com/V9raz2y.png",
  gallery: [
    "https://i.imgur.com/VhyQilv.jpeg",
    "https://i.imgur.com/lKREYyT.jpeg",
    "https://i.imgur.com/jVwWhPP.jpeg",
    "https://i.imgur.com/WB9TduA.jpeg",
    "https://i.imgur.com/gvWCPTU.jpeg",
    "https://i.imgur.com/lrR6Wvc.jpeg",
    "https://i.imgur.com/jLfQ9S2.jpeg",
    "https://i.imgur.com/pMtXKjT.jpeg",
    "https://i.imgur.com/6EVF6Yl.jpeg",
    "https://i.imgur.com/ynlnJyt.jpeg"
  ]
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-end overflow-hidden bg-premium-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT.heroImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-xl px-6 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-white uppercase bg-gold/20 border border-gold/30 rounded-full">
              {EXPERT.profession}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Eu sou <span className="text-gold italic">{EXPERT.name}</span>, e minha missão é tornar sua história eterna.
            </h1>
            <p className="text-lg text-gray-300 mb-8 font-light">
              {EXPERT.experience}. Ensaios exclusivos que capturam a essência de quem você é.
            </p>

            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full py-5 px-8 bg-green-600 text-white font-bold rounded-2xl transition-all hover:bg-green-500 cta-shadow active:scale-95"
            >
              <MessageCircle className="mr-2 h-6 w-6 animate-pulse" />
              SOLICITAR ORÇAMENTO NO WHATSAPP
            </a>
            <p className="mt-3 text-xs text-gray-400 font-medium tracking-wide">
              RESPOSTA RÁPIDA • SEM COMPROMISSO
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full -z-10"></div>
                <img 
                  src={EXPERT.expertImage} 
                  alt={EXPERT.name} 
                  className="w-full rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-premium-black/5 rounded-3xl -z-10"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif leading-tight">
                Muito além de fotos, <br/>
                <span className="italic">eu registro legados.</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Olá, sou o Lucas. Acredito que cada pessoa carrega uma história única que merece ser contada com arte e sensibilidade.
                </p>
                <p>
                  Ao longo desses 13 anos, desenvolvi um olhar que busca o espontâneo, o verdadeiro e o inesquecível. Não faço apenas "cliques", eu crio uma experiência onde você se sente à vontade para ser você mesmo.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Atendimento 100% personalizado",
                  "Direção de poses natural e leve",
                  "Equipamentos de última geração",
                  "Entrega ágil e curadoria artística"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <CheckCircle2 className="text-gold mr-2 h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Momentos Reais</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Uma seleção de histórias que tive a honra de eternizar recentemente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {EXPERT.gallery.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bg-gray-100"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-xs text-gray-400 italic">
          Clientes reais, momentos reais — todos atendidos com cuidado do início ao fim.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-20 px-6 bg-premium-black text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Por que confiar no meu olhar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8 text-gold" />,
                title: "13+ Anos de Estrada",
                desc: "Mais de uma década dedicada exclusivamente à arte da fotografia."
              },
              {
                icon: <Users className="h-8 w-8 text-gold" />,
                title: "Foco na Sua Essência",
                desc: "Nada de poses robóticas. O foco é a sua verdade e espontaneidade."
              },
              {
                icon: <Clock className="h-8 w-8 text-gold" />,
                title: "Entrega Pontual",
                desc: "Respeito total ao seu tempo com prazos de entrega rigorosos."
              },
              {
                icon: <Camera className="h-8 w-8 text-gold" />,
                title: "Equipamento Premium",
                desc: "O que há de melhor em tecnologia para garantir nitidez e cores perfeitas."
              }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-serif mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl font-serif">Pronto para transformar seu momento em arte?</h2>
          <p className="text-gray-600">
            O atendimento inicial é totalmente gratuito e serve para entendermos exatamente o que você busca.
          </p>
          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-4 px-8 bg-green-600 text-white font-bold rounded-xl transition-all hover:bg-green-500 shadow-lg active:scale-95"
          >
            <ChevronRight className="mr-2 h-5 w-5" />
            VEJA COMO FUNCIONA
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Sua jornada em 3 passos</h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Contato via WhatsApp",
                desc: "Você clica no botão e me conta um pouco sobre o que deseja. É rápido e direto."
              },
              {
                step: "02",
                title: "Agendamento e Briefing",
                desc: "Escolhemos a melhor data e definimos o estilo do ensaio, local e referências."
              },
              {
                step: "03",
                title: "Planeje seu Ensaio",
                desc: "Com tudo pronto, é só relaxar e aproveitar o momento enquanto eu cuido de toda a arte."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-serif text-gold/30 font-bold">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gold/5 border border-gold/20 rounded-2xl text-center">
            <p className="text-sm font-medium text-gold-700">
              "Atendimento inicial gratuito e sem compromisso."
            </p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-serif">Bastidores e Cuidado</h2>
          <p className="text-gray-500">O que acontece por trás de cada clique.</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 no-scrollbar">
          {[
            { img: EXPERT.gallery[0], label: "Atendimento personalizado" },
            { img: EXPERT.gallery[2], label: "Direção artística" },
            { img: EXPERT.gallery[4], label: "Edição minuciosa" },
            { img: EXPERT.gallery[6], label: "Entrega de álbuns" }
          ].map((item, i) => (
            <div key={i} className="min-w-[280px] relative group">
              <img 
                src={item.img} 
                alt="Bastidores" 
                className="w-full aspect-square object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 glass rounded-xl">
                <p className="text-xs font-bold uppercase tracking-wider">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-premium-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-4xl font-serif mb-6 leading-tight">
            Não deixe seus melhores momentos se perderem no tempo.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Garanta agora sua data e tenha fotos que você terá orgulho de mostrar para as próximas gerações.
          </p>
          
          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full py-6 px-8 bg-green-600 text-white font-bold rounded-2xl transition-all hover:bg-green-500 cta-shadow active:scale-95 text-lg"
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            SOLICITAR ORÇAMENTO AGORA
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-6 opacity-50">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs">Resposta em minutos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="font-serif text-2xl tracking-tighter">
            {EXPERT.name} <span className="text-gold">.</span>
          </div>
          <div className="space-y-1 text-sm text-gray-500">
            <p className="font-bold text-gray-900">{EXPERT.profession}</p>
            <p className="flex items-center justify-center gap-1">
              <MapPin className="h-3 w-3" /> {EXPERT.address}
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-pink-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={EXPERT.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-green-600 transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-[10px] text-gray-300 uppercase tracking-widest pt-8">
            © {new Date().getFullYear()} {EXPERT.name} • Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-premium-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp for Mobile */}
      <a 
        href={EXPERT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-600 text-white rounded-full shadow-2xl animate-float md:hidden"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
