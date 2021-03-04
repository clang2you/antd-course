import { Card } from 'antd';

export default () => {
	const style = {
		width: '400px',
		margin: '30px',
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0, 2)',
		border: '1px solid #e8e8e8'
	};

	return (
		<Card style={style} actions={[ <a>登录</a>, <a>退出</a> ]}>
			<Card.Meta
				avatar={
					<img
						alt=""
						style={{ width: '90px', height: '64px', borderRadius: '10px' }}
						src="https://tenfei01.cfp.cn/creative/vcg/veer/1600water/veer-156743055.jpg"
					/>
				}
				title="LN3"
				description="改善案共用系统"
			/>
		</Card>
	);
};
