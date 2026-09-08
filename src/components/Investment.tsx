import Reveal from "./Reveal";

export default function Investment() {
  return (
    <section className="py-[88px] lg:py-[120px] bg-gradient-to-b from-white to-[#F3F1EA]">
      <Reveal className="max-w-[760px] mx-auto px-5 md:px-10 text-center">
        <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
          Land Investment
        </p>
        <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
          A Place Today.
          <br />
          A Possibility Tomorrow.
        </h2>
        <p className="text-muted text-base leading-[1.75] mx-auto">
          Owning land is a tangible decision — a location chosen with
          purpose, held for what it can become. Whether it&apos;s a home being
          planned for the years ahead or space set aside for future needs,
          the right plot is the beginning of a longer story.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3 mt-8"
        >
          Talk to a Property Advisor
        </a>
      </Reveal>
    </section>
  );
}
