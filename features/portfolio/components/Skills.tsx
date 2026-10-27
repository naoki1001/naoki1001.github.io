export const Skills: React.FC = () => {
    return (
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
    );
};