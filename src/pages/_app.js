import '@/styles/globals.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return <Component {...pageProps} />
}
