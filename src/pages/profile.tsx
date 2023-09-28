import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const { domain } = useParams();
  const navigate = useNavigate();

  if (!domain) {
    navigate("/404");
  }

  return (
    <div className="Profile">
      <p>SeePASS</p>
      {domain && <p>{domain}</p>}
    </div>
  );
}
