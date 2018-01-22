import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// A tabbable modal that initially focuses the element selected by the provided css selector
// 'focusFirst' prop and prevents tabbing from accessing elements outside of the modal.
// closeModal fn is called when the Esc key is pressed
class InteractiveModal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
    focusFirst: PropTypes.string,
  }

  static defaultProps = {
    focusFirst: null,
  }

  componentDidMount = () => {
    const initialFocus = this.modal.querySelector(this.props.focusFirst);
    if (initialFocus) return initialFocus.focus();
    // If no initial focus provided or the provided prop has no match, fallback to last available element (usually a cancel or exit button)
    const focusableElements = [...this.modal.querySelectorAll('a[href], button:not([disabled]), select, input, [tabindex="0"]')];
    return focusableElements[focusableElements.length - 1].focus();
  }

  setRef = (div) => {
    this.modal = div;
  }

  handleKeyDown = (e) => {
    // Don't waste time doing querySelectorAll operation on the DOM if key type isn't Escape or Tab... (possibly a ton of elements to select)
    if (!['Escape', 'Tab'].includes(e.key)) return;

    // Using spread since it's faster than Array.from(), ref: https://jsperf.com/spread-syntax-vs-array-from-with-nodelist
    const focusableElements = [...this.modal.querySelectorAll('a[href], button:not([disabled]), select, input, [tabindex="0"]')];

    // If we're tabbing on the last element, manually force focus on first element in modal
    const handleForwardTab = () => {
      if (document.activeElement === focusableElements[focusableElements.length - 1]) {
        e.preventDefault();
        focusableElements[0].focus();
      }
    };

    // If we're shift-tabbing the first element, manually force focus on last element in modal
    const handleBackwardTab = () => {
      if (document.activeElement === focusableElements[0]) {
        e.preventDefault();
        focusableElements[focusableElements.length - 1].focus();
      }
    };

    switch (e.key) {
      case 'Escape':
        this.props.closeModal();
        break;
      case 'Tab':
        // If we can only select one thing anyway, prevent default behavior
        if (focusableElements.length === 1) {
          e.preventDefault();
          break;
        }
        // Tabbing backwards if shiftkey modifier is active, otherwise forward
        (e.shiftKey) ? handleBackwardTab() : handleForwardTab();
        break;
      default:
        break;
    }
  }

  render = () => (
    <div className="modal is-active" onKeyDown={this.handleKeyDown} ref={this.setRef} tabIndex={0}>
      <div className="modal-background" onClick={this.props.closeModal}></div>
      { this.props.children }
    </div>
  );
}

export default InteractiveModal;
