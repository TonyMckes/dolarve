import { memo } from "react";

function CurrenciesSkeleton() {
  return (
    <div className="self-start table w-full mt-6 rounded-lg table-fixed md:px-4 md:border border-neutral-450 md:col-start-2 md:mx-auto md:mt-0">
      <div className="table-row-group animate-pulse">
        {Array(Math.round(window.innerHeight / 60))
          .fill(null)
          .map((_, i) => (
            <div className="table-row" key={i}>
              <div className="table-cell w-10 text-center align-middle border-y border-neutral-450">
                <span className="inline-block w-6 h-6 mx-auto rounded-full bg-neutral-450 opacity-20"></span>
              </div>
              <div className="table-cell align-middle border-y border-neutral-450">
                <span className="inline-block h-4 mx-4 bg-neutral-450 rounded-3xl opacity-20 w-28"></span>
              </div>
              <div className="table-cell py-1 space-y-1 text-right border-y border-neutral-450">
                <span className="block w-12 h-3 ml-auto mr-0 bg-neutral-450 rounded-3xl opacity-10"></span>
                <span className="block w-16 h-3 ml-auto mr-0 bg-neutral-450 rounded-3xl opacity-20"></span>
                <span className="block w-24 h-3 ml-auto mr-0 bg-neutral-450 rounded-3xl opacity-10"></span>
              </div>
              <div className="table-cell w-5 text-center align-middle border-y border-neutral-450">
                <span className="inline-block w-3 h-3 bg-neutral-450 rounded-3xl opacity-20"></span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default memo(CurrenciesSkeleton);
