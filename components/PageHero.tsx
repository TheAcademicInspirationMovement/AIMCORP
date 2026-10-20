import Image from "next/image";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  lede?: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ title, eyebrow, lede, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[42vh] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-5 py-16 text-white">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-2 max-w-3xl text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
