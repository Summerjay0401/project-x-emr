import * as React from 'react';
import Badge from '@mui/material/Badge';
import BellIcon from '@mui/icons-material/Bell';
import './NotificationDropdown.css';
import Notifications from '@mui/icons-material/NotificationsOutlined';


export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <BellIcon color="action" />
    </Badge>
  );
}