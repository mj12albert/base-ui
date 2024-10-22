import * as React from 'react';
import { expect } from 'chai';
import {
  // act,
  createRenderer,
  // fireEvent,
  flushMicrotasks,
  // screen,
  // waitFor,
} from '@mui/internal-test-utils';
import { CompositeItem } from '../Item/CompositeItem';
import { CompositeRoot } from './CompositeRoot';

describe('Composite', () => {
  const { render } = createRenderer();

  describe('list', () => {
    it('controlled mode', async () => {
      function App() {
        const [activeIndex, setActiveIndex] = React.useState(0);
        return (
          <CompositeRoot activeIndex={activeIndex} onNavigate={setActiveIndex}>
            <CompositeItem data-testid="1">1</CompositeItem>
            <CompositeItem data-testid="2">2</CompositeItem>
            <CompositeItem data-testid="3">3</CompositeItem>
          </CompositeRoot>
        );
      }

      const { getByTestId, user } = render(<App />);

      const item1 = getByTestId('1');
      const item2 = getByTestId('2');
      // const item3 = getByTestId('3');

      await user.keyboard('[Tab]');
      expect(item1).to.have.attribute('data-active');

      await user.keyboard('[ArrowDown]');

      // fireEvent.keyDown(getByTestId('1'), { key: 'ArrowDown' });
      await flushMicrotasks();

      expect(item2).to.have.attribute('data-active');

      // await waitFor(() => {
      //   expect(getByTestId('2')).to.have.attribute('data-active');
      //   expect(getByTestId('2')).to.have.attribute('tabindex', '0');
      //   expect(getByTestId('2')).toHaveFocus();
      // });
    });
  });
});
