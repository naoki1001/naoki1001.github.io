import { Education } from '@/features/portfolio/components/Education';
import { Experience } from '@/features/portfolio/components/Experience';

export const AboutMe: React.FC = () => {
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