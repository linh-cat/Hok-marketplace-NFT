import { Modal } from 'antd';

type PropsModal = {
	visible: boolean;
	modalText: string;
	title: string;
	btnOk?: string;
	btnCancel?: string;
	handleOk: () => void;
	handleCancel: () => void;
};

const Index = ({ visible, modalText, title, handleOk, handleCancel }: PropsModal) => {
	return (
		<Modal
			title={title}
			visible={visible}
			onOk={handleOk}
			onCancel={handleCancel}
			width="900px"
			okButtonProps={{ style: { backgroundColor: 'rgb(43, 120, 228)' } }}
		>
			<p>{modalText}</p>
		</Modal>
	);
};

export default Index;
