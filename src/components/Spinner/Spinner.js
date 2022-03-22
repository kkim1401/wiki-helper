import { forwardRef } from 'react';
import { Root } from './styles';

const Spinner = forwardRef((props, ref) => <Root ref={ref} {...props} />);

export default Spinner;
