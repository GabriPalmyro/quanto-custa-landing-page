import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Apple, Brain, Clock, DollarSign, PiggyBank, Target, TrendingUp } from 'lucide-react'

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  )
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Quanto Custa?',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    description:
      'O app que te ajuda a ter consciência financeira e gastar com inteligência. Saiba para onde vai cada centavo.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '10000',
    },
    downloadUrl:
      'https://apps.apple.com/br/app/quantocusta-economia/id6757590050',
    featureList: 'Renda por hora, Cálculo de tempo de trabalho, Histórico de gastos',
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/apple-icon.png" alt="Quanto Custa Logo" className="w-10 h-10 rounded-2xl shadow-sm" />
            <span className="text-2xl font-black">
              <span className="text-[#00FF55]">Quanto</span>
              <span className="text-[#013327]">Custa?</span>
            </span>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00FF55] to-[#00CC44] text-[#013327] font-bold hover:shadow-lg hover:shadow-[#00FF55]/50 transition-all duration-300"
          >
            <a href="https://apps.apple.com/br/app/quantocusta-economia/id6757590050" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <img src="/apple-icon.png" alt="Logo" className="w-6 h-6 rounded-md" />
              Baixar App
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#00FF55]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-black leading-tight text-[#013327]">
                Economize de <span className="text-[#00FF55]">500 a mil reais</span> por mês usando um app
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                O app que te ajuda a ter consciência financeira e gastar com inteligência.
                Saiba para onde vai cada centavo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00FF55] to-[#00CC44] text-[#013327] font-black text-lg px-10 py-8 hover:scale-105 hover:shadow-2xl hover:shadow-[#00FF55]/60 transition-all duration-300 flex items-center gap-4 group"
                >
                  <a href="https://apps.apple.com/br/app/quantocusta-economia/id6757590050" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-8 h-8 group-hover:scale-110 transition-transform fill-black text-black" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-bold uppercase tracking-wide">Baixar na</span>
                      <span className="text-xl font-black">App Store</span>
                    </div>
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-200 text-gray-500 font-bold text-lg px-10 py-8 cursor-not-allowed flex items-center gap-4 group"
                  disabled
                >
                  <GooglePlayIcon className="w-8 h-8 opacity-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold uppercase tracking-wide">Em breve no</span>
                    <span className="text-xl font-black">Google Play</span>
                  </div>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FF55] to-[#00CC44] border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">+10k usuários</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-[#00FF55] text-xl">★</span>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF55]/20 to-[#00CC44]/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Iphone%20%282%29-WPgq5fddiQhQsElb7Gc3tuOsWw2ogl.webp"
                alt="App QuantoCusta mostrando economias de R$1.000"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block">
            <img src="/apple-icon.png" alt="Quanto Custa Logo" className="w-20 h-20 rounded-3xl mx-auto mb-6 shadow-lg shadow-[#00FF55]/50" />
          </div>
          <h2 className="text-5xl font-black text-[#013327]">
            Você sabe quanto custa a sua hora?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Muitas vezes gastamos sem perceber o impacto real no nosso trabalho.
            O <span className="font-bold text-[#00FF55]">Quanto Custa?</span> traduz
            seus gastos em tempo de vida. Entenda quanto você precisa trabalhar para
            pagar cada compra e tome decisões mais conscientes.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#013327] mb-16">
            Por que escolher o Quanto Custa?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-3xl w-full h-full flex items-center justify-center">
                  <Brain className="w-10 h-10 text-[#013327]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#013327] mb-4 text-center">
                Gaste com Inteligência
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Tome decisões financeiras baseadas em dados reais sobre sua renda
                e entenda o custo real em horas de trabalho.
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-3xl w-full h-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-[#013327]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#013327] mb-4 text-center">
                Controle Total
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Visualize para onde seu dinheiro está indo com gráficos claros
                e relatórios detalhados em tempo real.
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-3xl w-full h-full flex items-center justify-center">
                  <PiggyBank className="w-10 h-10 text-[#013327]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#013327] mb-4 text-center">
                Potencialize seus Ganhos
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Descubra onde economizar para fazer seu dinheiro render mais
                e alcançar seus objetivos financeiros.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#013327] mb-16">
            Como funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-full flex items-center justify-center text-[#013327] font-black text-2xl">
                1
              </div>
              <Clock className="w-12 h-12 mx-auto text-[#00FF55]" />
              <h3 className="text-xl font-bold text-[#013327]">
                Informe sua renda
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Digite quanto você ganha por hora ou por mês.
                O app calcula automaticamente.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-full flex items-center justify-center text-[#013327] font-black text-2xl">
                2
              </div>
              <DollarSign className="w-12 h-12 mx-auto text-[#00FF55]" />
              <h3 className="text-xl font-bold text-[#013327]">
                Registre seus gastos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Adicione cada compra e veja em tempo real
                quanto tempo de trabalho ela representa.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00FF55] to-[#00CC44] rounded-full flex items-center justify-center text-[#013327] font-black text-2xl">
                3
              </div>
              <TrendingUp className="w-12 h-12 mx-auto text-[#00FF55]" />
              <h3 className="text-xl font-bold text-[#013327]">
                Tome decisões melhores
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Analise seus padrões de consumo e
                faça escolhas financeiras mais inteligentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#00FF55] to-[#00CC44] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 text-6xl font-black text-[#013327]">35%</div>
          <div className="absolute top-20 right-20 text-4xl font-black text-[#013327]">$$$</div>
          <div className="absolute bottom-10 left-1/3 text-5xl font-black text-[#013327]">+50%</div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-[#013327] mb-2">+10k</div>
              <div className="text-lg text-[#013327]/80 font-semibold">Usuários ativos</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#013327] mb-2">35%</div>
              <div className="text-lg text-[#013327]/80 font-semibold">Média de economia</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#013327] mb-2">4.9★</div>
              <div className="text-lg text-[#013327]/80 font-semibold">Avaliação na App Store</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#013327] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#00FF55] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00CC44] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Pronto para controlar seu dinheiro?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já transformaram sua relação
            com o dinheiro. Baixe agora gratuitamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#013327] font-black text-lg px-10 py-8 hover:scale-105 hover:shadow-2xl hover:bg-[#00FF55] transition-all duration-300 flex items-center gap-4 group border-2 border-[#00FF55]"
            >
              <a href="https://apps.apple.com/br/app/quantocusta-economia/id6757590050" target="_blank" rel="noopener noreferrer">
                <Apple className="w-8 h-8 group-hover:scale-110 transition-transform fill-black text-black" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold uppercase tracking-wide">Baixar na</span>
                  <span className="text-xl font-black">App Store</span>
                </div>
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gray-200 text-gray-500 font-bold text-lg px-10 py-8 cursor-not-allowed flex items-center gap-4 group border-2 border-gray-200"
              disabled
            >
              <GooglePlayIcon className="w-8 h-8 opacity-50" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wide">Em breve no</span>
                <span className="text-xl font-black">Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/apple-icon.png" alt="Quanto Custa Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-black">
                <span className="text-[#00FF55]">Quanto</span>
                <span className="text-[#013327]">Custa?</span>
              </span>
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-[#00FF55] transition-colors">Sobre</a>
              <a href="#" className="hover:text-[#00FF55] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#00FF55] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#00FF55] transition-colors">Contato</a>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 QuantoCusta. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
