import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const NotFound = () => {

    const navigate = useNavigate();
    return (
        <div
           className="flex h-screen w-full flex-col items-center justify-center bg-gray-100"
        >
           <Card className="text-center shadow-lg max-w-lg">
             <CardHeader>
                <CardTitle>404 Not Found</CardTitle>
                <p
                  className="text-gray-600"
                >
                    The page you are looking for does not exist.
                </p>
             </CardHeader>
             <CardContent>

                <img 
                   className='rounded-lg shadow-lg'
                   src="https://img.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg?t=st=1741973515~exp=1741977115~hmac=80186fb243028eb21e4cdcabe27e6dd3c2d679cffda6871af3fa1b3e8850310a&w=826"
                />

                <Button
                   variant="outline"
                   onClick={(() => navigate(-1))}
                   className="mt-4"
                >
                    Go back
                </Button>
             </CardContent>
           </Card>
        </div>
    );
};