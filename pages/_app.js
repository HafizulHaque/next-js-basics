import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/global.css';

const App = ({Component, pageProps}) => {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>Personal Blog</h1>
        <nav className='header-nav'>
          <ul>
            <li>
              <Link 
                href="/" 
                className={router.pathname=='/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={router.pathname=='/blog' ? 'active' : ''}>
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className={router.pathname=='/about' ? 'active' : ''}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Component {...pageProps}/>
      <p>Footer</p>
    </>
  )
}

export default App;