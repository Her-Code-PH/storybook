export const mapUserData = (user: any) => {
  const { uid, email, xa, displayName, photoUrl } = user
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photoUrl
  }
}
