export default function Customer() {
  return (
    <div className="lg:py-24 px-5 sm:px-20 md:px-32 lg:px-28 md:py-16 xl:px-48 bg-slate-200 w-full  flex justify-center">
      <div className=" container flex flex-wrap justify-center w-full  gap-7 lg:py-10 rounded-xl">
        <div className="top-content flex flex-wrap justify-center text-center">
          <div className="lg:w-1/2 lg:text-left  pb-7">
            <h1 className="font-normal text-xl pb-4 ">
              We make your activity easier
            </h1>
            <h2 className="font-semibold text-3xl w-full text-violet-900">
              Find the experience using todolist
            </h2>
          </div>
          <div className="lg:w-1/2 lg:text-left ">
            <p>
              Go beyond checking off daily task on your todolist. make it simple
              to keep everything daily task, so you can focus getting things
              done
            </p>
          </div>
        </div>
        <div className="card-content w-3/4 sm:w-1/2 md:w-full flex-wrap flex self-center justify-center xl:justify-between gap-3">
          <div className="card md:w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/220/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card md:w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/220/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card md:w-72 bg-base-100 shadow-xl sm:w-full">
            <figure>
              <img src="https://placeimg.com/400/220/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
