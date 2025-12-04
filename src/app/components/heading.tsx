function Heading({ text }: { text: string }) {
  return (
    <h1 className="font-sans lg:text-3xl text-xl text-center text-tf-accent font-semibold lg:max-w-[180px] max-w-[100px] mx-auto border-b-2 border-white/70 pb-1 mb-4">
      {text}
    </h1>
  );
}

export default Heading;
