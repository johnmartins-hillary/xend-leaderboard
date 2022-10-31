import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import { Table, TableHead, TH } from "./style";
import Tablebody from "./Tablebody";
import { getTopReferalls, getTopSavers } from "../apiCalls";

function RankTable({ type, number, setNumber, rankSize }) {
  const tableScroll = useRef();
  const [result, setResult] = useState([]);
  const ranksPerPage = 15;

  const scrollToTop = () => {
    tableScroll.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  // creating Pagination
  const lastRank = number * ranksPerPage;
  const firstRank = lastRank - ranksPerPage;
  const currentRank = result?.slice(firstRank, lastRank);
  const PageCount = Math.ceil(result?.length / ranksPerPage);
  const ChangePage = ({ selected }) => {
    setNumber(selected + 1);
  };

  useEffect(() => {
    setResult([]);
    const getResult = async (type) => {
      if (type === "referalls") {
        const res = await getTopReferalls("2022-4", rankSize);
        if (res?.data) setResult(res?.data?.record);
        else setResult([]);
      } else if (type === "savers") {
        const res = await getTopSavers("2022-4", "", "", "", rankSize);
        if (res?.data) setResult(res?.data?.record);
        else setResult([]);
      } else {
        setResult([]);
      }
    };
    getResult(type);
  }, [type, number, rankSize]);

  return (
    <>
      {type === "referalls" ? (
        <Table ref={tableScroll}>
          <TableHead>
            <TH>Rank</TH>
            {/* <TH>UserID</TH> */}
            <TH>UserName</TH>
            <TH>Points</TH>
          </TableHead>
          <Tablebody
            currentRank={currentRank}
            type={type}
            currentPage={number}
            ranksPerPage={ranksPerPage}
          />
        </Table>
      ) : (
        <Table ref={tableScroll}>
          <TableHead>
            <TH>Rank</TH>
            {/* <TH>UserId</TH> */}
            <TH>Total</TH>
            <TH>Currency</TH>
            <TH>UserName</TH>
          </TableHead>
          <Tablebody
            currentRank={currentRank}
            type={type}
            currentPage={number}
            ranksPerPage={ranksPerPage}
          />
        </Table>
      )}
      <ReactPaginate
        previousLabel={"< "}
        nextLabel={" >"}
        pageCount={PageCount}
        onPageChange={ChangePage}
        containerClassName={"paginationBttns"}
        activeClassName={"paginationActive"}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        onClick={scrollToTop}
      ></ReactPaginate>
    </>
  );
}

export default RankTable;
