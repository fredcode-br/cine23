interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];

    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(totalPages, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${
            i === currentPage ? 'bg-cine23-100 ' : 'hover:bg-ligth-300'
          } cursor-pointer inline-block px-3 py-1  border text-white`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <ul className="flex justify-center mt-8">
      {currentPage > 1 && (
        <li
          className="cursor-pointer inline-block text-white  px-3 py-1 border rounded-s hover:bg-ligth-300"
          onClick={() => onPageChange(currentPage - 1)}
        >
          {'<'}
        </li>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <li
          className="cursor-pointer inline-block text-white px-3 py-1 border rounded-e hover:bg-ligth-300"
          onClick={() => onPageChange(currentPage + 1)}
        >
          {'>'}
        </li>
      )}
    </ul>
  );
};

export default Pagination;
