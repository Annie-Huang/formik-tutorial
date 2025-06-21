import { Field, Form, Formik, FormikHelpers } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';

type Values = {
  username: string;
  jobType: string;
  acceptedTos: boolean;
};

const onSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  const initialValues: Values = {
    username: 'jared',
    jobType: '',
    acceptedTos: false,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          {/*<input*/}
          {/*  type='text'*/}
          {/*  onChange={props.handleChange}*/}
          {/*  onBlur={props.handleBlur}*/}
          {/*  value={props.values.name}*/}
          {/*  name='name'*/}
          {/*/>*/}
          {/*<Field type='text' name='name' placeholder='Name' />*/}

          <CustomInput
            label='Username'
            name='username'
            type='text'
            placeholder='Enter your username'
          />

          <CustomSelect
            label='Job Type'
            name='jobType'
            placeholder='Please select a job'
          >
            <option value=''>Please select a job type</option>
            <option value='developer'>Developer</option>
            <option value='designer'>Designer</option>
            <option value='manager'>Product Manager</option>
            <option value='other'>Other</option>
          </CustomSelect>

          <CustomCheckbox type='checkbox' name='acceptedTos' />

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
