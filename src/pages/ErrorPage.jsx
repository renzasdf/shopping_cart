import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <h1>Error Page</h1>
      <Link to='/'>
        <h1>Click here to return!</h1>
      </Link>
    </>
  );
}
