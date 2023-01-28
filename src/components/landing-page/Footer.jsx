import whatsapp from "./../../assets/sosial-media/whatsapp-white.svg";
import instagram from "./../../assets/sosial-media/instagram.svg";
import linkedin from "./../../assets/sosial-media/linkedin.svg";
import email from "./../../assets/sosial-media/gmail_old.svg";
import github from "./../../assets/sosial-media/github.svg";

const Footer = () => {
  return (
    <footer className=" items-center mx-auto">
      <div className="text-center  min-h-full pt-20">
        <div className="flex flex-col gap-5 pb-20">
          <h1 className="text-5xl">Hello there!</h1>
          <p className="text-md">
            i hope everything going very well, i am very pleased to share
            todolist with you, hope you enjoy it{" "}
          </p>
        </div>
        <p className="text-xs">We'd love to hear from you !</p>
        <div className=" w-full flex justify-center gap-2 py-2">
          <div className="cursor-pointer">
            <img
              onClick={() =>
                window.open("https://www.instagram.com/Adanpradanaa/")
              }
              src={instagram}
              alt=""
              className="w-7 h-7 bg-slate-400 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 rounded-md"
            />
          </div>
          <div className="cursor-pointer">
            <img
              onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=081999984880")
              }
              src={whatsapp}
              alt=""
              className="w-7 h-7 bg-slate-400 hover:bg-[#25D366] p-1 rounded-md"
            />
          </div>
          <div className="cursor-pointer">
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/adan-pradana-31a7041a1/"
                )
              }
              src={linkedin}
              alt=""
              className="w-7 h-7 bg-slate-400 hover:bg-[#0077b5] p-1 rounded-md"
            />
          </div>
          <div className="cursor-pointer">
            <img
              onClick={() => window.open("mailto:adanrizkahariz@gmail.com")}
              src={email}
              alt=""
              className="w-7 h-7 bg-slate-400 hover:bg-white p-1 rounded-md"
            />
          </div>
          <div className="cursor-pointer">
            <img
              onClick={() => window.open("https://github.com/Adanpradana")}
              src={github}
              alt=""
              className="w-7 h-7 bg-slate-400 hover:bg-[#171515] p-1 rounded-md"
            />
          </div>
        </div>
        <div className="py-4">
          <p className="text-xs text-slate-400">
            &#169; Copyright <span className="font-semibold">Adan Pradana</span>{" "}
            2022-2023.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
