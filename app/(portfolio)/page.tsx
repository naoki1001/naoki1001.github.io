import {
    Card,
    CardAction,
    CardTitle,
    CardDescription,
    CardHeader,
    CardFooter
} from '@/components/ui/card'
import Image from 'next/image'

const works = [
    {
        id: 1,
        title: 'SUI2024でデモ発表を行いました。',
        image: 'https://pai.eng.shibaura-it.ac.jp/_astro/9.DNs-1VPm_Z1HAMvO.webp',
        date: '2024年10月7日',
        description: '10月7日から10月9日に行われたSUI2024でデモ発表を行いました。英語での発表だったので大変でしたが、他の研究を聞きに行ったり、発表のない日はドイツ観光に充てたりして様々な面で貴重な体験でした。',
        links: [
            { text: 'SUI2024', url: 'https://sui.acm.org/2024/' },
            { text: '論文', url: 'https://dl.acm.org/doi/10.1145/3677386.3688871' },
            { text: '活動報告 (研究室Webページ) ', url: 'https://pai.eng.shibaura-it.ac.jp/reports/post-2024-11-05-01/' },
        ]
    },
    {
        id: 2,
        title: 'ポートフォリオサイトを公開しました。',
        image: 'images/no_image.gif',
        date: '2024年7月11日',
        description: 'ポートフォリオサイトを公開しました。今後は過去に作った作品や新たに発表する作品を追加していきたいです。',
        links: [
            { text: 'GitHub', url: 'https://github.com/naoki1001/' },
        ]
    },
    {
        id: 3,
        title: 'HCI208で登壇発表を行いました。',
        image: 'images/hci208.jpg',
        date: '2024年6月7日',
        description: '2024年6月6日、6月7日に東京大学で開催された第208回ヒューマンコンピュータインタラクション研究発表会で登壇発表を行いました。登壇発表ではありましたが、自分の研究成果を分かりやすくするため、自分の体をタップするとスライドが切り替わるようなプログラムを作り、発表自体がライブデモになるように工夫しました。',
        links: [
            { text: 'HCI208', url: 'https://www.sighci.jp/events/sig/208' },
            { text: '論文', url: 'http://id.nii.ac.jp/1001/00234340/' },
            { text: '活動報告 (研究室Webページ) ', url: 'https://pai.eng.shibaura-it.ac.jp/reports/post-2024-06-28/' }
        ]
    },
    {
        id: 4,
        title: '書籍管理アプリのプロトタイプを作ってみました。',
        image: 'images/book_manager_prototype.gif',
        date: '2024年5月25日',
        description: '研究室にある蔵書の管理を行うための書籍管理アプリを作ってみました。登録・貸し出し・返却などをバーコードをかざすだけでできるようにしましたが、蔵書に限らず備品全般を管理したいということで使わないことになりました。せっかく作ったので時間のある時にでも個人利用向けに改良したいと思います。',
        links: [
            { text: 'デモサイト（公開準備中）', url: 'https://script.google.com/macros/s/AKfycbyLIwjrLNDsMy3t7j8eJvegahjgxat72KkMgFjuo7jnGZIz85JJjO-gajj3iDslK3z1/exec' }
        ]
    },
    {
        id: 5,
        title: 'インタラクション2024のデモセッションで発表を行いました。',
        image: 'images/interaction2024.jpg',
        date: '2024年3月6日',
        description: '2024年3月6日から3月8日まで開催されたインタラクション2024のデモセッションで発表を行いました。現地の発表ブースでは、自分の体をたたいて遊ぶリズムゲームを発表しました。',
        links: [
            { text: 'インタラクション2024', url: 'https://www.interaction-ipsj.org/2024/' },
            { text: '文献情報', url: 'https://www.interaction-ipsj.org/proceedings/2024/data/bib/1B-45.html' },
            { text: '発表論文 (PDF) ', url: 'https://www.interaction-ipsj.org/proceedings/2024/data/pdf/1B-45.pdf' },
            { text: 'デモアプリ', url: 'https://github.com/naoki1001/Interaction2024/' },
            { text: '活動報告 (研究室Webページ) ', url: 'https://pai.eng.shibaura-it.ac.jp/reports/post-2024-04-04/' }
        ]
    }
];

