'use client';
import * as React from 'react';
import { CompositeRoot } from '../../../../packages/mui-base/src/Composite/Root/CompositeRoot';
import { CompositeItem } from '../../../../packages/mui-base/src/Composite/Item/CompositeItem';

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <React.Fragment>
      <CompositeRoot
        activeIndex={activeIndex}
        onNavigate={setActiveIndex}
        className="root"
      >
        <CompositeItem data-testid="1" className="item">
          1
        </CompositeItem>
        <CompositeItem data-testid="2" className="item">
          2
        </CompositeItem>
        <CompositeItem data-testid="3" className="item">
          3
        </CompositeItem>
      </CompositeRoot>
      <style>
        {`
          .item:focus,
          .item:focus-visible {
            background-color: blue;
            color: white;
          }
        `}
      </style>
    </React.Fragment>
  );
}
