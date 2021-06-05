import React from 'react';

import * as Style from './styled'

const MediaText = ({textData}) => (
  <Style.SpanText
    dangerouslySetInnerHTML={{
      __html: textData
    }}
  />
);

export default MediaText;