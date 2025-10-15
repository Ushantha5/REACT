function StudentProfile({ name, email = "unknown", isPresent = false }) {
  return (
    <>
      <div className="profile-container">
        <h4>Name: {name}</h4>
        <h5>Email: {email}</h5>
        <p>Status: {isPresent ? "Present" : "Absent"}</p>
      </div>
    </>
  );
}

export default StudentProfile;




