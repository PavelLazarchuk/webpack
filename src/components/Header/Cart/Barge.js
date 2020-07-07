import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(() => ({
	badge: {
		top: 2,
		right: 3,
		fontSize: 12,
	},
}))(Badge);

export default StyledBadge;
