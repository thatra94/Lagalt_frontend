import { useKeycloak } from "@react-keycloak/web";

export const Profile = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <h2>profile</h2>
    </div>
  );
};
