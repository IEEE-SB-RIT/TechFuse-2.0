function SectionHeading({
  text1,
  text2 = "",
}: {
  text1: string;
  text2: string;
}) {
  return (
    <>
      <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6">
        {text1} <span className="text-tf-accent">{text2}</span>
      </h1>
    </>
  );
}

export default SectionHeading;
