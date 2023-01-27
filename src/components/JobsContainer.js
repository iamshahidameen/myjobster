import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import Wrapper from '../assets/wrappers/JobsContainer';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  if (isLoading) {
    console.log(isLoading);
    return (
      <Wrapper>
        <Loading center={true} />
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs Found {':('}</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;