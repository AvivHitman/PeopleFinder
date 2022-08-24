import React from "react";
import * as S from "./style";
import { TextField } from "@material-ui/core";

const Search = ({ onChange, label }) => (
    <S.Search>
      <TextField fullWidth margin="normal" variant="standard" onChange={onChange} label={label} />
    </S.Search>
  );


export default Search;
