import { useState } from 'react';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <form className="form">
        <h3>profile</h3>
        <div className="form-center">
          <FormRow type="text" name="name" />
          <FormRow type="text" labelText="last name" name="lastName" />
          <FormRow type="email" name="email" />
          <FormRow type="text" name="location" />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
