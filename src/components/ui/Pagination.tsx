"use client";

import SButton from "./SButton";

type PaginationProps = {
  total: number;
  page: number;
  setPage: (page: number) => void;
};
const Pagination = ({ total, page, setPage }: PaginationProps) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < total) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex gap-12 items-center justify-center mt-6">
      <SButton
        disabled={page === 1}
        className={` bg-white text-sm text-black font-light hover:bg-lPurple hover:text-white `}
        text="prev"
        onClick={() => handlePrev()}
      />
      <div>
        {Array.from({ length: total }, (_, index) => {
          const currentPage = index + 1;

          return (
            <SButton
              onClick={() => setPage(currentPage)}
              key={currentPage}
              text={`${currentPage}`}
              className={`${
                currentPage === page
                  ? "bg-lSky"
                  : " bg-white text-sm text-black font-light"
              } hover:bg-lPurple hover:text-white`}
            />
          );
        })}
      </div>
      <SButton
        className={` bg-white text-sm text-black font-light hover:bg-lPurple hover:text-white `}
        onClick={() => handleNext()}
        text="next"
        disabled={total === page}
      />
    </div>
  );
};

export default Pagination;
