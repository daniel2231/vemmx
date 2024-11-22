import DownloadButton from './DownloadButton';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

import RoundButton from './RoundButton';
import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';

const RoundButtonDiv = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;

export default function SocialFunction(props) {
	return (
		<div>
			<DownloadButton text="Download" />
			<RoundButtonDiv>
				<Tooltip title="Add to Drive">
					<RoundButton icon={<AddToDriveIcon />} />
				</Tooltip>
				<Tooltip title="Share">
					<RoundButton icon={<ShareIcon />} />
				</Tooltip>
				<Tooltip title="Delete">
					<RoundButton icon={<DeleteIcon />} />
				</Tooltip>
			</RoundButtonDiv>
		</div>
	);
}
