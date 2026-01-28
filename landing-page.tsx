"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Users, Zap, MessageCircle, Star, Calendar, User, Brain } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "558694647720"; // 55 + 86 + 94647720
    const message = encodeURIComponent(" Quero saber mais sobre o Programa de acompanhamento com a Dra Ângela !");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F1DA] via-white to-[#F0F1DA]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#999C82] to-[#827C73] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Método Científico Comprovado
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  O que trava seu emagrecimento não é falta de esforço.
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                  É um corpo inflamado, desregulado e sobrecarregado, e ninguém nunca te mostrou isso com um olhar
                  médico de verdade.
                </p>
                <p className="text-lg md:text-xl text-white font-medium">
                  O <strong>Endo Life Master</strong> é um método clínico que investiga a fundo o que impede seu corpo
                  de emagrecer e traça um plano para ele voltar a responder.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#827C73] hover:bg-[#F0F1DA] text-lg px-8 py-4 h-auto font-semibold"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quero saber mais
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#827C73] text-lg px-8 py-4 h-auto font-semibold"
                >
                  Ver depoimentos
                </Button> */}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="aspect-[3/4] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/images/dra-angela.jpg"
                    alt="Dra. Ângela Maria Leal - Médica Endocrinologista"
                    width={400}
                    height={500}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Dra. Ângela Maria Leal</h3>
                  <p className="text-gray-200 font-medium">Médica Endocrinologista</p>
                  <p className="text-gray-300 text-sm">RQE 3286</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#F9F9F3]">
      <div className="container mx-auto px-4">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#827C73] mb-4">
      Histórias de transformação
    </h2>
    <p className="text-lg text-[#6B6B6B]">
      Resultados reais de pessoas que decidiram cuidar de si com leveza, propósito e acompanhamento.
    </p>
  </div>

  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={24}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
  >
    {[
      { video: "/videos/v1.mp4" },
      { video: "/videos/v2.mp4" },
      { video: "/videos/v3.mp4" },
      { video: "/videos/v4.mp4" },
    ].map((pessoa, idx) => (
      <SwiperSlide key={idx}>
        <div className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
          <video
            controls
            className="w-full h-83 object-cover"
           /*  poster="/images/thumb.jpg" // se quiser uma imagem antes do vídeo iniciar */
          >
            <source src={pessoa.video} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <div className="p-4 text-center text-[#827C73] bg-[#F0F1DA]">
         
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

</section>

      {/* Diferenciais Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#827C73] mb-4">
              Por que o Endo Life Master é diferente?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F0F1DA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-[#827C73]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#827C73] text-center">Acompanhamento Individualizado</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    No Endo Life Master, você não recebe um protocolo pronto, você recebe um plano criado para o seu
                    corpo, sua história e sua realidade.
                  </p>
                  <p>
                    Com base em uma avaliação médica profunda, a Dra. Ângela desenha um planejamento estratégico de
                    emagrecimento, feito sob medida.
                  </p>
                  <p>
                    Você será acompanhada de perto para investigar o que está travando o seu corpo, desde os hormônios
                    até o estilo de vida e, finalmente, fazer seu metabolismo responder de verdade.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F0F1DA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-[#827C73]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#827C73] text-center">Base Científica Sólida</h3>
                <div className="space-y-4 text-gray-600">
                  <p>Se o seu corpo não responde, não é falta de esforço, é falta de um olhar clínico e estratégico.</p>
                  <p>
                    Aqui, cada decisão é baseada em endocrinologia e medicina do estilo de vida, para tratar as causas
                    invisíveis que impedem seu emagrecimento.
                  </p>
                  <p>Nada de modismos. Nada de achismos. Apenas ciência aplicada à sua realidade.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F0F1DA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-[#827C73]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#827C73] text-center">Foco Comportamental</h3>
                <div className="space-y-4 text-gray-600">
                  <p>Não basta emagrecer. Você precisa conseguir manter.</p>
                  <p>
                    Aqui, você aprende a construir uma rotina leve, realista e duradoura, sem culpa, sem restrições
                    extremas e sem voltar à estaca zero.
                  </p>
                  <p>Chega de efeito sanfona. Chega de recomeçar.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Endo Life Mulher Plena Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#F0F1DA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#A47FB5] text-white rounded-full px-6 py-2 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                Programa Premium
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#827C73] mb-4">Endo Life Mulher Plena</h2>
              <p className="text-xl text-gray-600 mb-2">
                Para mulheres que já cuidaram de todos e agora decidem cuidar de si.
              </p>
              <p className="text-lg text-gray-600">
                Um acompanhamento médico completo, por 6 meses, para guiar sua transformação com leveza, ciência e
                propósito.
              </p>
            </div>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#A47FB5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#827C73] text-lg">8 consultas com a Dra. Ângela Maria</p>
                        <p className="text-gray-600">(podendo ser na modalidade presencial/online)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#999C82] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#827C73] text-lg">Planejamento médico individualizado</p>
                        <p className="text-gray-600">de emagrecimento</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#A47FB5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#827C73] text-lg">Gestão do estilo de vida</p>
                        <p className="text-gray-600">sono, estresse, rotina e equilíbrio hormonal</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#999C82] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#827C73] text-lg">Ajustes personalizados</p>
                        <p className="text-gray-600">ao longo da jornada</p>
                      </div>
                    </div>

                    {/*<div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#A47FB5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-white" />
                      </div>*/
                    }  { /*  <div>
                        <p className="font-bold text-[#827C73] text-lg">Sessão estratégica</p>
                        <p className="text-gray-600">com nutricionista online</p>
                      </div> 
                    </div>
*/}
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#999C82] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#827C73] text-lg">Experiência de bem-estar</p>
                        <p className="text-gray-600">uma aula de yoga online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
   

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#827C73] to-[#999C82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Você já tentou muito por conta própria.</h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Agora é hora de ver seu corpo emagrecer de forma definitiva, com ciência, estratégia e um acompanhamento
              que finalmente entende tudo o que você já enfrentou.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#827C73] hover:bg-[#F0F1DA] text-xl px-12 py-6 h-auto font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Quero Começar Agora
              </Button>
            </div>

            <p className="text-gray-200 text-sm max-w-2xl mx-auto">
              Clique no botão acima e receba mais detalhes sobre o Endo Life, o programa que transforma, de maneira
              definitiva, sua relação com o corpo e com você mesma.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Dra. Ângela Maria Leal - Endo Life Master. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
