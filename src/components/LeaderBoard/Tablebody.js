import React from "react";
import OthersImg from "./OthersImg";
import { TableBody, TableData, TableRow } from "./style";

const Tablebody = ({ currentRank, type, currentPage, ranksPerPage }) => {
  return (
    <TableBody>
      {currentRank &&
        currentRank?.map((item, index) => (
          <TableRow key={item + index} currentPage={currentPage}>
            <TableData>
              <span className="index">
                {(currentPage - 1) * ranksPerPage + (index + 1)}
              </span>
              <img src="/assets/images/SVG/rectangle.svg" alt="rect" />
              {index === 0 && currentPage === 1 ? (
                <img src="/assets/images/SVG/goldcup.png" alt="gold-cup" />
              ) : index === 1 && currentPage === 1 ? (
                <img src="/assets/images/SVG/silvercup.png" alt="silver-cup" />
              ) : index === 2 && currentPage === 1 ? (
                <img src="/assets/images/SVG/bronzecup.png" alt="bronze-cup" />
              ) : (
                <OthersImg />
              )}
            </TableData>
            {/* <TableData>
                *****dfgw34sa3
                <img src="/assets/images/SVG/copy.svg" alt="copy" />{" "}
              </TableData> */}
            {type === "referalls" ? (
              <>
                {/* <TableData>{item?._id?.userIdOwner}</TableData> */}
                <TableData>{item?.user}</TableData>
                <TableData>{item?.referrals}</TableData>
              </>
            ) : (
              <>
                {/* <TableData>{item?._id.userId}</TableData> */}
                <TableData>{item?.total}</TableData>
                <TableData>{item?.currency?.name}</TableData>
                <TableData>{item?.user}</TableData>
              </>
            )}
          </TableRow>
        ))}
    </TableBody>
  );
};

export default Tablebody;
