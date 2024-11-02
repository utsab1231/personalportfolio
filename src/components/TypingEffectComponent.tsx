import Typewriter from "typewriter-effect";
export default function TypewriterEffect({
  text,
  className,
}: {
  text: string[];
  className?: string;
}) {
  return (
    <>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          strings: text,
          wrapperClassName: className
            ? className
            : "text-primary font-primary font-bold text-3xl md:text-6xl",
        }}
      />
    </>
  );
}
