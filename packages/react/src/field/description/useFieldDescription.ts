'use client';
import * as React from 'react';
import { mergeProps } from '../../merge-props';
import { useBaseUiId } from '../../utils/useBaseUiId';
import { useModernLayoutEffect } from '../../utils/useModernLayoutEffect';
import { useFieldRootContext } from '../root/FieldRootContext';

export function useFieldDescription(params: useFieldDescription.Parameters) {
  const { id: idProp } = params;

  const { setMessageIds } = useFieldRootContext();

  const id = useBaseUiId(idProp);

  useModernLayoutEffect(() => {
    if (!id) {
      return undefined;
    }

    setMessageIds((v) => v.concat(id));

    return () => {
      setMessageIds((v) => v.filter((item) => item !== id));
    };
  }, [id, setMessageIds]);

  const getDescriptionProps = React.useCallback(
    (externalProps = {}) =>
      mergeProps<'span'>(
        {
          id,
        },
        externalProps,
      ),
    [id],
  );

  return React.useMemo(
    () => ({
      getDescriptionProps,
    }),
    [getDescriptionProps],
  );
}

export namespace useFieldDescription {
  export interface Parameters {
    id: string | undefined;
  }
}
