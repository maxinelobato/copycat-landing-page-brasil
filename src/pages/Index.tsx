import { useEffect } from "react";
import { WhatsappButton } from "@/components/WhatsappButton";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCounter } from "@/components/StatCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, Phone, Clock, Users, Shield, Headphones } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import lawyerProfessional from "@/assets/lawyer-professional.jpg";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Index = () => {
  useEffect(() => {
    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX';
    document.head.appendChild(gtmScript);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  }, []);

  const services = [
    "Contrato com Prestadores de Serviço",
    "Contrato com Fornecedores", 
    "Acordo entre Sócios",
    "Contrato de Parceria Comercial",
    "Contrato com Representantes ou Distribuidores",
    "Contrato de Locação Comercial",
    "Contrato de Confidencialidade (NDA)",
    "Contrato de Implementação de Software",
    "Contrato de Cessão de Direitos",
    "Elaboração e Revisão de Contratos",
    "Matriz de Risco Contratual",
    "Rescisão Contratual",
    "Gestão de Contratos"
  ];

  const differentials = [
    { icon: <MapPin className="h-6 w-6" />, title: "Fácil acesso e estacionamento" },
    { icon: <Headphones className="h-6 w-6" />, title: "Atendimento online e humanizado" },
    { icon: <Shield className="h-6 w-6" />, title: "Prestação de contas ao cliente" },
    { icon: <MessageCircle className="h-6 w-6" />, title: "WhatsApp de suporte ao cliente" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={lawyerProfessional} 
                alt="Advogada" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">Advogada Disponível</div>
                <div className="text-sm text-muted-foreground">Atendemos todo Brasil 🇧🇷</div>
              </div>
            </div>
            <WhatsappButton className="text-sm px-8 py-3">
              AGENDE SUA CONSULTA<br />AGORA MESMO!
            </WhatsappButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen bg-hero-dark text-hero-foreground relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url(${heroBackground})` }}
      >
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Especialista em Contratos -<br />
              Advogada Contratualista
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Atendemos todo Brasil 🇧🇷
            </h2>
            <p className="text-xl mb-8">
              Precisa de advogada especialista em Contratos?
            </p>
            <WhatsappButton variant="hero" className="mb-12">
              FALE COM UMA ADVOGADA<br />ESPECIALISTA!
            </WhatsappButton>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-md">
              <StatCounter label="Clientes Atendidos" value="+500" />
              <StatCounter label="Avaliações Positivas" value="+98%" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Alguns de nossos serviços</h2>
            <h3 className="text-2xl font-semibold text-muted-foreground">
              Conte com nossa ampla Equipe de Advogados Especialistas
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-8">
            Advocacia nota máxima no Google
          </h3>
          
          <div className="flex justify-center mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-yellow-400 text-3xl">⭐</div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Avaliação 5.0 no Google
            </Badge>
          </div>
        </div>
      </section>

      {/* About Lawyer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src={lawyerProfessional} 
                alt="Dra. Maryanna Pereira" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Dra. Maryanna Pereira</h2>
              <h3 className="text-2xl font-semibold text-muted-foreground mb-6">
                Advogada Especialista em Contratos
              </h3>
              <p className="text-lg mb-4">
                Advogada contratualista com mais de 10 anos de experiência em contratos empresariais.
              </p>
              <p className="text-base mb-4">
                A Dra. Maryanna Pereira é especialista na estruturação, revisão e negociação de contratos que oferecem segurança jurídica e suporte estratégico para empresas em diferentes fases de crescimento.
              </p>
              <p className="text-base mb-4">
                Com atuação focada no Direito Contratual, sua experiência abrange desde contratos com fornecedores, prestadores e parceiros comerciais até acordos entre sócios, confidencialidade, distribuição e cessão de direitos.
              </p>
              <p className="text-base mb-6">
                Reconhecida por sua abordagem prática, clara e estratégica, a Dra. Maryanna desenvolve soluções personalizadas para prevenir conflitos, evitar prejuízos e garantir que os interesses da empresa estejam juridicamente protegidos em cada cláusula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {differentials.map((differential, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {differential.icon}
                  </div>
                  <h3 className="font-semibold">{differential.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em contato</h2>
          <div className="mb-8">
            <WhatsappButton variant="hero" className="text-xl px-12 py-6">
              Clique aqui e resolva<br />seu problema jurídico!
            </WhatsappButton>
          </div>
          
          <div className="mb-8">
            <p className="text-lg mb-4">
              Conte com nossa ampla Equipe de Advogados Especialistas
            </p>
            <p className="text-base text-muted-foreground mb-6">
              Pelo botão abaixo você fala comigo para agendar um horário / consulta no escritório.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📱 WhatsApp</h3>
                <p className="text-muted-foreground">(12) 99706-7961</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📍 Escritório São José dos Campos</h3>
                <p className="text-muted-foreground text-sm">
                  R. República do Iraque, 40 - 610 - Jardim Oswaldo Cruz, 
                  São José dos Campos - SP, 12246-260
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🏢 Escritório São Paulo</h3>
                <p className="text-muted-foreground text-sm">
                  Av. Brigadeiro Faria Lima 1234 - Edifício Conselheiro Paranaguá - 
                  São Paulo, Capital, 01451-913
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open(`https://api.whatsapp.com/send?phone=5512997067961&text=${encodeURIComponent("Oi, vi seu anúncio na internet e preciso de um Advogado Especialista em Contratos Brasil")}`, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-hero-dark text-hero-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Cristiano Pinto Ferreira – Advogado | Feito por <strong>Advogado 10X</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