const Education: React.FC = () => {
    return (
        <div className='border-b pb-4 mb-4'>
            <h3 className='text-xl font-semibold mb-2 text-center'>学歴</h3>
            <div>
                <ul className='list-disc list-inside text-gray-700'>
                    <li>2019年3月: 埼玉県立越谷北高等学校 卒業</li>
                    <li>2020年4月: 芝浦工業大学 工学部 情報工学科 入学</li>
                    <li>2024年3月: 芝浦工業大学 工学部 情報工学科 卒業</li>
                    <li>2024年4月: 芝浦工業大学大学院 理工学研究科 電気電子情報工学専攻 修士課程 入学</li>
                    <li>2026年3月: 芝浦工業大学大学院 理工学研究科 電気電子情報工学専攻 修士課程 修了 / 修士（工学）</li>
                </ul>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <div className='border-b pb-4 mb-4'>
            <h3 className='text-xl font-semibold mb-2 text-center'>職歴</h3>
            <div>
                <ul className='list-disc list-inside text-gray-700'>
                    <li>2026年4月: 株式会社ドワンゴ 入社</li>
                    <li>
                        {(() => {
                            const myDate = new Date();
                            const myYear = myDate.getFullYear();
                            const myMonth = myDate.getMonth() + 1; // getMonth is 0-based
                            return myYear + '年' + myMonth + '月: 株式会社ドワンゴ 在籍中';
                        })()}
                    </li>
                </ul>
            </div>
        </div>
    );
};

const AboutMe: React.FC = () => {
    return (
        <section id='about' className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-center text-indigo-600'>About Me</h2>
            <div className='bg-white rounded-lg shadow-lg p-8'>
                <p className='text-gray-700 text-center mb-8'>
                    株式会社ドワンゴに所属するエンジニアです。<br />
                    大学院時代はPythonやGASを使った開発や、研究でUnityなどを使ってVRの開発を行っていました。<br />
                    現在はCI/CD周りやインフラ (IT業界的意味合い) を勉強中。<br />
                    今は素の状態でサイトを書いてしまっているのでそのうち改修予定。
                </p>
                <div className='space-y-8'>
                    <Education />
                    <Experience />
                    <div className='border-b pb-4 mb-4'>
                        <h3 className='text-xl font-semibold mb-2 text-center'>技術スキル</h3>
                        <div className='space-y-4'>
                            <div>
                                <h4 className='font-semibold mb-2'>メイン言語・フレームワーク</h4>
                                <ul className='list-disc list-inside text-gray-700'>
                                    <li>Python: Django, OpenCV, PyTorch, PDF系ライブラリ等</li>
                                    <li>Unity: Oculus Integration, Meta XR All-in-One SDK</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mb-2'>その他授業などで経験のある言語等</h4>
                                <ul className='list-disc list-inside text-gray-700'>
                                    <li>C/C++: 競プロ, 授業など</li>
                                    <li>JavaScript: Webアプリ開発</li>
                                    <li>HTML/CSS: 同上</li>
                                    <li>Java: 自然言語処理、Webアプリなど</li>
                                    <li>R: 分析ツールとして</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mb-2'>外部リンク</h4>
                                <ul className='list-disc list-inside text-gray-700'>
                                    <li>AtCoder: <a href='https://atcoder.jp/users/mottiephi'
                                        className='text-indigo-600 hover:text-indigo-800 font-semibold'>mottiephi</a>
                                    </li>
                                    <li>GitHub: <a href='https://github.com/naoki1001'
                                        className='text-indigo-600 hover:text-indigo-800 font-semibold'>naoki1001</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2 text-center'>研究内容</h3>
                        <p className='text-gray-700 text-center'>
                            私は、人とコンピュータの関わりを研究するHCI (ヒューマンコンピュータインタラクション) の分野を専攻し、その中でもVR/MRやユーザの身体を入力デバイスに変える研究を行っています。
                        </p>
                        <p className='text-gray-700 text-center'>所属研究室(2022年12月~2026年3月): <a href='http://pai.eng.shibaura-it.ac.jp/'
                            className='text-indigo-600 hover:text-indigo-800 font-semibold'>実世界インタラクション研究室</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Works: React.FC = () => {
    return (
        <section id='works' className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-center text-indigo-600'>Works</h2>
            <div id='worksContainer' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {works.map((work) => {
                    return (
                        <Card key={work.id} className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 p-0'>
                            {/* 
                                NOTE: next/image で fill を使用するため、親要素に `relative` が必須。
                                画像（GIF含む）は `next.config.ts` で一括して unoptimized: true に設定済み。
                            */}
                            <div className='relative w-full h-48'>
                                <Image
                                    src={work.image}
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
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

const Contact: React.FC = () => {
    return (
        <section id='contact' className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-center text-indigo-600'>Contact</h2>
            <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
                <p className='text-gray-700 mb-4'>Email: al20082[at]shibaura-it.ac.jp</p>
                <p className='text-gray-700 mb-4'>※[at]を@に読み替えてください。</p>
            </div>
        </section>
    );
};

export default function RootLayout() {
    return (
        <main className='container mx-auto mt-24 p-8 max-w-4xl'>
            <section id='home' className='mb-16 h-screen flex items-center justify-center'>
                <h2 className='text-5xl font-bold text-center text-indigo-700'>Welcome to My Portfolio</h2>
            </section>

            <AboutMe />

            <Works />

            <Contact />
        </main>
    );
}
