import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='container-sm mt-5 bg-success p-4 text-light'>
        <p className='fs-1 fw-bold text-sm'>
          Introducing ShopLyft: Your Ultimate Online Shopping Destination
        </p>
        <p className='fs-3 text-sm'>
          In the fast-paced world of online retail, ShopLyft emerges as a beacon
          of convenience, quality, and style. With a commitment to providing an
          exceptional shopping experience, ShopLyft has quickly become a
          household name in the realm of e-commerce.
        </p>
      </div>

      <div className='container-sm mt-5 bg-success-subtle p-4 text-success'>
        <p className='fs-1 fw-bold text-sm'>Start Shopping Today</p>
        <p className='fs-3 text-sm'>
          Discover the joy of convenient, quality shopping with ShopLyft. Dive
          into a world of endless possibilities and elevate your online shopping
          experience. Join us on this exciting journey, and let ShopLyft be your
          trusted companion in the world of e-commerce. Your satisfaction is our
          promise, and your happiness is our reward. Happy shopping!
        </p>
        <div className='d-flex justify-content-end'>
          <Link to='/Products'>
            <button className='btn btn-success p-2 fs-3'>Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
