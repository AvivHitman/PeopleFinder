import * as S from "./style";
import { COUNTRIES } from "../../constant";
import CheckBox from "../CheckBox";
import React from "react";

const CountriesCheckBox = ({countriesToFilter, onChange}) => {
  console.log(countriesToFilter)
  return (
    <S.Filters>
      {COUNTRIES.map(({ nationality, country, index }) => {
        const isChecked = countriesToFilter.includes(nationality);
        return <CheckBox key={index} value={nationality} label={country} checked={isChecked}
                         onChange={() => onChange(nationality, isChecked)} />;
      })}
    </S.Filters>
  );
};

export default CountriesCheckBox;
