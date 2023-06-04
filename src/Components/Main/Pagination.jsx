import ReactPaginate from 'react-paginate';
import { useMediaQuery } from '@react-hook/media-query';
import { useState } from 'react';

export default function Pagination({ pageCount, handlePageClick }) {
  const isSmallScreen = useMediaQuery('(max-width:480px)');

  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={isSmallScreen ? 1 : 3}
        marginPagesDisplayed={isSmallScreen ? 1 : 2}
        pageCount={pageCount}
        previousLabel={isSmallScreen ? '< prev' : '< previous'}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabled"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
