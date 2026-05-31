import { WorkModal } from './WorkModal';

const works = [
    {
        id: 1,
        title: 'SUI2024でデモ発表を行いました。',
        image: 'images/no_image.gif',
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

export function Works() {
    return (
        <section id='works' className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-center text-indigo-600'>Works</h2>
            <div id='worksContainer' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {works.map((work) => {
                    return (
                        <WorkModal key={work.id} work={work} />
                    );
                })}
            </div>
        </section>
    );
};
