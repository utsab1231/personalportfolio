import TypewriterEffect from "../../../components/TypingEffectComponent";

export default function NameAndTitle() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-neutral font-mono">Software Developer</span>
      <span className="text-neutral font-primary font-bold text-3xl md:text-6xl">
        Hello, I'm
      </span>
      <span className="text-secondary font-primary font-bold text-3xl md:text-6xl">
        <TypewriterEffect
          text={["Utsab Adhikari", "उत्सव अधिकारी"]}
          className="text-secondary font-primary font-bold text-3xl md:text-6xl"
        />
      </span>
      <p className="text-neutral text-opacity-65 font-mono">
        I am a software developer with a passion for creating software that
        solves real-world problems. I am currently pursuing a Bachelor's degree
        in Computer Science and Engineering.
      </p>
    </div>
  );
}
