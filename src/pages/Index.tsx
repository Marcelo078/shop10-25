import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Transforme Sua Vida com Produtos Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra soluções comprovadas para fitness, emagrecimento, negócios online e muito mais
          </p>
        </div>
      </header>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Natflix Fitness */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Natflix Fitness</h2>
            <p className="text-lg text-muted-foreground mb-6">Vida em movimento, saúde e atividade física</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Treinos personalizados para todos os níveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Acompanhamento profissional especializado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Resultados visíveis em poucas semanas</span>
              </li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
              <a href="https://go.hotmart.com/X70943392V" target="_blank" rel="nofollow noopener sponsored">
                Comece Sua Transformação
              </a>
            </Button>
          </div>
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <blockquote className="text-center italic text-muted-foreground">
                "Mudei completamente meu estilo de vida e conquistei o corpo dos sonhos!"
                <footer className="mt-2 font-semibold text-foreground">- Maria S.</footer>
              </blockquote>
            </CardContent>
          </Card>
        </section>

        {/* Lovable IA */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="bg-card border border-border md:order-2">
            <CardContent className="p-6">
              <blockquote className="text-center italic text-muted-foreground">
                "Criei meu SaaS em minutos, não em meses!"
                <footer className="mt-2 font-semibold text-foreground">- João P.</footer>
              </blockquote>
            </CardContent>
          </Card>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">Lovable IA</h2>
            <p className="text-lg text-muted-foreground mb-6">Crie seus códigos de SaaS em segundos</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Desenvolvimento 10x mais rápido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">IA avançada para criar aplicações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Interface intuitiva e profissional</span>
              </li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
              <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="nofollow noopener sponsored">
                Criar Meu SaaS Agora
              </a>
            </Button>
          </div>
        </section>

        {/* Hostinger */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Hostinger</h2>
            <p className="text-lg text-muted-foreground mb-6">Hospedagem de sites e domínios profissionais</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">99.9% de uptime garantido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Suporte 24/7 em português</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Domínios grátis inclusos</span>
              </li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
              <a href="https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB" target="_blank" rel="nofollow noopener sponsored">
                Hospedar Meu Site
              </a>
            </Button>
          </div>
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <blockquote className="text-center italic text-muted-foreground">
                "Meu site nunca saiu do ar desde que migrei!"
                <footer className="mt-2 font-semibold text-foreground">- Carlos M.</footer>
              </blockquote>
            </CardContent>
          </Card>
        </section>

        {/* Fórmula Negócio Online */}
        <section className="bg-secondary/50 rounded-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Fórmula Negócio Online</h2>
          <p className="text-xl text-muted-foreground mb-6">Todos Eles Começaram do Zero... Hoje Mudaram de Vida</p>
          <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto">
            O método comprovado de Alex Vargas que já transformou a vida de milhares de pessoas. 
            Aprenda as estratégias exatas para criar seu negócio online lucrativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
              <a href="https://go.hotmart.com/E11195793E" target="_blank" rel="nofollow noopener sponsored">
                Conhecer o Método
              </a>
            </Button>
            <Button asChild variant="secondary" className="font-semibold px-8 py-3">
              <a href="https://go.hotmart.com/E11195793E?ap=305a" target="_blank" rel="nofollow noopener sponsored">
                Ver Histórias de Sucesso
              </a>
            </Button>
          </div>
        </section>

        {/* Weight Loss Products */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* OzenVitta */}
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">OzenVitta</h3>
              <p className="text-muted-foreground mb-4">Fórmula avançada com Inulina e L-Carnitina</p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Acelera o metabolismo naturalmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Aumenta a sensação de saciedade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Mais energia e confiança</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://app.monetizze.com.br/r/AKA25502741" target="_blank" rel="nofollow noopener sponsored">
                  Começar a Emagrecer
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Mounjax */}
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Mounjax</h3>
              <p className="text-muted-foreground mb-4">Gotinhas que auxiliam a queima de gordura</p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Emagrecimento saudável e natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Recupere a alegria de viver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Chega de se esconder</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://app.monetizze.com.br/r/AYR25502743" target="_blank" rel="nofollow noopener sponsored">
                  Queimar Gordura Agora
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Kit S.O.S Crescimento */}
          <Card className="bg-card border border-border md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Kit S.O.S Crescimento</h3>
              <p className="text-muted-foreground mb-4">Kit Nº 1 em crescimento capilar</p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Combate eficaz à queda capilar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Crescimento acelerado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Fórmula mais potente</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://app.monetizze.com.br/r/ACS21486499" target="_blank" rel="nofollow noopener sponsored">
                  Recuperar Meu Cabelo
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Diuriefit Black */}
        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Diuriefit Black</h2>
          <p className="text-xl text-muted-foreground mb-4">Pó emagrecedor 10x mais eficaz com sabor de laranja</p>
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            O DiurieFit Black é diferente de tudo que existe no mercado. 
            O que levaria 30 dias, agora você terá resultados nos primeiros 6 dias de uso.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4">
            <a href="https://app.monetizze.com.br/r/APB25502772" target="_blank" rel="nofollow noopener sponsored">
              Emagrecer em 6 Dias
            </a>
          </Button>
        </section>

        {/* Final CTA */}
        <section className="bg-secondary rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Não Perca Mais Tempo, Sua Transformação Começa Agora!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Milhares de pessoas já mudaram suas vidas com estes produtos. Escolha o seu e comece hoje mesmo!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://go.hotmart.com/X70943392V" target="_blank" rel="nofollow noopener sponsored">
                Natflix Fitness
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://go.hotmart.com/E11195793E" target="_blank" rel="nofollow noopener sponsored">
                Negócio Online
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://app.monetizze.com.br/r/AKA25502741" target="_blank" rel="nofollow noopener sponsored">
                OzenVitta
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://app.monetizze.com.br/r/APB25502772" target="_blank" rel="nofollow noopener sponsored">
                Diuriefit Black
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-muted-foreground">
            © 2024 - Produtos de qualidade para transformar sua vida
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
