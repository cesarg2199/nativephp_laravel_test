import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, router } from '@inertiajs/react';

function updateStatus(status: string): void {
    router.visit('/hide', {
        method: 'get',
        data: {
            status,
        },
    });
}

const Main = () => (
    <Container className='p-3'>
        <Link href='/settings'>Settings</Link>
        <Container className='p-5 mb-4 bg-light rounded-3'>
            <h1 className='header'>Laravel, Inertia, React w/ Typescript, Bootstrap, MySQL, NativePHP Base Project</h1>
        </Container>
        <div className='text-center'>
            <Button className='btn btn-success center' onClick={() => updateStatus('Online')}>
                Online
            </Button>
            &nbsp;&nbsp;
            <Button className='btn btn-danger center' onClick={() => updateStatus('Offline')}>
                Offline
            </Button>
        </div>
    </Container>
);

export default Main;
