import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, router } from '@inertiajs/react';

const Settings = () => (
    <Container className='p-3 text-center'>
        <Link href='/'>Main</Link>
        <Container className='p-5 mb-4 bg-light rounded-3'>
            <h1 className='header'>Settings Page</h1>
        </Container>
    </Container>
);

export default Settings;
