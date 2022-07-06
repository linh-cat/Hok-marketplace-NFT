import { useState } from 'react';
import './index.scss';
import ButtonHok from 'components/ButtonHok';
import ModalHok from 'components/ModalHok';
import { toast } from 'react-toastify';
import HokLogo from 'assets/images/HOK-Logo-white.png';
import { useDispatch, useSelector } from 'react-redux';
import web3 from 'connection/web3';
import { loadAccount } from 'redux/actions/action-creators/connectionAction';

import { account } from 'redux/selector/selector';
import { useHistory } from 'react-router-dom';

const Index = () => {
	const dispatch = useDispatch();
	const accountWeb3 = useSelector(account);
	const [loadingBtn, setLoadingBtn] = useState<boolean>(false);

	let history = useHistory();

	const commonModal: {
		title: string;
		modalText: string;
		btnOk: string;
		btnCancel: string;
		handleOk: () => void;
		handleCancel: () => void;
	} = {
		title: 'Confirm',
		modalText: 'this is modal',
		btnOk: 'OK',
		btnCancel: 'Cancel',
		handleCancel: () => {},
		handleOk: () => {},
	};

	const [modalVisible, setModalVisible] = useState<{ visible: boolean; modal: any }>({
		visible: false,
		modal: commonModal,
	});

	const connectWalletHandler = async () => {
		let accounts: any;
		setLoadingBtn(true);

		try {
			await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
			setLoadingBtn(false);
		} catch (error) {
			console.error(error);
		}
		if (web3) {
			accounts = await web3.eth.getAccounts();
			const account = accounts[0];
			dispatch(loadAccount(account));
		}
	};

	const disconnectWalletHandler = () => {
		try {
			dispatch(loadAccount(''));
		} catch (error) {
			console.log(error);
		}
	};

	const openModal = () => {
		const modalHeader = commonModal;

		modalHeader.handleOk = () => {
			setModalVisible({ visible: false, modal: modalHeader });
		};
		modalHeader.handleCancel = () => {
			setModalVisible({ visible: false, modal: modalHeader });
		};
		setModalVisible({ visible: true, modal: modalHeader });
	};

	const showToast = () => {
		toast.success('🦄 Wow so easy!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<>
			<ModalHok
				title={modalVisible.modal.title}
				modalText={modalVisible.modal.modalText}
				visible={modalVisible.visible}
				handleOk={modalVisible.modal.handleOk}
				handleCancel={modalVisible.modal.handleCancel}
			/>
			<div className="header">
				<div className="header__icon">
					<img src={HokLogo} alt="logo" />
					<ButtonHok
						type="link"
						text="Hok Marketplace"
						bold="bold"
						color="#fff"
						onClick={() => history.push('/')}
					/>
				</div>
				<ul className="header__nav">
					{/* <li className="header__nav--item">
						<ButtonHok
							type="link"
							text="Show modal"
							color="#6FA8DC"
							bold="bold"
							onClick={openModal}
						/>
					</li>
					<li className="header__nav--item">
						<ButtonHok
							type="default"
							text="Show toast"
							color="#6FA8DC"
							bold="bold"
							onClick={showToast}
						/>
					</li>
					<li className="header__nav--item">
						<ButtonHok
							type="link"
							text="New NFT"
							color="#6FA8DC"
							bold="bold"
							onClick={() => history.push('/new')}
						/>
					</li> */}
					<li className="header__nav--item">
						<ButtonHok type="link" text="Home" color="#6FA8DC" bold="bold" />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="Hok-Main" color="#B4A7D6" bold="bold" />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="Heroes GenX" color="#E06666" bold="bold" />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="About us" color="#000000" bold="bold" />
					</li>

					{accountWeb3 && (
						<li>
							<ButtonHok type="link" text={accountWeb3?.toString()} href="/mynft"/>
						</li>
					)}

					<li className="header__nav--item">
						<ButtonHok
							type="default"
							bold="bold"
							border="1px solid #000000"
							radius="5px"
							loading={loadingBtn}
							text={accountWeb3 ? 'Logout' : 'Login'}
							onClick={accountWeb3 ? disconnectWalletHandler : connectWalletHandler}
						/>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Index;
