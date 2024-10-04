import { Bars3Icon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Misión", href: "#mission" },
  { name: "Programas", href: "#programs" },
  { name: "Testimonios", href: "#testimonials" },
];

const programs = [
  {
    name: "Alfabetización Digital",
    description: "Cursos básicos de informática para todas las edades.",
    icon: "💻",
  },
  {
    name: "Programación para Jóvenes",
    description: "Talleres de coding para adolescentes y jóvenes adultos.",
    icon: "👩‍💻",
  },
  {
    name: "Tecnología para Emprendedores",
    description: "Asesoría en herramientas digitales para pequeños negocios.",
    icon: "🚀",
  },
  {
    name: "Inclusión Digital",
    description: "Programas adaptados para personas con discapacidades.",
    icon: "♿",
  },
];

const testimonials = [
  {
    name: "María González",
    role: "Estudiante",
    quote:
      '"Gracias a los cursos de CRECER CON FUTURO, ahora puedo usar la computadora con confianza. ¡Ha cambiado mi vida!"',
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Juan Pérez",
    role: "Emprendedor",
    quote:
      '"El programa de Tecnología para Emprendedores me ayudó a llevar mi negocio al siguiente nivel. Estoy muy agradecido."',
    image: "/placeholder.svg?height=96&width=96",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CRECER CON FUTURO</span>
              <img
                className="h-14 w-auto"
                src="./logo-slogan-transp.png"
                alt="Logo de CRECER CON FUTURO"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              // onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Donar <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  CRECER CON FUTURO
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Empoderando a las personas a través de la tecnología para
                  construir un futuro mejor.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Únete a nosotros
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Conoce más <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="overflow-hidden bg-white py-24 sm:py-32" id="mission">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Nuestra Misión
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Transformando vidas a través de la tecnología
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    En CRECER CON FUTURO, creemos que la tecnología tiene el
                    poder de transformar vidas y comunidades. Nuestra misión es
                    proporcionar acceso a la educación tecnológica y recursos
                    digitales a personas de todas las edades y orígenes,
                    permitiéndoles desarrollar habilidades esenciales para el
                    siglo XXI.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {[
                      {
                        name: "Educación Inclusiva",
                        description:
                          "Ofrecemos programas adaptados a diferentes niveles de conocimiento y necesidades específicas.",
                      },
                      {
                        name: "Innovación Continua",
                        description:
                          "Nos mantenemos actualizados con las últimas tendencias tecnológicas para ofrecer una formación relevante.",
                      },
                      {
                        name: "Impacto Social",
                        description:
                          "Trabajamos para reducir la brecha digital y fomentar la igualdad de oportunidades en el mundo digital.",
                      },
                    ].map((item) => (
                      <div key={item.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <CheckIcon
                            className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {item.name}
                        </dt>{" "}
                        <dd className="inline">{item.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="/large.jpg "
                alt="Imagen representativa de nuestra misión"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={980}
              />
            </div>
          </div>
        </div>

        {/* Programs section */}
        <div className="bg-white py-24 sm:py-32" id="programs">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Nuestros Programas
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Soluciones tecnológicas para cada necesidad
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ofrecemos una variedad de programas diseñados para satisfacer
                las diversas necesidades de nuestra comunidad. Desde cursos
                básicos hasta formación avanzada, estamos comprometidos con el
                crecimiento tecnológico de todos.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {programs.map((program) => (
                  <div key={program.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                        <span className="text-2xl text-white">
                          {program.icon}
                        </span>
                      </div>
                      {program.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{program.description}</p>
                      <p className="mt-6">
                        <a
                          href="#"
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          Más información <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="bg-white py-24 sm:py-32" id="testimonials">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Testimonios
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Historias de éxito de nuestra comunidad
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="pt-8 sm:inline-block sm:w-full sm:px-4"
                  >
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                      <blockquote className="text-gray-900">
                        <p>{testimonial.quote}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.image}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Únete a nuestra misión.
                  <br />
                  Construyamos juntos un futuro digital.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Tu apoyo nos permite seguir ofreciendo programas de calidad y
                  llegar a más personas. Juntos, podemos crear un mundo donde la
                  tecnología sea una herramienta de empoderamiento para todos.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Donar ahora
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Ser voluntario <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="/unete.jpg"
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {[
              { name: "Facebook", href: "#" },
              { name: "Instagram", href: "#" },
              { name: "Twitter", href: "#" },
              { name: "YouTube", href: "#" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                {/* You can add social media icons here */}
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} CRECER CON FUTURO. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
