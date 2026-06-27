import { useEffect, useState } from "react";
import { Youtube, Users, BookOpen, ArrowUpRight, Crown, Menu, X, Headphones, GraduationCap, Library, Compass } from "lucide-react";

const services = [
  {
    id: "canal",
    title: "Link do Canal",
    desc: "Aulas, devocionais e estudos com cosmovisão cristã. Acompanhe o canal oficial da Kurios no YouTube.",
    cta: "Acessar canal",
    href: "https://www.youtube.com/@kurioscentroeducacional",
    icon: Youtube,
    accent: true,
  },
  {
    id: "grupo",
    title: "Link do Grupo",
    desc: "Comunidade de pais, educadores e estudantes que buscam formação fora das quatro paredes da igreja.",
    cta: "Entrar no grupo",
    href: "#",
    icon: Users,
    accent: false,
  },
  {
    id: "cursos",
    title: "Cursos Gratuitos",
    desc: "Filosofia antiga, história, sociologia e teologia — conteúdo gratuito para home schooling e formação cristã.",
    cta: "Ver cursos",
    href: "#",
    icon: BookOpen,
    accent: false,
  },
];

const partners = [
  {
    name: "Diário 50+",
    handle: "@corpoblindado50",
    href: "https://www.youtube.com/@corpoblindado50",
  },
  {
    name: "Wilson Silva Oficial",
    handle: "@wilsonsilvaoficial76",
    href: "https://www.youtube.com/@wilsonsilvaoficial76",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Parceiros", href: "#parceiros" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased" data-testid="kurios-landing">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/10" : "bg-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2" data-testid="logo-link">
            <img
              src="https://customer-assets.emergentagent.com/job_kurios-landing/artifacts/fj2fqep9_Logo%20Kurios.png"
              alt="Kurios — Centro Educacional"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium hover:text-black/60 transition-colors relative group"
                data-testid={`nav-${n.label.toLowerCase()}`}
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/10" data-testid="mobile-menu">
            <div className="flex flex-col px-6 py-4 gap-3">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-sm font-medium"
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
        data-testid="hero-section"
      >
        {/* Yellow accent shape */}
        <div className="absolute top-24 -right-32 w-[520px] h-[520px] bg-yellow-400 rounded-full opacity-90 pointer-events-none hidden lg:block" />
        <div className="absolute top-10 right-10 w-40 h-40 border-[3px] border-black rounded-full opacity-100 pointer-events-none hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 text-xs tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              Centro Educacional Cristão · desde 2011
            </div>

            <h1
              className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] tracking-tight"
              data-testid="hero-title"
            >
              Bem vindo
              <br />
              à <span className="relative inline-block">
                <span className="relative z-10">Kurios</span>
                <span className="absolute left-0 right-0 bottom-2 lg:bottom-4 h-4 lg:h-6 bg-yellow-400 -z-0" />
              </span>
            </h1>

            <p
              className="mt-8 text-lg lg:text-xl text-black/70 max-w-xl leading-relaxed"
              data-testid="hero-desc"
            >
              <strong className="text-black">Somos uma escola cristã.</strong> Propagamos a cosmovisão
              bíblica fora das quatro paredes da igreja — através de cursos, conteúdo e comunidade
              para famílias, estudantes e educadores.
            </p>

            <div className="mt-10 flex flex-wrap gap-4" data-testid="hero-actions">
              <a
                href="#servicos"
                className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 font-medium hover:bg-yellow-400 hover:text-black transition-all"
                data-testid="hero-cta-primary"
              >
                Conheça nossos cursos
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-3 border-2 border-black text-black px-7 py-4 font-medium hover:bg-black hover:text-white transition-all"
                data-testid="hero-cta-secondary"
              >
                Sobre a Kurios
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-black/10" data-testid="hero-stats">
              <div>
                <div className="font-serif text-3xl font-bold">2011</div>
                <div className="text-xs uppercase tracking-wider text-black/60 mt-1">Fundação</div>
              </div>
              <div className="w-px h-10 bg-black/20" />
              <div>
                <div className="font-serif text-3xl font-bold">+</div>
                <div className="text-xs uppercase tracking-wider text-black/60 mt-1">Cosmovisão Cristã</div>
              </div>
              <div className="w-px h-10 bg-black/20" />
              <div>
                <div className="font-serif text-3xl font-bold">100%</div>
                <div className="text-xs uppercase tracking-wider text-black/60 mt-1">Gratuito</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative" data-testid="hero-illustration">
            <div className="relative aspect-[4/5] bg-yellow-400">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80"
                alt="Alunos estudando a Bíblia"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale contrast-125"
              />
              <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 max-w-[260px]">
                <Crown className="w-7 h-7 text-yellow-400 mb-3" strokeWidth={2.5} />
                <p className="font-serif text-lg leading-snug">
                  &quot;Kýrios&quot; — Jesus é o Senhor.
                </p>
                <p className="text-xs text-white/60 mt-2 uppercase tracking-widest">A origem do nome</p>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-[3px] border-black bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="bg-black text-yellow-400 overflow-hidden py-5 border-y-2 border-yellow-400" data-testid="marquee">
        <div className="flex gap-12 whitespace-nowrap animate-marquee font-serif text-2xl tracking-tight">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Cosmovisão Cristã</span>
              <Crown className="w-5 h-5" />
              <span>Educação</span>
              <Crown className="w-5 h-5" />
              <span>Filosofia</span>
              <Crown className="w-5 h-5" />
              <span>Home Schooling</span>
              <Crown className="w-5 h-5" />
            </span>
          ))}
        </div>
      </div>

      {/* SOBRE */}
      <section id="sobre" className="py-24 lg:py-32 bg-white" data-testid="sobre-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-black/60 mb-4">— Quem somos</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight" data-testid="sobre-title">
              Educação sob a soberania de Cristo
            </h2>
            <p className="mt-6 text-sm text-black/60 leading-relaxed">
              O nome <em>Kurios</em> (do grego <em>kýrios</em>) significa &quot;Senhor&quot;.
              Nossa coroa representa a soberania de Jesus sobre todas as áreas do saber.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg leading-relaxed text-black/80">
              A <strong>Kurios</strong> nasceu em 2011 com o propósito de propagar a cosmovisão bíblica
              fora das quatro paredes da igreja. Acreditamos que a educação é a base para a formação
              da sociedade — e que conhecimento e fé caminham juntos. Não somos vinculados a partidos
              ou ideologias políticas: nosso compromisso é com o Evangelho.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {[
                { t: "Missão", d: "Propagar a cosmovisão cristã através da educação, alcançando lares e famílias pela internet." },
                { t: "Visão", d: "Ser referência em educação cristã para o ensino domiciliar e formação continuada." },
                { t: "Valores", d: "Cosmovisão bíblica, integridade, conhecimento, serviço e comunidade." },
              ].map((v) => (
                <div
                  key={v.t}
                  className="border-l-4 border-yellow-400 pl-5 py-2"
                  data-testid={`valor-${v.t.toLowerCase()}`}
                >
                  <h3 className="font-serif text-xl font-bold mb-2">{v.t}</h3>
                  <p className="text-sm text-black/70 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PÚBLICO/CONTEÚDO */}
      <section className="py-24 lg:py-32 bg-black text-white" data-testid="publico-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-yellow-400 mb-4">— Para quem</div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
                Educação cristã para a era digital
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                Nosso conteúdo serve famílias, estudantes e educadores que buscam uma alternativa
                sólida e bíblica em meio à guerra cultural de ideias.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, t: "Home Schooling", d: "Materiais didáticos do 6º ao 9º ano: história, filosofia e sociologia." },
                { icon: Library, t: "Cursos & E-books", d: "Filosofia antiga, teologia e formação continuada — gratuitos e pagos." },
                { icon: Compass, t: "Cosmovisão Bíblica", d: "Conteúdo livre de ideologias, ancorado na Palavra de Deus." },
                { icon: Headphones, t: "Áudio & Vídeo", d: "Conteúdos no YouTube e em breve em plataformas de áudio." },
              ].map((p) => {
                const Ic = p.icon;
                return (
                  <div key={p.t} className="border border-white/15 p-6 hover:border-yellow-400 hover:bg-white/[0.03] transition-all" data-testid={`publico-${p.t.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Ic className="w-7 h-7 text-yellow-400 mb-4" strokeWidth={2} />
                    <h3 className="font-serif text-xl font-bold mb-2">{p.t}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{p.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 lg:py-32 bg-neutral-50" data-testid="servicos-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-black/60 mb-4">— Serviços</div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight" data-testid="servicos-title">
                Tudo o que você precisa para crescer na fé
              </h2>
            </div>
            <p className="text-black/70 max-w-md text-base">
              Conteúdo, comunidade e cursos pensados para fortalecer sua caminhada cristã.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-testid="servicos-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
          <a
            key={s.id}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`group relative block p-8 lg:p-10 border-2 border-black transition-all duration-300 hover:-translate-y-2 ${
              s.accent
                ? "bg-yellow-400 text-black"
                : "bg-white text-black hover:bg-yellow-400"
            }`}
            data-testid={`servico-card-${s.id}`}
          >
                  <div className="w-14 h-14 bg-black text-yellow-400 flex items-center justify-center mb-8 group-hover:bg-black transition-colors">
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed mb-10">{s.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t-2 border-black">
                    <span className="text-sm font-medium uppercase tracking-wider">{s.cta}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                  <div className="absolute top-6 right-6 font-serif text-sm text-black/40">
                    0{services.indexOf(s) + 1}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section id="parceiros" className="py-24 lg:py-32 bg-white" data-testid="parceiros-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-black/60 mb-4">— Parceiros</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight" data-testid="parceiros-title">
              Caminhamos juntos
            </h2>
            <p className="text-black/70 mt-4">
              Ministérios e canais parceiros que abençoam nossa jornada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="parceiros-grid">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300"
                data-testid={`parceiro-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-black text-yellow-400 flex items-center justify-center font-serif font-bold text-xl group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold leading-tight">{p.name}</h3>
                    <p className="text-xs text-black/50 group-hover:text-white/60 transition-colors mt-1">
                      {p.handle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t-2 border-current">
                  <span className="text-sm font-medium uppercase tracking-wider">Visite o Site</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </a>
            ))}

            {/* Placeholder card for future partners */}
            <div className="border-2 border-dashed border-black/30 p-8 flex flex-col items-center justify-center text-center" data-testid="parceiro-placeholder">
              <div className="w-14 h-14 border-2 border-dashed border-black/40 flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-black/40" />
              </div>
              <p className="font-serif text-lg font-bold text-black/60">Seja parceiro</p>
              <p className="text-xs text-black/50 mt-1">Entre em contato conosco</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-28 bg-black text-white relative overflow-hidden" data-testid="cta-section">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Crown className="w-10 h-10 text-yellow-400 mx-auto mb-6" strokeWidth={2.5} />
          <h2 className="font-serif text-4xl lg:text-6xl font-bold leading-tight">
            Comece sua <span className="text-yellow-400">jornada</span> hoje
          </h2>
          <p className="mt-6 text-white/70 max-w-xl mx-auto">
            Acesse cursos gratuitos, junte-se à comunidade e cresça em conhecimento e fé.
          </p>
          <a
            href="#servicos"
            className="mt-10 inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 font-medium hover:bg-white transition-all"
            data-testid="cta-final-button"
          >
            Ver todos os serviços
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t-2 border-black" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_kurios-landing/artifacts/fj2fqep9_Logo%20Kurios.png"
              alt="Kurios — Centro Educacional"
              className="h-20 w-auto object-contain mb-4"
            />
            <p className="text-sm text-black/60 leading-relaxed max-w-xs">
              Centro Educacional Cristão. Propagando a cosmovisão bíblica desde 2011.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-black/70">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-black hover:underline">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Conecte-se</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Grupo da comunidade</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Cursos gratuitos</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-black/50">
            <span>© {new Date().getFullYear()} Kurios. Todos os direitos reservados.</span>
            <span className="flex items-center gap-2">
              Soli Deo Gloria <Crown className="w-3 h-3 text-yellow-500" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
