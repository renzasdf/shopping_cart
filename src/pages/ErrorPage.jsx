import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1>Page not found!</h1>
        <Link to='/'>
          <h1>Click here to return!</h1>
        </Link>
      </div>
    </>
  );
}
