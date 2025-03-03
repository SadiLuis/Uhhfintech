"use client";
import { cn } from "@/lib/utils";
import { AnimatedList } from "../components/magicui/animated-list";

const benefits = [
  {
    icon: "🛡️",
    title: "Seguridad Avanzada",
    description: "Protegemos tus datos con encriptación de nivel bancario y autenticación biométrica.",
    color: "#1E40AF",
  },
  {
    icon: "⚡",
    title: "Transacciones Rápidas",
    description: "Realiza pagos y transferencias en segundos sin esperas innecesarias.",
    color: "#FACC15",
  },
  {
    icon: "📱",
    title: "Accesible Desde Cualquier Lugar",
    description: "Administra tus finanzas desde cualquier dispositivo móvil o computadora.",
    color: "#10B981",
  },
  {
    icon: "📊",
    title: "Análisis en Tiempo Real",
    description: "Obtén informes detallados y estadísticas de tus movimientos financieros.",
    color: "#9333EA",
  },
];

const metrics = [
  { label: "Usuarios Activos", value: "+500K" },
  { label: "Transacciones Diarias", value: "+1M" },
  { label: "Puntuación de Seguridad", value: "99.9%" },
];

const BenefitItem = ({ icon, title, description, color }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{title}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

const Benefits = ({ className }) => {
  return (
    <section className={cn("relative flex h-screen w-full flex-col overflow-hidden p-2", className)}>
      <h2 className="text-4xl font-bold  text-gray-900 dark:text-white text-center">
        Beneficios de Nuestra Plataforma
      </h2>
      <p className="m-4 py-6 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
        Descubre por qué miles de usuarios confían en nuestra solución financiera.
      </p>
      <AnimatedList>
        {benefits.map((benefit, index) => (
          <BenefitItem {...benefit} key={index} />
        ))}
      </AnimatedList>
      <div className="mt-16 flex justify-center gap-12">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</span>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
