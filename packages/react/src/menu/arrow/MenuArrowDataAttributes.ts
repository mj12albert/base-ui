import { CommonPopupDataAttributes } from '../../utils/popupStateMapping';

export enum MenuArrowDataAttributes {
  /**
   * Present when the menu popup is open.
   */
  open = CommonPopupDataAttributes.open,
  /**
   * Present when the menu popup is closed.
   */
  closed = CommonPopupDataAttributes.closed,
  /**
   * Present when the anchor is hidden.
   */
  anchorHidden = CommonPopupDataAttributes.anchorHidden,
  /**
   * Indicates which side the popup is positioned relative to the trigger.
   * @type {'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
   */
  side = 'data-side',
  /**
   * Indicates how the popup is aligned relative to specified side.
   * @type {'start' | 'center' | 'end'}
   */
  align = 'data-align',
  /**
   * Present when the menu arrow is uncentered.
   */
  uncentered = 'data-uncentered',
}
