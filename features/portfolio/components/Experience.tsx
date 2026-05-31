export const Experience: React.FC = () => {
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