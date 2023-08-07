import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { router } from '@inertiajs/react';

function status(status: string):void {
    router.visit('/hide', {
        method: 'get',
        data: {
            status
        },
    });
}

const Main = () => (
    <Container className='p-3 text-center'>
        <Container className='p-5 mb-4 bg-light rounded-3'>
            <h1 className='header'>
                Cesar 8/7 Laravel, Inertia, React w/ Typescript, Bootstrap, MySQL, NativePHP Base Project
            </h1>
        </Container>
        <Button className='btn btn-success center' onClick={() => status('Online')}>
            Online
        </Button>
        <br />
        <br />
        <Button className='btn btn-danger center' onClick={() => status('Offline')}>
            Offline
        </Button>
    </Container>
);

export default Main;
