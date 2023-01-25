import { HiStar } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Testimony() {
  const [author, setAuthor] = useState("");
  const [author2, setAuthor2] = useState("");
  const [author3, setAuthor3] = useState("");
  const [author4, setAuthor4] = useState("");
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://api.quotable.io/random?maxLength=60",
    })
      .then((res) => {
        setAuthor(res.data.author);
        setContent(res.data.content);
      })
      .finally(() => setLoading(false));
    axios({
      method: "GET",
      url: "https://api.quotable.io/random?maxLength=60",
    }).then((res) => {
      setAuthor2(res.data.author);
      setContent2(res.data.content);
    });
    axios({
      method: "GET",
      url: "https://api.quotable.io/random?maxLength=60",
    }).then((res) => {
      setAuthor3(res.data.author);
      setContent3(res.data.content);
    });
    axios({
      method: "GET",
      url: "https://api.quotable.io/random?maxLength=60",
    }).then((res) => {
      setAuthor4(res.data.author);
      setContent4(res.data.content);
    });
  }, []);

  return (
    <section className="w-full  bg-slate-200 p-5 lg:px-20 xl:px-48">
      <div className="container m-auto w-full  flex flex-wrap ">
        <div className="w-full  text-center lg:text-left flex flex-col  lg:self-center gap-5 lg:flex-1">
          <h2 className="font-semibold text-lg uppercase ">meet todolist</h2>
          <h1 className="font-semibold text-4xl w-full text-violet-900">
            Todo solution for your activity
          </h1>
          <p>
            Solution for your next technology or traditional business. todolist
            is a starting foundation to create incredible experience to create
            online task management and helps managing your activity, we also
            performs at the highest level, and accross all devices.
          </p>
          <div className="flex justify-center lg:justify-start text-center">
            <div
              className=" border rounded-xl  hover:shadow-lg  w-1/2
              bg-purple-plum
              hover:opacity-70
              hover:bg-sky-400 
              transition duration-400
              ease-in-out
            border-zinc-300"
            >
              <button className="py-4  font-semibold text-white  ">
                GET STARTED
              </button>
            </div>
          </div>
          <div className=" flex justify-center self-center lg:self-start gap-2 pt-20">
            <HiStar className="text-slate-900 text-2xl bg-yellow-300" />
            <p className="text-[0.9rem]">Rated 4,9/5 form over 485 review</p>
          </div>
        </div>
        <div className="w-full lg:self-center lg:flex-1 py-5 lg:py-0 lg:pl-10 ">
          <div className="container bg-slate-300 p-5 flex flex-col gap-4 lg:w-[500px] lg:p-5 rounded-sm">
            <h1 className=" font-bold">Visitors</h1>
            <div className="relative shadow-lg ">
              <div className="  flex self-center gap-5 bg-purple-200 p-3 rounded-md">
                <div className="w-[100px] h-[100px] bg-gray-100 rounded-md  ">
                  {(
                    <img
                      src="https://i.pravatar.cc/100"
                      alt=""
                      className="w-full h-full rounded-md"
                    />
                  ) || <Skeleton />}
                </div>
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">
                    {author || <Skeleton />}
                  </h1>
                  <p className="text-[1rem]">{content || <Skeleton />}</p>

                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="relative shadow-lg">
              <div className="  flex self-center gap-5 bg-purple-200 p-3 rounded-md">
                <div>
                  {(
                    <img
                      src="https://i.pravatar.cc/99"
                      alt=""
                      className="w-full h-full rounded-md"
                    />
                  ) || <Skeleton />}
                </div>
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">
                    {author2 || <Skeleton />}
                  </h1>
                  <p className="text-[0.9rem]">{content2 || <Skeleton />}</p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="w-full h-full relative shadow-lg xl:-left-16">
              <div className="flex self-center gap-5 bg-purple-200 p-3 rounded-md">
                <div className="w-[100px] h-[100px] bg-gray-100 rounded-md ">
                  {(
                    <img
                      src="https://i.pravatar.cc/103"
                      alt=""
                      className="w-full h-full rounded-md"
                    />
                  ) || <Skeleton />}
                </div>
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">
                    {author3 || <Skeleton />}
                  </h1>
                  <p className="text-[0.9rem]">{content3 || <Skeleton />}</p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="relative shadow-lg">
              <div className="  flex self-center gap-5 bg-purple-200 p-3 rounded-md ">
                <div className="w-[100px] h-[100px] bg-gray-100 rounded-md ">
                  {(
                    <img
                      src="https://i.pravatar.cc/102"
                      alt=""
                      className="w-full h-full rounded-md"
                    />
                  ) || <Skeleton />}
                </div>
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">
                    {author4 || <Skeleton />}
                  </h1>
                  <p className="text-[0.9rem]">{content4 || <Skeleton />} </p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
