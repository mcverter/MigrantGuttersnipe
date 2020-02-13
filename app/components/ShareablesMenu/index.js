/**
 *
 * ShareablesMenu
 *
 */

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeKeyFromShareable } from '../../utils/utils';
import { getPlainIcon } from '../../images';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function ShareableMenu(props) {
  const { shareables, onListItemClicked, title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleMenuClick}
      >
        {title}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {shareables.map(shareable => {
          const shareableKey = makeKeyFromShareable(shareable);
          return (
            <StyledMenuItem
              key={shareableKey}
              onClick={() => {
                onListItemClicked(shareableKey);
                handleClose();
              }}
            >
              <ListItemIcon>{getPlainIcon(shareable.type)}</ListItemIcon>
              <ListItemText primary={shareable.name} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}

ShareableMenu.propTypes = {
  shareables: PropTypes.array,
  onListItemClicked: PropTypes.func,
  title: PropTypes.string,
};
