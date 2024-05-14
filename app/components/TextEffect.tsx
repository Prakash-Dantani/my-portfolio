import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1500,
        "Backend Developer",
        1500,
        "Front-end Developer",
        1500,
        "MERN Developer",
        1500,
      ]}
      //   wrapper="span"
      speed={50}
      //   style={{ fontSize: "2em", display: "inline-block" }}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};
export default TextEffect;
