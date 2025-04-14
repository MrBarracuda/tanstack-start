import { createFormHook } from '@tanstack/react-form';

import {
  Select,
  SubscribeButton,
  TextArea,
  TextField,
} from '../components/demo-form-components.tsx';
import { fieldContext, formContext } from './demo.form-context';

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    Select,
    TextArea,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
});
