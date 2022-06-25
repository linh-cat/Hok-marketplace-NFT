import { useState, useEffect } from 'react';
import './index.scss';
import { Row } from 'antd';
import { Form, Input, Button } from 'antd';
import ButtonHok from 'components/ButtonHok';
import ComboBoxHok from 'components/ComboBoxHok';
import { useSelector } from 'react-redux';
import { account, collectionContract } from 'redux/selector/selector';
import {
	accessories as ListAccessories,
	arms as ListArms,
	back as ListBack,
	body as ListBody,
	BrainShell as ListBrain,
	endoskeletion as ListEndo,
	deltoid as ListDeltoid,
	energy as ListEnergy,
} from 'components/Filter/List';
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const Index = () => {
	const Account = useSelector(account);
	const CollectionContract = useSelector(collectionContract);
	const [accessories, setAccessories] = useState('');
	const [arms, setArms] = useState('');
	const [back, setBack] = useState('');
	const [body, setBody] = useState('');
	const [brain, setBrain] = useState('');
	const [endo, setEndo] = useState('');
	const [energy, setEnergy] = useState('');
	const [deltoid, setDeltoid] = useState('');
	const [capturedFileBuffer, setCapturedFileBuffer] = useState<any>(null);
	const enteredAccessories = (value: any) => {
		setAccessories(value);
	};
	const enteredArms = (value: any) => {
		setArms(value);
		
	};
	const enteredBack = (value: any) => {
		setBack(value);
		
	};
	const enteredBody = (value: any) => {
		setBody(value);
		
	};
	const enteredBrain = (value: any) => {
		setBrain(value);
		
	};
	const enteredDeltoid = (value: any) => {
		setDeltoid(value);
		
	};
	const enteredEndo = (value: any) => {
		setEndo(value);
		
	};
	const enteredEnergy = (value: any) => {
		setEnergy(value);
		
	};
	const enteredFile = (event: any) => {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			setCapturedFileBuffer(new Buffer(reader.result as ArrayBuffer));
		};
	};
	const mintHandler = async () => {
		try {
			if (!Account) {
				window.alert('connect wallet before mint a new NFT');
				return;
			}
			const formIsValid =
				capturedFileBuffer && arms && back && body && brain && deltoid && endo && energy;
			if (formIsValid) {
				// Add file to the IPFS
				const fileAdded = await ipfs.add(capturedFileBuffer);
				if (!fileAdded) {
					console.error('Something went wrong when updloading the file');
					return;
				}
				const metadata = {
					title: 'Asset Metadata',
					type: 'object',
					properties: {
						type: {
							type: 'string',
							description: 'Genx',
						},
						image: {
							type: 'string',
							description: fileAdded.path,
						},
						accessories: {
							type: 'string',
							description: accessories,
						},
						arms: {
							type: 'string',
							description: arms,
						},
						back: {
							type: 'string',
							description: back,
						},
						body: {
							type: 'string',
							description: body,
						},
						brain: {
							type: 'string',
							description: brain,
						},
						deltoid: {
							type: 'string',
							description: deltoid,
						},
						endo: {
							type: 'string',
							description: endo,
						},
						energy: {
							type: 'string',
							description: energy,
						},
					},
				};
				const metadataAdded = await ipfs.add(JSON.stringify(metadata));
				console.log(metadataAdded);
				if (!metadataAdded) {
					console.error('Something went wrong when updloading the file');
					return;
				}
				CollectionContract.methods
					.safeMint(metadataAdded.path)
					.send({ from: Account })
					.on('transactionHash', (hash: any) => {
						window.alert('Mint Successfully');
						setAccessories('');
						setArms('');
						setBack('');
						setBody('');
						setBrain('');
						setDeltoid('');
						setEndo('');
						setEnergy('');
						setCapturedFileBuffer(null);
					})
					.on('error', (e: any) => {
						window.alert('Something went wrong when pushing to the blockchain');
					});
			} else {
				window.alert('fill all fields');
			}
		} catch (error) {
			console.log('error :', error);
		}
	};
	// const mintHandler = async () => {
	//     // const fileAdded = await ipfs.add(capturedFileBuffer);
	//     // if(!fileAdded) {
	//     //     console.error('Something went wrong when updloading the file');
	//     //     return;
	//     //     }
	//     // console.log('file ::' , fileAdded.path)
	//     //QmPunDCk6Jrq4mBhWg7qUvE5Nhf4vs7SQP7Rk2pycmn3B7
	//     const metadata =  {
	//                         title: "Asset Metadata",
	//                         type: "object",
	//                         properties: {
	//                             type :{
	//                                 type: "string",
	//                                 description: 'HOK-main'
	//                                 },
	//                             image: {
	//                                 type: "string",
	//                                 description: 'QmPunDCk6Jrq4mBhWg7qUvE5Nhf4vs7SQP7Rk2pycmn3B7'
	//                             },
	//                             attribute: {
	//                                 type: "string",
	//                                 description: 'HOK legs'
	//                             },

	//                         }
	//                     };
	//     const metadataAdded = await ipfs.add(JSON.stringify(metadata));
	//     console.log(metadataAdded)
	//     if(!metadataAdded) {
	//     console.error('Something went wrong when updloading the file');
	//         return;
	//     }
	//     CollectionContract.methods.safeMint(metadataAdded.path).send({ from: Account })
	//         .on('transactionHash', (hash:any) => {
	//          window.alert('Mint Successfully')
	//         })
	//         .on('error', (e:any) =>{
	//             window.alert('Something went wrong when pushing to the blockchain');
	//         })
	// }
	useEffect(() => {
		// setTest1()
	}, []);

	return (
		<div className="form__new">
			<div className="title">Mint new NFT</div>
			<Row>
				<ComboBoxHok options={ListAccessories} defaultValue={'test1'} title="type" width="180px" />
				<ComboBoxHok
					options={ListAccessories}
					defaultValue={''}
					title="Accessories"
					width="180px"
					onChangeValue={enteredAccessories}
					values={accessories}
				/>
				<ComboBoxHok
					options={ListArms}
					defaultValue={''}
					title="Arms"
					width="180px"
					onChangeValue={enteredArms}
					values={arms}
				/>
				<ComboBoxHok
					options={ListBack}
					defaultValue={''}
					title="Back"
					width="180px"
					onChangeValue={enteredBack}
					values={back}
				/>
				<ComboBoxHok
					options={ListBrain}
					defaultValue={''}
					title="Brain Shell"
					width="180px"
					onChangeValue={enteredBrain}
					values={brain}
				/>
				<ComboBoxHok
					options={ListEndo}
					defaultValue={''}
					title="Endoskeleton"
					width="180px"
					onChangeValue={enteredEndo}
					values={endo}
				/>
				<ComboBoxHok
					options={ListBody}
					defaultValue={''}
					title="Body"
					width="180px"
					onChangeValue={enteredBody}
					values={body}
				/>
				<ComboBoxHok
					options={ListDeltoid}
					defaultValue={''}
					title="Deltoid"
					width="180px"
					onChangeValue={enteredDeltoid}
					values={deltoid}
				/>
				<ComboBoxHok
					options={ListEnergy}
					defaultValue={''}
					title="Energy"
					width="180px"
					onChangeValue={enteredEnergy}
					values={energy}
				/>
				<input type="file" onChange={enteredFile} />
			</Row>
			<ButtonHok text="Create" type="primary" onClick={mintHandler} />

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</div>
	);
};

export default Index;
