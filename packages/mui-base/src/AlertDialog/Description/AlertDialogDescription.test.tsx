import * as React from 'react';
import { AlertDialog } from '@base_ui/react/AlertDialog';
import { createRenderer, describeConformance } from '#test-utils';

describe('<AlertDialog.Description />', () => {
  const { render } = createRenderer();

  describeConformance(<AlertDialog.Description />, () => ({
    refInstanceof: window.HTMLParagraphElement,
    render: (node) => {
      return render(
        <AlertDialog.Root open animated={false}>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>{node}</AlertDialog.Popup>
        </AlertDialog.Root>,
      );
    },
  }));
});
