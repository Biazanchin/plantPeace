
type Variant = {
  imageSrc: string;
  title: string;
  description: string;
};

type StepsProps = {
  variant: string; // Adicionando a propriedade variant
};

export function Steps({ variant }: StepsProps) {
  const variants: Record<string, Variant> = {
    sunlight: {
      imageSrc: '/SunLight.svg',
      title: "SunLight",
      description: "Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs"
    },
    wattering: {
      imageSrc: '/Wattering.svg',
      title: "Wattering",
      description: "water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration."
    },
    NutrientsandFertilizing:{
      imageSrc: '/Nutrients and Fertilizing.svg',
      title: "Nutrients and Fertilizing",
      description: "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula."
    }
  };

  // Verifica se a variante fornecida existe, caso contrário, usa a variante padrão
  const chosenVariant = variants[variant];

  return (
<div className="mt-10 justify-center gap-[24px] flex flex-col md:flex-col w-full items-center lg:mt-0">
  <img src={chosenVariant.imageSrc} alt="" className="w-[72px] h-[72px]" />
  <div className="text-center lg:text-6xl px-5">
    <h2 className="text-black text-lg md:text-[24px] font-bold mb-4">{chosenVariant.title}</h2>
    <p className="text-secondary-secondary text-wrap text-base leading-6">{chosenVariant.description}</p>
  </div>
</div>
  );
}
