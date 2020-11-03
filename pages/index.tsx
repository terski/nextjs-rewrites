import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
        <p>Next.js will check application routes before falling back to proxying to <code>http://skillshare.test</code>.</p>
        <p>
            Go{' '}
            <Link href="/browse">
                <a>browse</a>
            </Link>{' '}
            some classes.
        </p>
    </Layout>
);

export default IndexPage;
