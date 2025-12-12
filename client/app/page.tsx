import Card from '@/app/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Button className="px-4 py-4 text-mini" variant={'outline'}>
                Mua khóa học Next.js
            </Button>
            <Input type="text" placeholder="Nhập họ và tên" />
            <Card />
        </div>
    );
}
