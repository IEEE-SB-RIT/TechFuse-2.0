function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="font-sans text-2xl text-tf-accent font-semibold max-w-[300px] border-b-2 border-white/70 pb-1 mb-2">
      {title}
    </h3>
  );
}

export default SubHeading;
