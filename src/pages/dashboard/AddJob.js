import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice';
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleJobInput = (e) => {};

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow type="text" name="position" />
          {/* company */}
          <FormRow type="text" name="company" />
          {/* jobLocation */}
          <FormRow type="text" name="jobLocation" labelText="job location" />
          {/* status */}
          <FormRowSelect name="status" />
          {/* job type*/}
          <FormRowSelect name="jobType" labelText="job type" />
          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn">
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
