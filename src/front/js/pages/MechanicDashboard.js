import React, { useState, useContext, useEffect } from 'react';
import MechanicAppointmentList from '../component/MechanicAppointmentList';
import UserProfileModal from '../component/UserProfileModal';
import '../../styles/mechanicdashboard.css';
import { Context } from '../store/appContext';

const MechanicDashboard = () => {
  const { store, actions } = useContext(Context);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Mechanic',
    email: 'mechanic@example.com',
    password: '********',
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const roleId = localStorage.getItem("role_id");
    setHasAccess(!!token && roleId === "2");
  }, [store.token]);

  const handleProfileModalOpen = () => {
    setIsProfileModalOpen(true);
  };

  const handleProfileModalClose = (updatedProfile) => {
    if (updatedProfile) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        email: updatedProfile.email
      }));
      setStatusMessage("Profile updated successfully");
    }
    setIsProfileModalOpen(false);
  };

  const saveProfile = async (updatedProfile) => {
    const result = await actions.saveProfile(updatedProfile);
    if (result.success) {
      handleProfileModalClose(updatedProfile);
    } else {
      alert('Error updating profile: ' + result.error.message);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">Mechanic Dashboard</h1>
      {!hasAccess ? (
        <div className="card p-5">
          <div className="card-body mx-auto">
            <h2 className="card-title">You do not have access to this section</h2>
            <p className="card-text mt-3">
              You must log in as a registered mechanic to view the content of this page.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="text-end">
            <button
              className="btn btn-secondary mb-3"
              onClick={handleProfileModalOpen}
            >
              Edit Profile
            </button>
          </div>
          <MechanicAppointmentList />
          {isProfileModalOpen && (
            <UserProfileModal
              user={profile}
              onSave={saveProfile}
              onClose={() => setIsProfileModalOpen(false)}
              error={statusMessage}
              isAdmin={true}
            />
          )}
          {statusMessage && (
            <div className="alert alert-success mt-3">{statusMessage}</div>
          )}
        </>
      )}
    </div>
  );
};

export default MechanicDashboard;
