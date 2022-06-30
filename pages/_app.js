import '../styles/globals.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </Provider >
  );
}

export default MyApp
