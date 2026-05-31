import {
    Card,
    CardAction,
    CardTitle,
    CardDescription,
    CardHeader,
    CardFooter
} from '@/components/ui/card'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'

type WorkModalProps = {
    work: {
        id: number;
        title: string;
        date: string;
        image: string;
        description: string;
        links: {
            text: string;
            url: string;
        }[];
    }
};

export function WorkModal({ work }: WorkModalProps) {
    return (
        <Dialog key={work.id}>
            <DialogTrigger
                nativeButton={false}
                render={<Card className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 p-0' />}
            >
                {/* 
                    NOTE: next/image で fill を使用するため、親要素に `relative` が必須。
                    画像（GIF含む）は `next.config.ts` で一括して unoptimized: true に設定済み。
                */}
                <div className='relative w-full h-48'>
                    <Image
                        src={work.image ? work.image:'images/no_image.gif'}
                        alt={work.title}
                        fill
                        className='object-cover'    // アスペクト比を保ったまま枠内に収める
                    />
                </div>
                <CardHeader className='p-6'>
                    <CardTitle className='font-bold text-xl mb-2 text-center'>{work.title}</CardTitle>
                    <CardDescription className='text-gray-600 mb-2 text-center'>
                        {work.date}
                    </CardDescription>
                </CardHeader>
            </DialogTrigger>

            <DialogContent className='p-8 sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white'>
                <DialogHeader className='mb-4'>
                    <DialogTitle className='text-2xl font-bold mb-2 text-center text-foreground'>
                        {work.title}
                    </DialogTitle>
                    <DialogDescription className='text-gray-600 text-center'>
                        {work.date}
                    </DialogDescription>
                </DialogHeader>

                <div className='relative w-full h-64 object-cover mb-4 rounded-lg'>
                    <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className='object-cover'
                    />
                </div>

                <p className='text-gray-700 mb-4 text-center whitespace-pre-wrap'>
                    {work.description}
                </p>

                {work.links.length > 0 && (
                    <>
                        <h3 className='text-xl font-bold mb-2 text-center'>関連リンク</h3>
                        <div className='mb-4 text-center flex flex-col items-center gap-2'>
                            {work.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-indigo-600 hover:underline'
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {/* 閉じるボタン */}
                <div className='text-center mt-6'>
                    <DialogClose render={
                        <button className='bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300'>
                            Close
                        </button>
                    } />
                </div>
            </DialogContent>
        </Dialog>
    );
};
