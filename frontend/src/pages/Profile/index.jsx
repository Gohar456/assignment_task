import { ProfileSection, ProfileContainer } from "../../styles/Profile"

const Profile = () => {
  return (
    <>
      <ProfileSection>
        <ProfileContainer className="container">
          <h1 className="text-white text-center fw-bold">
            Quality Crafted, Innovation Unleashed <br /> Powering the Future!
          </h1>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <h1>Welcome</h1>
            </div>
          </div>
        </ProfileContainer>
      </ProfileSection>
    </>
  )
}

export default Profile
