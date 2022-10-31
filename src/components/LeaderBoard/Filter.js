import React, { useState } from "react";
import {
  SearchContainer,
  SearchBar,
  SearchBarIcon,
  SearchInput,
  Ranking,
  RankingDesc,
  RankSelector,
  RankOptionsContainer,
  RankOption,
} from "./style";

const Filter = ({
  typeRank,
  RankOptions,
  typeOptions,
  setRankType,
  rankSize,
  setRankSize,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleTypeDropdown, setToggleTypeDropdown] = useState(false);

  return (
    <SearchContainer>
      <SearchBar>
        <SearchBarIcon src="/assets/images/SVG/search.png" />
        <SearchInput type="text" placeholder="Search address" />
      </SearchBar>

      {/* list of ranking types: savers or referals */}
      <Ranking>
        <img src="" alt="" />
        <RankingDesc>Sort Type: </RankingDesc>
        <RankSelector
          onClick={(e) => setToggleTypeDropdown(!toggleTypeDropdown)}
        >
          Top {typeRank}
          <img src="/assets/images/SVG/dropdown.png" alt="" />
          {toggleTypeDropdown && (
            <RankOptionsContainer>
              {typeOptions.map((item, index) => (
                <RankOption
                  onClick={() => setRankType(typeOptions[index].option)}
                  key={item + index}
                >
                  {item.option}
                </RankOption>
              ))}
            </RankOptionsContainer>
          )}
        </RankSelector>
      </Ranking>

      {/* list of limit numbers */}
      <Ranking>
        <img src="" alt="" />
        <RankingDesc>Sort Rank: </RankingDesc>
        <RankSelector onClick={(e) => setToggleDropdown(!toggleDropdown)}>
          Top {rankSize}
          <img src="/assets/images/SVG/dropdown.svg" alt="" />
          {toggleDropdown && (
            <RankOptionsContainer>
              {RankOptions.map((item, index) => (
                <RankOption
                  onClick={() => setRankSize(RankOptions[index].option)}
                  key={item + index}
                >
                  {item.option}
                </RankOption>
              ))}
            </RankOptionsContainer>
          )}
        </RankSelector>
      </Ranking>
    </SearchContainer>
  );
};

export default Filter;
