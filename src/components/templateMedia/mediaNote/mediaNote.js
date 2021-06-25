import React from "react";
import * as Style from "../mediaText/styled";

const MediaNote = ({data}) => (
  <>
    <Style.SpanText>{data.desc}</Style.SpanText>
  </>
);

export default MediaNote;