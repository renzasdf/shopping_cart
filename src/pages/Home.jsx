import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div
        id='home'
        className='container-fluid d-flex justify-content-center align-items-center'>
        <div className='container d-flex flex-column h-100 justify-content-center align-items-center'>
          <p id='title' className='text-light fs-1 fw-bold p-5 text-center'>
            Dive into a world of endless possibilities and elevate your online
            shopping experience.
          </p>

          <Link to='/Products'>
            <button className='btn btn-light p-3 fs-3 fw-bold'>Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
